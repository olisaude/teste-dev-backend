using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OliSaude.Infra.Migrations
{
    /// <inheritdoc />
    public partial class v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome_Cliente = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Sexo = table.Column<int>(type: "INTEGER", nullable: false),
                    Problema = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Grau = table.Column<int>(type: "INTEGER", nullable: false),
                    DataActualizacao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataCriacao = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cliente");
        }
    }
}
