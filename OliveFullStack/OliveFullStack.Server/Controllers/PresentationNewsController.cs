using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Ovile_BLL_Layer.DTO;
using Ovile_BLL_Layer.Interfaces;
using OliveFullStack.PresentationLayer.Models.Requests;
using OliveFullStack.PresentationLayer.Models.Responses;
using Microsoft.AspNetCore.Authorization;

namespace OliveFullStack.PresentationLayer.Controllers
{
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

        /// <summary>
        /// Get all the news from the database. Is available without authorization.
        /// </summary>
        /// <returns>Returns all news from the database </returns>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var news = await _newsService.GetAllNews();
            var newsResponses = _mapper.Map<List<NewsResponse>>(news);
            return Ok(newsResponses);
        }

        /// <summary>
        /// Get news by id from the database. Is available without authorization.
        /// </summary>
        /// <param name="id">Id of the news you want to receive</param>
        /// <returns>Returns news and status 200 if the news is found, if not found, returns status 404.</returns>
        [HttpGet]
        [Route("{id:Guid}")]
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
        /// <summary>
        /// Adds news to the database. Available for users with the admin role.
        /// </summary>
        /// <param name="request">Accepts the AddNewsRequest object in the request body. It consists of Title, Description, ImgSrc, Source.</param>
        /// <returns>Returns status 200 if the object is added or status 400 if not added.</returns>
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
        /// <summary>
        /// Edits the news in the database. Available for users with the admin role.
        /// </summary>
        /// <param name="id">Id of the news you want to edit.</param>
        /// <param name="request">Accepts the UpdateNewsRequest object in the request body. It consists of Title, Description, ImgSrc, Source.  </param>
        /// <returns>Returns status 200 if the object is added or status 400 if not added.</returns>
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
        /// <summary>
        /// Deletes a news item from the database by ID. Accepts the id in the request header. Available for users with the admin role.
        /// </summary>
        /// <param name="id">ID of the news item you want to delete.</param>
        /// <returns>Returns status 200 if the object is added or status 400 if not added.</returns>
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

        /// <summary>
        /// Accepts a list of news items to be deleted in the body of the request. Available for users with the admin role.
        /// </summary>
        /// <param name="request">accept DeleteNewsRequest object. It consists of a list of items.</param>
        /// <returns>Returns status 200 if the object is added or status 400 if not added.</returns>
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
