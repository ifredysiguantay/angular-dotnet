using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_dotnet.Migrations
{
    public partial class Nitcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Fecha",
                table: "Invoice",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)");

            migrationBuilder.AddColumn<string>(
                name: "Nit",
                table: "Invoice",
                type: "nvarchar(50)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nit",
                table: "Invoice");

            migrationBuilder.AlterColumn<string>(
                name: "Fecha",
                table: "Invoice",
                type: "nvarchar(50)",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }
    }
}
