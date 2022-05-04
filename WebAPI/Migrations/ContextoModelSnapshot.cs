﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Configuration;

namespace WebAPI.Migrations
{
    [DbContext(typeof(Contexto))]
    partial class ContextoModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("WebAPI.Models.Compromisso", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("Data")
                        .HasColumnType("smalldatetime");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<TimeSpan>("Horario")
                        .HasColumnType("time(7)");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.HasKey("Id");

                    b.ToTable("Compromissos");
                });

            modelBuilder.Entity("WebAPI.Models.Contato", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Bairro")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("CEP")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Complemento")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("smalldatetime");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("NomeCompleto")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Numero")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("RuaAvenida")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<decimal>("Telefone1")
                        .HasColumnType("decimal(18,0)");

                    b.Property<decimal?>("Telefone2")
                        .HasColumnType("decimal(18,0)");

                    b.HasKey("Id");

                    b.ToTable("Contatos");
                });
#pragma warning restore 612, 618
        }
    }
}