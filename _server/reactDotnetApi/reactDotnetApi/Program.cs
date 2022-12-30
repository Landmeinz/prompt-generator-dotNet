using Microsoft.EntityFrameworkCore;
using reactDotnetApi.Context;
using reactDotnetApi.Interfaces;
using reactDotnetApi.Services;

var builder = WebApplication.CreateBuilder(args);
string[] allowedCorsOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>();

// Add DB services to the container //
builder.Services.AddDbContext<ApplicationContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNameCaseInsensitive = true);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(option => option
.AddDefaultPolicy(policy => policy
    .WithOrigins(allowedCorsOrigins)
    .AllowAnyHeader()
    .AllowAnyMethod()));

// Add local services to the container //
//builder.Services.AddSingleton<IDisImageService, DisImageService>();
builder.Services.AddScoped<IGetRandomKeyword, GetRandomKeyword>();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors();
app.Run();
