using Microsoft.EntityFrameworkCore.Migrations;

namespace family_tree_API.Migrations
{
    public partial class AddRelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Families_Familyid",
                table: "Persons");

            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Families_Familyid1",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_Familyid",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_Familyid1",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Familyid",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Familyid1",
                table: "Persons");

            migrationBuilder.CreateTable(
                name: "Relationships",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Familyid = table.Column<int>(nullable: true),
                    SourcePersonid = table.Column<int>(nullable: true),
                    TargetPersonBid = table.Column<int>(nullable: true),
                    RelationshipType = table.Column<string>(nullable: false),
                    SourceRole = table.Column<string>(nullable: false),
                    TargetRole = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relationships", x => x.id);
                    table.ForeignKey(
                        name: "FK_Relationships_Families_Familyid",
                        column: x => x.Familyid,
                        principalTable: "Families",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Relationships_Persons_SourcePersonid",
                        column: x => x.SourcePersonid,
                        principalTable: "Persons",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Relationships_Persons_TargetPersonBid",
                        column: x => x.TargetPersonBid,
                        principalTable: "Persons",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Relationships_Familyid",
                table: "Relationships",
                column: "Familyid");

            migrationBuilder.CreateIndex(
                name: "IX_Relationships_SourcePersonid",
                table: "Relationships",
                column: "SourcePersonid");

            migrationBuilder.CreateIndex(
                name: "IX_Relationships_TargetPersonBid",
                table: "Relationships",
                column: "TargetPersonBid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Relationships");

            migrationBuilder.AddColumn<int>(
                name: "Familyid",
                table: "Persons",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Familyid1",
                table: "Persons",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Persons_Familyid",
                table: "Persons",
                column: "Familyid");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_Familyid1",
                table: "Persons",
                column: "Familyid1");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Families_Familyid",
                table: "Persons",
                column: "Familyid",
                principalTable: "Families",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Families_Familyid1",
                table: "Persons",
                column: "Familyid1",
                principalTable: "Families",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
