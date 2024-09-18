using Ovile_BLL_Layer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ovile_BLL_Layer.Interfaces
{
    public interface INewsService
    {
        Task<IEnumerable<NewsDTO>> GetAllNews();
        Task<NewsDTO> GetNewsById(Guid id);
        Task<NewsDTO> CreateNews(NewsDTO newHashtag);
        Task<NewsDTO> UpdateNews(NewsDTO updatedHashtag);
        Task DeleteNews(Guid id);
        void Dispose();
    }
}
