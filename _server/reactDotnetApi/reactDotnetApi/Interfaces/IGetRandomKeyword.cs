using System;
using reactDotnetApi.Models;

namespace reactDotnetApi.Interfaces
{
    public interface IGetRandomKeyword
    {
        Task<Keyword> Get(string category);
    }
}

