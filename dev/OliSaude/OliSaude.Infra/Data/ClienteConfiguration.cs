﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OliSaude.Domain.Entities;

namespace OliSaude.Infra.Data
{
    public class ClienteConfiguration : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.ToTable(nameof(Cliente));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .IsRequired()
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Nome)
                .IsRequired()
                .HasColumnName("Nome_Cliente")
                .HasMaxLength(500);

            builder.Property(x => x.DataNascimento)
                .IsRequired()
                .HasColumnName("DataNascimento");

            builder.Property(x => x.Sexo)
                .IsRequired();

            builder.OwnsOne(x => x.ProblemaDeSaude)
                .Property(p => p.Nome)
                .IsRequired()
                .HasColumnName("Problema")
                .HasMaxLength(200);

            builder.OwnsOne(x => x.ProblemaDeSaude)
                .Property(p => p.Grau)
                .IsRequired()
                .HasColumnName("Grau");

            builder.Property(x => x.DataCriacao)
                .IsRequired();

            builder.Property(x => x.DataActualizacao)
                .IsRequired();
        }
    }
}
