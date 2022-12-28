using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactDotnetApi.Context;
using reactDotnetApi.Models;

namespace reactDotnetApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class KeywordController : ControllerBase
{
    private readonly ILogger<KeywordController> _logger;
    private readonly ApplicationContext _dbContext;

    public KeywordController(ILogger<KeywordController> logger, ApplicationContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet(Name = "ListKeywords")]
    public IEnumerable<Keyword> ListKeywords()
    {
        return _dbContext.Keywords.ToList();
    }

    //[HttpGet(Name = "ListCategories")]
    //public List<string> ListCategories()
    //{
    //    return _dbContext.Keywords.Select(kw => kw.category).ToList();
    //}


    [HttpPost(Name = "PostKeyword")]
    public Keyword Create([FromBody] KeywordBody keywordBody)
    {
        var lastKeyword = _dbContext.Keywords.OrderBy(x => x.id).LastOrDefault();
        Keyword newKeyword = new()
        {
            id = lastKeyword.id + 1,
            keyword = keywordBody.keyword,
            category = keywordBody.category,
            subCategory = keywordBody.subCategory,
            subCategoryType = keywordBody.subCategoryType,
            lastPing = DateTime.UtcNow,
            genPromptCount = 0

        };
        _dbContext.Keywords.Add(newKeyword);
        _dbContext.SaveChanges();
        return newKeyword;
    }
}

