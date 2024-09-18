using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Notes.BusinessLogicLayer.Services;
using Ovile_BLL_Layer.Interfaces;
using Ovile_DAL_Layer.EF;
using Ovile_DAL_Layer.Interfaces;
using Ovile_DAL_Layer.Repositories;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager configuration = builder.Configuration;

builder.Services.AddControllers();

builder.Logging.ClearProviders();
builder.Logging.AddConsole();

builder.Services.AddDbContext<NewsContext>((serviceProvider, options) =>
{
    var loggerFactory = serviceProvider.GetRequiredService<ILoggerFactory>();
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
           sqlOptions => sqlOptions.MigrationsAssembly("OliveFullStack.PresentationLayer"))
           .UseLoggerFactory(loggerFactory)
           .EnableSensitiveDataLogging(); 
});


builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<NewsContext>()
    .AddDefaultTokenProviders();

// Adding Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})

// Adding Jwt Bearer
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = configuration["JWT:ValidAudience"],
        ValidIssuer = configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
    };
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyCors",
        policy =>
        {
            policy.AllowAnyOrigin();
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
        });
});



builder.Services.AddAutoMapper(typeof(AutoMaperProfiles));
builder.Services.AddScoped<IUnitOfWork, UnitOfWorkEF>();
builder.Services.AddScoped<INewsService, NewsService>();
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("MyCors");

app.MapControllers();

app.Run();