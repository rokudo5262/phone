using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using phoneserver.Models;

namespace phoneserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoresController : ControllerBase
    {
        private readonly phoneContext _context;

        public StoresController(phoneContext context)
        {
            _context = context;
        }

        // GET: api/Stores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stores>>> GetStores()
        {
            return await _context.Stores.Where(x => x.Deleted == false).ToListAsync();
        }

        // GET: api/Stores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Stores>> GetStores(int id)
        {
            var stores = await _context.Stores.FindAsync(id);

            if (stores == null)
            {
                return NotFound();
            }

            return stores;
        }

        // PUT: api/Stores/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStores(int id, Stores stores)
        {
            if (id != stores.StoreId)
            {
                return BadRequest();
            }
            stores.LastUpdatedDateTime = DateTime.Now;
            _context.Entry(stores).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoresExists(id))
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

        // POST: api/Stores
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Stores>> PostStores(Stores stores)
        {
            stores.LastUpdatedDateTime = DateTime.Now;
            stores.CreatedDateTime = DateTime.Now;
            _context.Stores.Add(stores);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetStores", new { id = stores.StoreId }, stores);
        }

        // DELETE: api/Stores/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Stores>> DeleteStores(int id)
        {
            var stores = await _context.Stores.FindAsync(id);
            if (stores == null)
            {
                return NotFound();
            }
            stores.LastUpdatedDateTime = DateTime.Now;
            stores.Deleted = true;
            await _context.SaveChangesAsync();

            return stores;
        }

        private bool StoresExists(int id)
        {
            return _context.Stores.Any(e => e.StoreId == id);
        }
    }
}
