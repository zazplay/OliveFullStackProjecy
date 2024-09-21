using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Ovile_BLL_Layer.DTO;
using Ovile_BLL_Layer.Interfaces;
using OliveFullStack.PresentationLayer.Models.Requests;
using OliveFullStack.PresentationLayer.Models.Responses;
using Microsoft.AspNetCore.Authorization;

namespace OliveFullStack.PresentationLayer.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PresentationNewsController : Controller
    {
        private readonly INewsService _newsService;
        private readonly IMapper _mapper;

        public PresentationNewsController(INewsService newsService, IMapper mapper)
        {
            _newsService = newsService;
            _mapper = mapper;
        }

        // Доступ для ролей "user" и "admin"
        [HttpGet]
        //[Authorize(Roles = "User,Admin")]
        public async Task<IActionResult> GetAll()
        {
            var news = await _newsService.GetAllNews();
            var newsResponses = _mapper.Map<List<NewsResponse>>(news);
            return Ok(newsResponses);
        }

        // Доступ только для администраторов
        [HttpGet]
        [Route("{id:Guid}")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetSingle([FromRoute] Guid id)
        {
            var news = await _newsService.GetNewsById(id);
            if (news == null)
            {
                return NotFound();
            }
            var newsResponse = _mapper.Map<NewsResponse>(news);
            return Ok(newsResponse);
        }

        // Доступ только для администраторов
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddNews([FromBody] AddNewsRequest request)
        {
            var newsDto = _mapper.Map<NewsDTO>(request);
            try
            {
                var createdNews = await _newsService.CreateNews(newsDto);
                return Ok(createdNews);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Доступ только для администраторов
        [HttpPut]
        [Route("{id:Guid}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateNews([FromRoute] Guid id, [FromBody] UpdateNewsRequest request)
        {
            var newsDto = _mapper.Map<NewsDTO>(request);
            newsDto.Id = id;
            try
            {
                var updatedNews = await _newsService.UpdateNews(newsDto);
                return Ok(updatedNews);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Доступ только для администраторов
        [HttpDelete]
        [Route("{id:Guid}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteNews([FromRoute] Guid id)
        {
            try
            {
                await _newsService.DeleteNews(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete]
        [Route("deleteByIds")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteNews([FromBody] DeleteNewsRequest request)
        {
            if (request?.ids == null || !request.ids.Any())
            {
                return BadRequest("The ids field is required and must not be empty.");
            }

            try
            {
                foreach (var item in request.ids)
                {
                    await _newsService.DeleteNews(item);
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
