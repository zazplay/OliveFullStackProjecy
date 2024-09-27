using Xunit;
using Moq;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using OliveFullStack.PresentationLayer.Controllers;
using OliveFullStack.PresentationLayer.Models.AuthorizationModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Routing;
namespace AuthController_Test
{
    public class AuthenticateControllerTests
    {
        private Mock<UserManager<IdentityUser>> _mockUserManager;
        private Mock<RoleManager<IdentityRole>> _mockRoleManager;
        private Mock<IConfiguration> _mockConfiguration;
        private AuthenticateController _controller;

        public AuthenticateControllerTests()
        {
            // Mocking UserManager<IdentityUser>
            _mockUserManager = new Mock<UserManager<IdentityUser>>(
                Mock.Of<IUserStore<IdentityUser>>(), null, null, null, null, null, null, null, null);

            // Mocking RoleManager<IdentityRole> by passing proper mocks for dependencies
            var roleStoreMock = new Mock<IRoleStore<IdentityRole>>();
            _mockRoleManager = new Mock<RoleManager<IdentityRole>>(
                roleStoreMock.Object, null, null, null, null);

            // Mocking IConfiguration
            _mockConfiguration = new Mock<IConfiguration>();

            // Injecting dependencies into the controller
            _controller = new AuthenticateController(_mockUserManager.Object, _mockRoleManager.Object, _mockConfiguration.Object);
        }

        //[Fact]

        //public void Result_Register_Test()
        //{
        //    IdentityUser user = new()
        //    {
        //        Email = "test@gmail.com",
        //        SecurityStamp = Guid.NewGuid().ToString(),
        //        UserName = "Valera"
        //    };

        //    _mockUserManager.


        //    _controller.Register<IdentityUser>();
        // }
        [Fact]
        public async Task Register_UserAlreadyExists_ReturnsStatusCode500()
        {
            // Arrange
            var registerModel = new RegisterModel { Username = "testuser", Email = "testuser@example.com", Password = "Test@123" };
            _mockUserManager.Setup(x => x.FindByNameAsync(registerModel.Username)).ReturnsAsync(new IdentityUser());

            // Act
            var result = await _controller.Register(registerModel);

            // Assert
            var statusCodeResult = Assert.IsType<ObjectResult>(result);
            Assert.Equal(500, statusCodeResult.StatusCode);
        }

        [Fact]
        public async Task Login_WithValidCredentials_ReturnsOkResult()
        {
            // Arrange
            var user = new IdentityUser { UserName = "testuser" };
            _mockUserManager.Setup(x => x.FindByNameAsync("testuser")).ReturnsAsync(user);
            _mockUserManager.Setup(x => x.CheckPasswordAsync(user, "password")).ReturnsAsync(true);
            _mockUserManager.Setup(x => x.GetRolesAsync(user)).ReturnsAsync(new List<string> { "User" });

            // Act
            var result = await _controller.Login(new LoginModel { Username = "testuser", Password = "password" });

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result);
        }

    }
}