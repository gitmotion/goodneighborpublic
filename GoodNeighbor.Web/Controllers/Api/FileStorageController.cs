using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using GoodNeighbor.Models.Domain;
using GoodNeighbor.Models.Requests;
using GoodNeighbor.Models.Responses;
using GoodNeighbor.Models.ViewModels;
using GoodNeighbor.Services.FileStorage;
using GoodNeighbor.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Web;
using System.Web.Http;

namespace GoodNeighbor.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/file-storage")]
    public class FileStorageController : ApiController
    {
        private IFileStorageService _fileStorageService;

        // Define Required Parameters for AWS Access
        
            //AWS KEYS

        private static readonly Amazon.RegionEndpoint bucketRegion = Amazon.RegionEndpoint.USWest2;
        static readonly AmazonS3Client s3Client = new AmazonS3Client(awsAccessKey, awsSecretKey, bucketRegion);
        TransferUtility fileTransferUtility = new TransferUtility(s3Client);

        // CONSTRUCTOR
        public FileStorageController(IFileStorageService fileStorageService)
        {
            _fileStorageService = fileStorageService;
        }

        [HttpPost]
        [Route("{id:int}")]
        public HttpResponseMessage Upload(int id)
        {
            // GRABBING THE FILE FROM THE HTTP REQUEST & ASSIGNING GUID TO SERVERFILENAME
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                try
                {
                    var postedFile = httpRequest.Files[0];
                    var postedFileName = postedFile.FileName;
                    var serverFileName = Path.GetFileNameWithoutExtension(postedFileName) + "." + Guid.NewGuid() + Path.GetExtension(postedFileName);

                    // AWS Upload
                    TransferUtilityUploadRequest request = new TransferUtilityUploadRequest
                    {
                        BucketName = awsBucketName,
                        Key = serverFileName,
                        InputStream = postedFile.InputStream
                    };
                    fileTransferUtility.Upload(request);

                    // CREATING MODEL TO SEND TO SERVICE TO SAVE FILE DATA TO SQL
                    FileStorageAddRequest newFile = new FileStorageAddRequest
                    {
                        UserFileName = postedFileName,
                        BasePath = "C64/goodneighbor/",
                        SystemFileName = serverFileName,
                        IncidentId = id,
                        ModifiedBy = "Your Neighbor"
                    };
                    int newFileId = _fileStorageService.Create(newFile);
                    FileStorageViewModel newFileUpload = _fileStorageService.SelectById(newFileId);
                                                                          
                    ItemResponse<FileStorageViewModel> resp = new ItemResponse<FileStorageViewModel>();
                    resp.Item = newFileUpload;
                    return Request.CreateResponse(HttpStatusCode.Created, resp);

                }
                catch (Exception ex)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
                }
            } else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Upload Failed - Check the file being uploaded.");
            }
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                // GETTING THE RAW RESPONSE FROM GET ALL
                ItemsResponse<FileStorageViewModel> rawResp = new ItemsResponse<FileStorageViewModel>
                {
                    Items = _fileStorageService.SelectAll()
                };
                //var rawData = rawResp.Items;

                //// REMODELING THE rawData(FILESTORAGEDOMAIN) TO THE viewModelResp(FILESTORAGEVIEWMODEL)
                //List<FileStorageViewModel> viewModelResp = new List<FileStorageViewModel>();
                //for (int i = 0; i < rawData.Count; i++)
                //{
                //    viewModelResp.Add(new FileStorageViewModel
                //    {
                //        Id = rawData[i].Id,
                //        UserFileName = rawData[i].UserFileName,
                //        Url = awsResourceUrl + rawData[i].BasePath + rawData[i].SystemFileName,
                //        UserId = rawData[i].UserId,
                //        ModifiedDate = rawData[i].ModifiedDate,
                //        ModifiedBy = rawData[i].ModifiedBy
                //    });
                //};
                return Request.CreateResponse(HttpStatusCode.OK, rawResp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                ItemResponse<FileStorageViewModel> resp = new ItemResponse<FileStorageViewModel>
                {
                    Item = _fileStorageService.SelectById(id)
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("incident/{id:int}")]
        public HttpResponseMessage SelectByIncidentId(int id)
        {
            try
            {
                // GETTING THE RAW RESPONSE FROM GET ALL
                ItemsResponse<FileStorageViewModel> rawResp = new ItemsResponse<FileStorageViewModel>
                {
                    Items = _fileStorageService.SelectByIncidentId(id)
                };
                //var rawData = rawResp.Items;

                //// REMODELING THE rawData(FILESTORAGEDOMAIN) TO THE viewModelResp(FILESTORAGEVIEWMODEL)
                //List<FileStorageViewModel> viewModelResp = new List<FileStorageViewModel>();
                //for (int i = 0; i < rawData.Count; i++)
                //{
                //    viewModelResp.Add(new FileStorageViewModel
                //    {
                //        Id = rawData[i].Id,
                //        UserFileName = rawData[i].UserFileName,
                //        Url = awsResourceUrl + rawData[i].BasePath + rawData[i].SystemFileName,
                //        IncidentId = rawData[i].UserId,
                //        ModifiedDate = rawData[i].ModifiedDate,
                //        ModifiedBy = rawData[i].ModifiedBy
                //    });
                //};
                return Request.CreateResponse(HttpStatusCode.OK, rawResp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        //[HttpPut]
        //[Route("{id:int}")]
        //public HttpResponseMessage Update(int id)
        //{
        //    try
        //    {
        //        ItemResponse<FileStorageDomain> currentResp = new ItemResponse<FileStorageDomain>
        //        {
        //            Item = _fileStorageService.SelectById(id)
        //        };
        //        // RETRIEVING FILE THAT IS BEING UPDATED
        //        var currentBasePath = currentResp.Item.BasePath;

        //        if (System.IO.File.Exists(currentBasePath))
        //        {
        //            System.IO.File.Delete(currentBasePath);

        //            var httpRequest = HttpContext.Current.Request;
        //            var postedFile = httpRequest.Files[0];
        //            var postedFileName = postedFile.FileName;
        //            var uniqueFileGuid = Path.GetFileNameWithoutExtension(postedFileName) + "." + Guid.NewGuid() + Path.GetExtension(postedFileName);
        //            var filePath = HttpContext.Current.Server.MapPath("~/Content/uploads/" + uniqueFileGuid);

        //            FileStorageUpdateRequest updateFile = new FileStorageUpdateRequest
        //            {
        //                Id = id,
        //                UserFileName = postedFileName,
        //                BasePath = filePath,
        //                SystemFileName = uniqueFileGuid,
        //                UserId = 1,
        //                ModifiedBy = "Logged In User"
        //            };
        //            postedFile.SaveAs(filePath);

        //            _fileStorageService.Update(updateFile);
        //            SuccessResponse resp = new SuccessResponse();
        //            return Request.CreateResponse(HttpStatusCode.Created, resp);

        //        } else
        //        return Request.CreateResponse(HttpStatusCode.BadRequest, "File may not exist in AWS.");
        //        }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
        //    }
        //}

        [HttpDelete]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                ItemResponse<FileStorageDomain> fileStorageResp = new ItemResponse<FileStorageDomain>
                {
                    Item = _fileStorageService.SelectByIdDelete(id)
                };

                var systemFileName = fileStorageResp.Item.SystemFileName;
                var fileStorageId = fileStorageResp.Item.Id;

                if (systemFileName != null)
                {
                    var deleteObjectRequest = new DeleteObjectRequest
                    {
                        BucketName = awsBucketName,
                        Key = systemFileName
                    };
                    s3Client.DeleteObject(deleteObjectRequest);
                    _fileStorageService.Delete(fileStorageId);
                    SuccessResponse deleteResp = new SuccessResponse();
                    return Request.CreateResponse(HttpStatusCode.OK, deleteResp);
                }
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
