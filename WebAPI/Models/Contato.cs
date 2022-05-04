using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Contato
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id                       {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string NomeCompleto          {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Email                 {get;set;}
        [Required]
        [Column(TypeName = "decimal(18, 0)")]
        public decimal Telefone1                {get;set;}
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? Telefone2                {get;set;}
        [Required]
        [Column(TypeName = "smalldatetime")]
        public DateTime DataNascimento      {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string CEP                   {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string RuaAvenida            {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public int Numero                   {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Complemento           {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Bairro                {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Cidade                {get;set;}
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Estado { get; set; }
    }
}
