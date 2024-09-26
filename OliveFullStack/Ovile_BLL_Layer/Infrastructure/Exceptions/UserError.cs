using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ovile_BLL_Layer.Infrastructure.Exceptions
{
    /// <summary>
    /// Пользователь не существет
    /// </summary>
    public class UserError : Exception
    {
        public UserError()
        : base($"Uncorrect login or password")
        { }
    }
}
