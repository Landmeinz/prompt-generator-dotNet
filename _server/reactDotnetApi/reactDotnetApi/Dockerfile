FROM mcr.microsoft.com/dotnet/core/sdk:6.0-bionic AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY reactDotnetApi/*.csproj ./reactDotnetApi/
RUN dotnet restore

# copy everything else and build app
COPY reactDotnetApi/. ./reactDotnetApi/
WORKDIR /app/reactDotnetApi
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:6.0-bionic AS runtime
WORKDIR /app
COPY --from=build /app/reactDotnetApi/out .
EXPOSE 80
CMD ["dotnet", "reactDotnetApi.dll"]