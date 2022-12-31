using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactDotnetApi.Context;
using reactDotnetApi.Models;
using Newtonsoft.Json;
using System.Linq.Expressions;
using System.Text.Json.Nodes;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;
using System.Linq;
using reactDotnetApi.Interfaces;

namespace reactDotnetApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class KeywordController : ControllerBase
{
    private readonly ILogger<KeywordController> _logger;
    private readonly ApplicationContext _dbContext;
    private readonly IGetRandomKeyword _getRandomKeyword;

    public KeywordController(ILogger<KeywordController> logger, ApplicationContext dbContext, IGetRandomKeyword getRandomKeyword)
    {
        _logger = logger;
        _dbContext = dbContext;
        _getRandomKeyword = getRandomKeyword;
    }


    [HttpGet("categories")]
    public async Task<IActionResult> ListKeywords(string? category = null)
    {
        List<string> categoryList = category.Split(',').ToList();
        List<Keyword> keywords = new();
        List<Keyword> responseList = new();

        //var random = new Random();
        if (category != null && categoryList.Count > 0)
        {
            foreach (var cat in categoryList)
            {
                Console.WriteLine($"--- GET RANDOM KEYWORD ---");
                var randomKeyword = await _getRandomKeyword.Get(cat.Trim());
                responseList.Add(randomKeyword);
            }
            return Ok(responseList);
        }
        else
        {
            return Ok(await _dbContext.Keywords.ToListAsync());
        }
        //return Ok(responseList.Count == 0 ? keywords : responseList);
    }

    [HttpGet]
    public async Task<IActionResult> ListAllKeywords()
    {
        var keywords = await _dbContext.Keywords.ToListAsync();
        return Ok(keywords);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetKeyword(int id)
    {
        var keyword = await _dbContext.Keywords
            .Where(kw => kw.id
            .Equals(id))
            .FirstOrDefaultAsync();
        return Ok(keyword);
    }

    //[HttpGet("{random}")]
    //public async Task<IActionResult> GetRandomKeyword([Required] List<string> categories)
    //{
    //    List<Keyword> response = new();
    //    var random = new Random();
    //    foreach (var category in categories)
    //    {
    //        var keyword = await _dbContext.Keywords
    //       .Where(kw => kw.category
    //       .Contains(category))
    //       .OrderBy(kw => random.Next())
    //       .Take(1)
    //       .FirstOrDefaultAsync();
    //        response.Add(keyword);
    //    }
    //    return Ok(response);
    //}


    [HttpPost]
    public async Task<IActionResult> Create([FromBody] KeywordBody keywordBody)
    {
        var lastKeyword = await _dbContext.Keywords
            .OrderBy(x => x.id)
            .LastOrDefaultAsync();
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
        await _dbContext.SaveChangesAsync();
        return Ok(newKeyword);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Keyword keyword)
    {
        var existingKeyword = await _dbContext.Keywords
            .Where(kw => kw.id
            .Equals(id))
            .FirstOrDefaultAsync();

        if (existingKeyword is null)
            return NotFound();

        existingKeyword.category = keyword.category;

        _dbContext.Keywords.Update(existingKeyword);
        await _dbContext.SaveChangesAsync();
        return Ok(existingKeyword);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var existingKeyword = await _dbContext.Keywords
            .Where(kw => kw.id
            .Equals(id))
            .FirstOrDefaultAsync();

        if (existingKeyword is not null)
        {
            _dbContext.Keywords.Remove(existingKeyword);
            await _dbContext.SaveChangesAsync();
        }
        return NoContent();
    }

    //[HttpPost(Name = "PostKeywordList")]
    //public int CreateFromList([FromBody] List<Keyword> keywordList)
    //{
    //    //var lastKeyword = _dbContext.Keywords.OrderBy(x => x.id).LastOrDefault();
    //    //Random rnd = new Random();
    //    foreach (var item in keywordList)
    //    {
    //        int start = 0;
    //        Keyword newKeyword = new()
    //        {
    //            id = start++,
    //            //id = rnd.Next(10000000, 99999999),
    //            keyword = item.keyword,
    //            category = item.category,
    //            subCategory = item.subCategory,
    //            subCategoryType = item.subCategoryType,
    //            lastPing = DateTime.UtcNow,
    //            genPromptCount = 0

    //        };
    //        _dbContext.Keywords.AddRangeAsync(newKeyword);
    //    }
    //    return _dbContext.SaveChanges();
    //}
}

