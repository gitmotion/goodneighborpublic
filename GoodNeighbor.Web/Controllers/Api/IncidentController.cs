using GoodNeighbor.Models.Domain;
using GoodNeighbor.Models.Requests;
using GoodNeighbor.Models.Responses;
using GoodNeighbor.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GoodNeighbor.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/incidents")]
    public class IncidentController : ApiController
    {
        private IIncidentService _incidentService;

        [HttpPost]
        [Route]
        public HttpResponseMessage Create(IncidentAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resp = new ItemResponse<int>
                    {
                        Item = _incidentService.Create(model)
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                var resp = new ItemsResponse<IncidentDomain>
                {
                    Items = _incidentService.SelectAll()
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                var resp = new ItemResponse<IncidentDomain>
                {
                    Item = _incidentService.SelectById(id)
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPut]
        [Route("{id:int}")]
        public HttpResponseMessage Update(IncidentUpdateRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resp = new SuccessResponse();
                    _incidentService.Update(model);
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPut]
        [Route("votes/{id:int}")]
        public HttpResponseMessage UpdateVotes(IncidentVotesRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resp = new SuccessResponse();
                    _incidentService.Votes(model);
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                var resp = new SuccessResponse();
                _incidentService.Delete(id);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public IncidentController(IIncidentService incidentService)
        {
            _incidentService = incidentService;
        }
    }
}
