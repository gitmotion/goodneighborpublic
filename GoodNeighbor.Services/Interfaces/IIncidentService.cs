using System.Collections.Generic;
using GoodNeighbor.Models.Domain;
using GoodNeighbor.Models.Requests;

namespace GoodNeighbor.Services.Interfaces
{
    public interface IIncidentService
    {
        int Create(IncidentAddRequest incidentAddRequest);
        void Delete(int id);
        List<IncidentDomain> SelectAll();
        IncidentDomain SelectById(int id);
        void Update(IncidentUpdateRequest incidentUpdateRequest);
        void Votes(IncidentVotesRequest incidentVotesRequest);
    }
}