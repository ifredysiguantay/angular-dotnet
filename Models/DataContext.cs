using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class APIContext:DbContext
    {
        public APIContext(DbContextOptions<APIContext> options):base (options){

        }

        public DbSet<Invoice> Invoice {get;set;}
        
    }
}