using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNeighbor.Models.Requests
{
    public class IncidentVotesRequest
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int Id { get; set; }

        public int Upvotes { get; set; }
        public int Downvotes { get; set; }
    }
}
