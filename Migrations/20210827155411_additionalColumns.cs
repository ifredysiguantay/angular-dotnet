using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_dotnet.Migrations
{
    public partial class additionalColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Producto",
                table: "Invoice",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Correlativo",
                table: "Invoice",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Fecha",
                table: "Invoice",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Correlativo",
                table: "Invoice");

            migrationBuilder.DropColumn(
                name: "Fecha",
                table: "Invoice");

            migrationBuilder.AlterColumn<string>(
                name: "Producto",
                table: "Invoice",
                type: "nvarchar(50)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
