using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.Requests
{
    public class FileStorageAddRequest
    {
        [Required]
        [MaxLength(255)]
        public string UserFileName { get; set; }

        [Required]
        [MaxLength(255)]
        public string BasePath { get; set; }

        [Required]
        [MaxLength(255)]
        public string SystemFileName { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int IncidentId { get; set; }

        [Required]
        [MaxLength(128)]
        public string ModifiedBy { get; set; }
    }
}
