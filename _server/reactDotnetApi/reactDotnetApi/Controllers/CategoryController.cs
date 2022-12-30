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

    [HttpGet]
    public async Task<IActionResult> ListCategories()
    {
        var categories = await _dbContext.Keywords
            .Select(kw => kw.category)
            .Distinct()
            .ToListAsync();

        return Ok(categories);
    }

    //[HttpGet]
    //public async Task<IActionResult> ListRandomKeywordsFromCategory()
    //{
    //    var categories = await _dbContext.Keywords
    //        .Select(kw => kw.category)
    //        .Distinct()
    //        .ToListAsync();

    //    return Ok(categories);
    //}
}

