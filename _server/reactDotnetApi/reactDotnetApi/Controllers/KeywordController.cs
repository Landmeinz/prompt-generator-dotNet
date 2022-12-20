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
    public IEnumerable<Keyword> List()
    {
        return _dbContext.Keywords.ToList();
    }
}

