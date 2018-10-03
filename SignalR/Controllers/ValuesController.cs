using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR.Dto;
using SignalR.Hub;

namespace SignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : Controller
    {
        public static List<ValueDto> Source { get; set; } = new List<ValueDto>();

        public IHubContext<ValuesHub> Context { get; set; }

        public ValuesController(IHubContext<ValuesHub> hub)
        {
            Context = hub;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(Source);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return Ok(Source[id]);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ValueDto dto)
        {
            if (string.IsNullOrEmpty(dto.Message)) return BadRequest();
            Source.Add(dto);
            await Context.Clients.All.SendAsync("Add", dto);
            return Ok(dto);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] string value)
        {
            Source[id].Message = value;
            return Ok(id);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = Source[id];
            Source.Remove(item);
            await Context.Clients.All.SendAsync("Delete", item);
            return NoContent();
        }
    }
}
