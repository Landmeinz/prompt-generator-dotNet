﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using reactDotnetApi.Context;

#nullable disable

namespace reactDotnetApi.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("reactDotnetApi.Models.Keyword", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("category")
                        .HasColumnType("text");

                    b.Property<int>("genPromptCount")
                        .HasColumnType("integer");

                    b.Property<string>("keyword")
                        .HasColumnType("text");

                    b.Property<DateTime>("lastPing")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("subCategory")
                        .HasColumnType("text");

                    b.Property<string>("subCategoryType")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("keywords");
                });

            modelBuilder.Entity("reactDotnetApi.Models.Test", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("details")
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("test");
                });
#pragma warning restore 612, 618
        }
    }
}
