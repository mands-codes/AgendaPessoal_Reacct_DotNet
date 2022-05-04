using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Compromisso
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id               {get;set;}
        [Required]
        [Column(TypeName = "smalldatetime")]
        public DateTime Data        {get;set;}
        [Required]
        [Column(TypeName = "time(7)")]
        public TimeSpan Horario     {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Titulo        {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Descricao { get; set; }
        
    }
}
