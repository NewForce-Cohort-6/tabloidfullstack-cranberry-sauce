using System;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;
using Tabloid.Models;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var tag = _tagRepository.GetTagById(id);
            if (tag== null)
            {
                return NotFound();
            }
            return Ok(tag);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Tag tag)
        {
            
            if (id != tag.Id)
            {
                return BadRequest();
            }
            _tagRepository.EditTag(tag);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post(Tag tag)
        {
            _tagRepository.AddTag(tag);
            return CreatedAtAction("Get", new { id = tag.Id }, tag);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tagRepository.DeleteTag(id);
            return NoContent() ;
        }



    }
}