﻿using AutoMapper;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Moq;
using OliveFullStack.PresentationLayer.Controllers;
using OliveFullStack.PresentationLayer.Models.Requests;
using OliveFullStack.PresentationLayer.Models.Responses;
using Ovile_BLL_Layer.DTO;
using Ovile_BLL_Layer.Interfaces;
using Ovile_DAL_Layer.Entities;

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

        //GetAll
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

        //GetSingle - ok
        [Fact]
        public async Task GetSingle_WhenCalled_ReturnsOkWithMappedNewsResponse()
        {
            NewsDTO news = new NewsDTO()
            {
                Id = Guid.NewGuid(),
                Title = "Title",
                Description = "Description",
                CreatedAt = DateTime.UtcNow,
            };
            NewsResponse newsResponse = new NewsResponse()
            {
                Id = Guid.NewGuid(),
                Title = "Title",
                Description = "Description",
                CreatedAt = DateTime.UtcNow,
            };
            //Arrange
            _mockNewsService.Setup(service => service.GetNewsById(news.Id)).ReturnsAsync(news);
            //.ReturnsAsync(addNewsRequest);

            _mockMapper.Setup(service => service.Map<NewsResponse>(news))
                .Returns(newsResponse);

            //Act
            var result = await _controller.GetSingle(news.Id);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<NewsResponse>(okResult.Value);
            Assert.Equal(newsResponse, returnValue);
            _mockNewsService.Verify(service => service.GetNewsById(news.Id), Times.Once);
            _mockMapper.Verify(service => service.Map<NewsResponse>(news), Times.Once);
        }

        //GetSingle - not found
        [Fact]
        public async Task GetSingle_WhenCalled_ReturnsNotFound()
        {
            Guid id = Guid.NewGuid();

            //Arrange
            _mockNewsService.Setup(service => service.GetNewsById(id)).ReturnsAsync((NewsDTO)null);

            var result = await _controller.GetSingle(id);

            var notFoundResult = Assert.IsType<NotFoundResult>(result);

        }

        //AddNews- return ok
        [Fact]
        public async Task AddNews_WhenCalled_ReturnsOkWithMappedNewsResponse()
        {
            AddNewsRequest addNewsRequest = new()
            {
                Title = "Title",
                Description = "Description",
                ImgSrc = "img",
                Source = "Source"
            };
            NewsDTO newsDTO = new NewsDTO()
            {
                Id = Guid.NewGuid(),
                Title = "Title",
                Description = "Description",
                CreatedAt = DateTime.UtcNow,
            };

            _mockMapper.Setup(service => service.Map<NewsDTO>(addNewsRequest)).Returns(newsDTO);
            _mockNewsService.Setup(service => service.CreateNews(newsDTO)).ReturnsAsync(newsDTO);

            var result = await _controller.AddNews(addNewsRequest);

            var okResult= Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<NewsDTO?>(okResult.Value);
            _mockMapper.Verify(service => service.Map<NewsDTO>(addNewsRequest), Times.Once);
            _mockNewsService.Verify(service => service.CreateNews(newsDTO), Times.Once);
        }

        //AddNews- return badrequest
        [Fact]
        public async Task AddNews_ReturnsBadRequest_WhenExceptionThrown()
        {
            // Arrange
            var request = new AddNewsRequest
            {
                Title = "AddNewsRequest Title",
                Description = "AddNewsRequest Description",
                ImgSrc = "AddNewsRequest img",
                Source = "Internet"
            };
            var newsDto = new NewsDTO
            {
                Title = "NewsDTO Title",
                Description = "NewsDTO Description",
                ImgSrc = "NewsDTO img",
                Source = "Internet"
            };

            _mockMapper.Setup(m => m.Map<NewsDTO>(request)).Returns(newsDto);
            _mockNewsService.Setup(s => s.CreateNews(newsDto)).ThrowsAsync(new Exception("Test exception"));

            // Act
            var result = await _controller.AddNews(request);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("Test exception", badRequestResult.Value);
        }
    }
}





