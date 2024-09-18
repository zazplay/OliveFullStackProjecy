using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ovile_BLL_Layer.DTO
{
    public class AuthResponseDTO
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
