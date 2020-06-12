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
    public class StocksController : ControllerBase
    {
        private readonly phoneContext _context;

        public StocksController(phoneContext context)
        {
            _context = context;
        }

        // GET: api/Stocks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stocks>>> GetStocks()
        {
            return await _context.Stocks.Where(x => x.Deleted == false).ToListAsync();
        }

        // GET: api/Stocks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Stocks>> GetStocks(int id)
        {
            var stocks = await _context.Stocks.FindAsync(id);

            if (stocks == null)
            {
                return NotFound();
            }

            return stocks;
        }

        // PUT: api/Stocks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStocks(int id, Stocks stocks)
        {
            if (id != stocks.StockId)
            {
                return BadRequest();
            }

            _context.Entry(stocks).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StocksExists(id))
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

        // POST: api/Stocks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Stocks>> PostStocks(Stocks stocks)
        {
        stocks.LastUpdatedDateTime = DateTime.Now;
        stocks.CreatedDateTime = DateTime.Now;
      _context.Stocks.Add(stocks);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStocks", new { id = stocks.StockId }, stocks);
        }

        // DELETE: api/Stocks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Stocks>> DeleteStocks(int id)
        {
            var stocks = await _context.Stocks.FindAsync(id);
            if (stocks == null)
            {
                return NotFound();
            }
            stocks.LastUpdatedDateTime = DateTime.Now;
            stocks.Deleted = true;
            await _context.SaveChangesAsync();

            return stocks;
        }

        private bool StocksExists(int id)
        {
            return _context.Stocks.Any(e => e.StockId == id);
        }
    }
}
