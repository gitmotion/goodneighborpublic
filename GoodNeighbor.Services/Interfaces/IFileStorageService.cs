using System.Collections.Generic;
using GoodNeighbor.Models.Domain;
using GoodNeighbor.Models.Requests;
using GoodNeighbor.Models.ViewModels;

namespace GoodNeighbor.Services.Interfaces
{
    public interface IFileStorageService
    {
        int Create(FileStorageAddRequest fileStorageAddRequest);
        void Delete(int Id);
        FileStorageDomain SelectByIdDelete(int Id);
        List<FileStorageViewModel> SelectAll();
        List<FileStorageViewModel> SelectByIncidentId(int incidentId);
        FileStorageViewModel SelectById(int Id);
        void Update(FileStorageUpdateRequest model);
    }
}