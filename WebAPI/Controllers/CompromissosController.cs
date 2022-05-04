using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public class CompromissosController : Controller
    {
        private readonly Contexto _context;

        public CompromissosController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Compromisso
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Compromisso>>> GetCompromisso()
        {
            return await _context.Compromissos.ToListAsync();
        }

        // GET: api/Compromisso/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Compromisso>> GetCompromisso(int id)
        {
            var Compromisso = await _context.Compromissos.FindAsync(id);

            if (Compromisso == null)
            {
                return NotFound();
            }

            return Compromisso;
        }

        // PUT: api/Compromisso/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompromisso(int id, Compromisso Compromisso)
        {
            Compromisso.Id = id;
            _context.Entry(Compromisso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompromissoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Compromisso
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Compromisso>> PostCompromisso([FromBody] Compromisso Compromisso)
        {

            _context.Compromissos.Add(Compromisso);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompromisso", new { id = Compromisso.Id }, Compromisso);
        }

        // DELETE: api/Compromisso/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompromisso(int id)
        {
            var Compromisso = await _context.Compromissos.FindAsync(id);
            if (Compromisso == null)
            {
                return NotFound();
            }

            _context.Compromissos.Remove(Compromisso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompromissoExists(int id)
        {
            return _context.Compromissos.Any(e => e.Id == id);
        }
    }
}
