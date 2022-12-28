using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactDotnetApi.Context;
using reactDotnetApi.Models;

namespace reactDotnetApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ILogger<KeywordController> _logger;
    private readonly ApplicationContext _dbContext;

    public CategoryController(ILogger<KeywordController> logger, ApplicationContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet(Name = "ListCategories")]
    public List<string> ListCategories()
    {
        return _dbContext.Keywords.Select(kw => kw.category).ToList();
    }
}

