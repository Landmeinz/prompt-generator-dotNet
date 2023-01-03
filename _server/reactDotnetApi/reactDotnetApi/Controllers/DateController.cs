using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactDotnetApi.Context;
using reactDotnetApi.Models;
using reactDotnetApi.Interfaces;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace reactDotnetApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DateController : ControllerBase
{
    private readonly ILogger<KeywordController> _logger;
    private readonly ApplicationContext _dbContext;

    public DateController(ILogger<KeywordController> logger, ApplicationContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetDateTime()
    {
        //var currentDateTime = await _dbContext.
        //    .Select("CURRENT_DATE");

        //var dQuery = _dbContext.CreateQuery<DateTime>("CurrentDateTime() ");
        //DateTime dbDate = dQuery.AsEnumerable().First();

        var query = from cd in _dbContext.Keywords
                    select "CURRENT_DATE";

        var currentDateTime = query.First<DateTime>();

        return Ok(currentDateTime);
    }
}

