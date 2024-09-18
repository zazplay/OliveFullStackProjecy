using Microsoft.EntityFrameworkCore;
using Ovile_DAL_Layer.EF;
using Ovile_DAL_Layer.Entities;
using Ovile_DAL_Layer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ovile_DAL_Layer.Repositories
{
    public class NewsModelRepository : IRepository<News>
    {
        private readonly NewsContext _context;

        public NewsModelRepository(NewsContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<News>> GetAll()
        {
            return await _context.News.ToListAsync();
        }

        public async Task<News?> Get(Guid id)
        {
            return await _context.News.FindAsync(id);
        }

        public async Task<IEnumerable<News>> Find(Func<News, bool> predicate)
        {
            return await _context.News.Where(n => predicate(n)).ToListAsync();
        }

        public async Task Create(News item)
        {
            await _context.News.AddAsync(item);
        }

        public async Task Update(News item)
        {
            _context.Entry(item).State = EntityState.Modified;
        }

        public async Task Delete(Guid id)
        {
            var news = await _context.News.FindAsync(id);
            if (news != null)
            {
                _context.News.Remove(news);
            }
        }
    }
}