using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Configuration;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorreiosController : Controller
    {
        private readonly Contexto _context;

        public CorreiosController(Contexto context)
        {
            _context = context;
        }


        // GET: api/correios/cep
        [HttpGet("{cep}")]
        public async Task<ActionResult<EnderecoCorreios>> GetContato(string cep)
        {
            var cepEditado = cep.Replace("-", "");

            if (String.IsNullOrEmpty(cepEditado))
            {

                return NoContent();

            }

            var correios = new CorreiosService.AtendeClienteClient();
            var consulta = await correios.consultaCEPAsync(cepEditado);

            if (consulta.@return == null)
            {
                return NotFound();
            }
            else
            {
                EnderecoCorreios endereco = new EnderecoCorreios();

                endereco.Descricao = consulta.@return.end;
                endereco.Bairro = consulta.@return.bairro;
                endereco.Cidade = consulta.@return.cidade;
                endereco.EstadoUF = consulta.@return.uf;

                return endereco;
            }
        }

    }



    
}
