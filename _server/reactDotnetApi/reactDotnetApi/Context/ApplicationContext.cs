using Microsoft.EntityFrameworkCore;
using reactDotnetApi.Models;

namespace reactDotnetApi.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
                : base(options)
        {
        }

        public DbSet<Keyword> keywords { get; set; }
        public DbSet<Test> test { get; set; }
    };
}