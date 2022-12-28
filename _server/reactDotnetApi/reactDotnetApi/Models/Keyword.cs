namespace reactDotnetApi.Models;

public class Keyword
{
    public int id { get; set; }
    public string category { get; set; }
    public string? subCategory { get; set; }
    public string? subCategoryType { get; set; }
    public string? keyword { get; set; }
    public DateTime lastPing { get; set; }
    public int genPromptCount { get; set; }
}
