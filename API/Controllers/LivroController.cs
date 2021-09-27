using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/livro")]
    public class LivroController : ControllerBase
    {
        private readonly DataContext _context;

         public LivroController(DataContext context){
            _context = context;
        }

        // POST: api/livro/criar
        [HttpPost]
        [Route("criar")]
        public Livro create(Livro livro)
        {
            _context.livros.Add(livro);
            _context.SaveChanges();
            return livro;
        }

        // GET: api/livro/listar
        [HttpGet]
        [Route("listar")]
        public async Task<IActionResult> ListAsync() => Ok(await _context.livros.ToListAsync());

       // GET: api/livro/listarId/
        [HttpGet]
        [Route("listarId/{Id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            Livro livro = await _context.livros.FindAsync(id);
            if (livro != null)
            {
                return Ok(livro);
            }
            return NotFound();
        }
    }
}
