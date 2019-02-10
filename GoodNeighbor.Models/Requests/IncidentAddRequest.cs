using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.Requests
{
    public class IncidentAddRequest
    {
        [Required]
        [MaxLength(200)]
        [Display(Name = "Offense Type")]
        public string OffenseType { get; set; }

        [Required]
        [StringLength(int.MaxValue)]
        public string Incident { get; set; }

        [Required]
        public DateTime IncidentDate { get; set; }

        [Required]
        [MaxLength(200)]
        public string IncidentTime { get; set; }

        [Required]
        [MaxLength(200)]
        public string Location { get; set; }

        public int Upvotes { get; set; }
        public int Downvotes { get; set; }

        [StringLength(int.MaxValue)]
        public string AdditionalDescription { get; set; }
    }
}
