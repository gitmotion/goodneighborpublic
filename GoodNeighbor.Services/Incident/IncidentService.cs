using GoodNeighbor.Data;
using GoodNeighbor.Data.Providers;
using GoodNeighbor.Models.Domain;
using GoodNeighbor.Models.Requests;
using GoodNeighbor.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Services.Incident
{
    public class IncidentService : IIncidentService
    {
        IDataProvider _dataProvider;
        IFileStorageService _fileStorageService;

        public int Create(IncidentAddRequest incidentAddRequest)
        {
            int returnVal = 0;

            var upvotes = SqlInt32.Null;
            var downvotes = SqlInt32.Null;
            if (incidentAddRequest.Upvotes > 0)
            {
                upvotes = incidentAddRequest.Upvotes;
            }
            if (incidentAddRequest.Downvotes > 0)
            {
                downvotes = incidentAddRequest.Downvotes;
            }

            _dataProvider.ExecuteNonQuery(
                "incidents_create",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    var parm = new SqlParameter
                    {
                        ParameterName = "@Id",
                        SqlDbType = SqlDbType.Int,
                        Direction = ParameterDirection.Output
                    };
                    paramCol.Add(parm);

                    paramCol.AddWithValue("@OffenseType", incidentAddRequest.OffenseType);
                    paramCol.AddWithValue("@Incident", incidentAddRequest.Incident);
                    paramCol.AddWithValue("@IncidentDate", incidentAddRequest.IncidentDate);
                    paramCol.AddWithValue("@IncidentTime", incidentAddRequest.IncidentTime);
                    paramCol.AddWithValue("@Location", incidentAddRequest.Location);
                    paramCol.AddWithValue("@Upvotes", upvotes);
                    paramCol.AddWithValue("@Downvotes", downvotes);
                    paramCol.AddWithValue("@AdditionalDescription", string.IsNullOrEmpty(incidentAddRequest.AdditionalDescription) ? null : incidentAddRequest.AdditionalDescription);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    returnVal = (int)paramCol["@Id"].Value;
                }
            );

            return returnVal;
        }

        public List<IncidentDomain> SelectAll()
        {
            var returnVal = new List<IncidentDomain>();

            _dataProvider.ExecuteCmd(
                "incidents_select_all",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    var model = new IncidentDomain();
                    int idx = 0;

                    model.Id = reader.GetSafeInt32(idx++);
                    model.OffenseType = reader.GetSafeString(idx++);
                    model.Incident = reader.GetSafeString(idx++);
                    model.IncidentDate = reader.GetSafeDateTime(idx++);
                    model.IncidentTime = reader.GetSafeString(idx++);
                    model.Location = reader.GetSafeString(idx++);
                    model.Upvotes = reader.GetSafeInt32(idx++);
                    model.Downvotes = reader.GetSafeInt32(idx++);
                    model.AdditionalDescription = reader.GetSafeString(idx++);
                    model.CreatedDate = reader.GetSafeDateTime(idx++);
                    model.ModifiedDate = reader.GetSafeDateTime(idx++);
                    model.Images = _fileStorageService.SelectByIncidentId(model.Id);
                    returnVal.Add(model);
                }
            );

            return returnVal;
        }

        public IncidentDomain SelectById(int id)
        {
            var returnVal = new IncidentDomain();

            _dataProvider.ExecuteCmd(
                "incidents_select_by_id",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int idx = 0;

                    returnVal.Id = reader.GetSafeInt32(idx++);
                    returnVal.OffenseType = reader.GetSafeString(idx++);
                    returnVal.Incident = reader.GetSafeString(idx++);
                    returnVal.IncidentDate = reader.GetSafeDateTime(idx++);
                    returnVal.IncidentTime = reader.GetSafeString(idx++);
                    returnVal.Location = reader.GetSafeString(idx++);
                    returnVal.Upvotes = reader.GetSafeInt32(idx++);
                    returnVal.Downvotes = reader.GetSafeInt32(idx++);
                    returnVal.AdditionalDescription = reader.GetSafeString(idx++);
                    returnVal.CreatedDate = reader.GetSafeDateTime(idx++);
                    returnVal.ModifiedDate = reader.GetSafeDateTime(idx++);
                }
            );

            return returnVal;
        }

        public void Update(IncidentUpdateRequest incidentUpdateRequest)
        {
            var upvotes = SqlInt32.Null;
            var downvotes = SqlInt32.Null;
            if (incidentUpdateRequest.Upvotes > 0)
            {
                upvotes = incidentUpdateRequest.Upvotes;
            }
            if (incidentUpdateRequest.Downvotes > 0)
            {
                downvotes = incidentUpdateRequest.Downvotes;
            }

            _dataProvider.ExecuteNonQuery(
                "incidents_update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", incidentUpdateRequest.Id);
                    paramCol.AddWithValue("@OffenseType", incidentUpdateRequest.OffenseType);
                    paramCol.AddWithValue("@Incident", incidentUpdateRequest.Incident);
                    paramCol.AddWithValue("@IncidentDate", incidentUpdateRequest.IncidentDate);
                    paramCol.AddWithValue("@IncidentTime", incidentUpdateRequest.IncidentTime);
                    paramCol.AddWithValue("@Location", incidentUpdateRequest.Location);
                    paramCol.AddWithValue("@Upvotes", upvotes);
                    paramCol.AddWithValue("@Downvotes", downvotes);
                    paramCol.AddWithValue("@AdditionalDescription", string.IsNullOrEmpty(incidentUpdateRequest.AdditionalDescription) ? null : incidentUpdateRequest.AdditionalDescription);
                }
            );
        }

        public void Votes(IncidentVotesRequest incidentVotesRequest)
        {
            var upvotes = SqlInt32.Null;
            var downvotes = SqlInt32.Null;
            if (incidentVotesRequest.Upvotes > 0)
            {
                upvotes = incidentVotesRequest.Upvotes;
            }
            if (incidentVotesRequest.Downvotes > 0)
            {
                downvotes = incidentVotesRequest.Downvotes;
            }

            _dataProvider.ExecuteNonQuery(
                "incidents_votes",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", incidentVotesRequest.Id);
                    paramCol.AddWithValue("@Upvotes", upvotes);
                    paramCol.AddWithValue("@Downvotes", downvotes);
                }
            );
        }

        public void Delete(int id)
        {
            _dataProvider.ExecuteNonQuery(
                "incidents_delete",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                }
            );
        }

        public IncidentService(IDataProvider dataProvider, IFileStorageService fileStorageService)
        {
            _dataProvider = dataProvider;
            _fileStorageService = fileStorageService;
        }
    }
}
