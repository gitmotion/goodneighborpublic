using GoodNeighbor.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.Domain
{
    public class FileStorageDomain
    {
        public int Id { get; set; }
        public string UserFileName { get; set; }
        public string BasePath { get; set; }
        public string SystemFileName { get; set; }
        public int IncidentId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
