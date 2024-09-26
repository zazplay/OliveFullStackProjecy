using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Moq;
using OliveFullStack.PresentationLayer.Controllers;
using OliveFullStack.PresentationLayer.Models.Responses;
using Ovile_BLL_Layer.DTO;
using Ovile_BLL_Layer.Interfaces;
using Ovile_DAL_Layer.Entities;
using System.Collections;
using static Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary;

namespace PresentationNewsController_Testing
{
    public class PresentationNewsControllerTests
    {
        private readonly Mock<INewsService> _mockNewsService; // Мок для INewsService
        private readonly Mock<IMapper> _mockMapper;           // Мок для IMapper
        private readonly PresentationNewsController _controller; // Экземпляр контроллера

        public PresentationNewsControllerTests()
        {
            // Создаем поддельные (mock) реализации INewsService и IMapper
            _mockNewsService = new Mock<INewsService>();
            _mockMapper = new Mock<IMapper>();

            // Создаем контроллер, передавая в него поддельные сервисы
            _controller = new PresentationNewsController(_mockNewsService.Object, _mockMapper.Object);
        }

        // Этот метод предоставляет данные для теста
        public static IEnumerable<object[]> GetTestNewsData()
        {
            // Первый набор данных: пустой список новостей
            yield return new object[]
            {
                new List<NewsDTO>(),                   // Входные данные (пустой список новостей)
                new List<NewsResponse>()            // Ожидаемые выходные данные (пустой список NewsResponse)
            };

            // Второй набор данных: один объект новости
            yield return new object[]
            {
                new List<NewsDTO>                     // Входные данные (одна новость)
                {
                    new NewsDTO { Id=Guid.NewGuid(), Title="News 1", Description="Description News 1", ImgSrc="src",Source="Internet",CreatedAt=DateTime.Now}
                },
                new List<NewsResponse>             // Ожидаемые выходные данные (один NewsResponse)
                {
                    new NewsResponse { Id=Guid.NewGuid(), Title="News 1", Description="Description News 1", ImgSrc="src",Source="Internet",CreatedAt=DateTime.Now}
                }
            };

            // Третий набор данных: несколько новостей
            yield return new object[]
            {
                new List<NewsDTO>                     // Входные данные (несколько новостей)
                {
                     new NewsDTO{ Id=Guid.NewGuid(), Title="News 1", Description="Description News 1", ImgSrc="src",Source="Internet",CreatedAt=DateTime.Now},
                     new NewsDTO{ Id=Guid.NewGuid(), Title="News 2", Description="Description News 2", ImgSrc="src",Source="Internet",CreatedAt=DateTime.Now}
                },
                new List<NewsResponse>             // Ожидаемые выходные данные (несколько NewsResponse)
                {
                   new NewsResponse{ Id=Guid.NewGuid(), Title="News 1", Description="Description News 1", ImgSrc="src",Source="Internet",CreatedAt=DateTime.Now},
                   new NewsResponse{ Id=Guid.NewGuid(), Title="News 2", Description="Description News 2", ImgSrc="src",Source="Internet",CreatedAt=DateTime.Now}
                }
            };
        }


        // Theory — для выполнения теста с разными данными, InlineData — для передачи данных
        [Theory]
        [MemberData(nameof(GetTestNewsData))]
        public async Task GetAll_WhenCalled_ReturnsOkWithMappedNewsResponses(IEnumerable<NewsDTO> newsList, List<NewsResponse> mappedNewsResponses)
        {
            // Arrange: подготавливаем поддельные данные
            _mockNewsService.Setup(service => service.GetAllNews())
                .ReturnsAsync(newsList); // Важно: возвращаем Task<IEnumerable<NewsDTO>>

            _mockMapper.Setup(mapper => mapper.Map<List<NewsResponse>>(newsList))
                .Returns(mappedNewsResponses);

            // Act: вызываем метод контроллера
            var result = await _controller.GetAll();

            // Assert: проверяем, что результат - OkObjectResult (200 OK) с ожидаемыми данными
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedNewsResponses = Assert.IsType<List<NewsResponse>>(okResult.Value);
            Assert.Equal(mappedNewsResponses.Count, returnedNewsResponses.Count);

            _mockNewsService.Verify(service => service.GetAllNews(), Times.Once);
            _mockMapper.Verify(mapper => mapper.Map<List<NewsResponse>>(newsList), Times.Once);
        }

       
    }
}





