using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace API.Models
{
  public class Invoice{
      [Key]
      public int Id {get;set;}
      [Column(TypeName="nvarchar(50)")]
      public string Nombre {get;set;}
     [Column(TypeName="nvarchar(50)")]
      public string Producto {get;set;}
      
      public float Precio {get;set;}
      public float Cantidad {get;set;}

      public float Total {get;set;}
  }
}