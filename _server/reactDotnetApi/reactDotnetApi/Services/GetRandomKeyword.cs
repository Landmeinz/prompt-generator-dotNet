using System;
using reactDotnetApi.Context;
using reactDotnetApi.Interfaces;
using reactDotnetApi.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Linq.Expressions;
using System.Text.Json.Nodes;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;
using System.Linq;
using reactDotnetApi.Interfaces;

namespace reactDotnetApi.Services
{
    public class GetRandomKeyword : IGetRandomKeyword
    {
        private readonly ApplicationContext _dbContext;

        public GetRandomKeyword(ApplicationContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Keyword> Get(string category)
        {
            Console.WriteLine($"--- category: {category}");
            Console.WriteLine("--- hello we sent some categories to choose from");
            List<Keyword> keywords = new();
            keywords = await _dbContext.Keywords
                .Where(kw => kw.category
                .Equals(category))
                .ToListAsync();
            //Console.WriteLine($"--- keywords: {keywords}");
            Console.WriteLine($"--- keywords count: {keywords.Count}");


            var random = new Random();
            Console.WriteLine($"--- random: {random}");

            int index = random.Next(keywords.Count);
            Console.WriteLine($"--- index: {index}");

            var randomKeyword = keywords[index];
            Console.WriteLine($"--- randomKeyword: {randomKeyword}");
            

            //Keyword randomKeyword = keywords.OrderBy(x => Guid.NewGuid()).First();
            //responseList.Add(randomKeyword);
            return randomKeyword;
        }

    }
}

