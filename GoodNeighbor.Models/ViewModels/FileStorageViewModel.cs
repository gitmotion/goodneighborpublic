using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.ViewModels
{
    public class FileStorageViewModel
    {
        public int Id { get; set; }
        public string UserFileName { get; set; }
        public string Url { get; set; }
        public int IncidentId { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
