﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Ovile_DAL_Layer.Entities;


namespace Ovile_DAL_Layer.EF

{
    public class NewsContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<News> News { get; set; }

      

        public NewsContext(DbContextOptions<NewsContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}