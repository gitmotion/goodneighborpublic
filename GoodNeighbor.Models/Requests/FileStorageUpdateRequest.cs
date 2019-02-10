using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.Requests
{
    public class FileStorageUpdateRequest : FileStorageAddRequest
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int Id { get; set; }
    }
}
