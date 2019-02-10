using GoodNeighbor.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.Domain
{
    public class IncidentDomain
    {
        public int Id { get; set; }
        public string OffenseType { get; set; }
        public string Incident { get; set; }
        public DateTime IncidentDate { get; set; }
        public string IncidentTime { get; set; }
        public string Location { get; set; }
        public int Upvotes { get; set; }
        public int Downvotes { get; set; }
        public string AdditionalDescription { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public List<FileStorageViewModel> Images { get; set; }
    }
}
