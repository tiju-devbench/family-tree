using Microsoft.EntityFrameworkCore.Migrations;

namespace family_tree_API.Migrations
{
    public partial class AddFamilyOwner : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OwnerId",
                table: "Persons",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Persons_OwnerId",
                table: "Persons",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Users_OwnerId",
                table: "Persons",
                column: "OwnerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Users_OwnerId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_OwnerId",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Persons");
        }
    }
}
