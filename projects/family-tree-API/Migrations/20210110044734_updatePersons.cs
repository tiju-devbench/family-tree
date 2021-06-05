using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace family_tree_API.Migrations
{
    public partial class updatePersons : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Contacts_ContactId",
                table: "Persons");

            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Families_FamilyId",
                table: "Persons");

            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Users_OwnerId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_ContactId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_OwnerId",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "ContactId",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Persons");

            migrationBuilder.RenameColumn(
                name: "FamilyId",
                table: "Persons",
                newName: "Familyid");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Persons",
                newName: "id");

            migrationBuilder.RenameIndex(
                name: "IX_Persons_FamilyId",
                table: "Persons",
                newName: "IX_Persons_Familyid");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Families",
                newName: "id");

            migrationBuilder.AlterColumn<int>(
                name: "Familyid",
                table: "Persons",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Bio",
                table: "Persons",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "Persons",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Death",
                table: "Persons",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DisplayImage",
                table: "Persons",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Familyid1",
                table: "Persons",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "WeddingAnniversary",
                table: "Persons",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Families",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DisplayImage",
                table: "Families",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Families_Familyid",
                table: "Persons");

            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Families_Familyid1",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_Familyid1",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Bio",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Death",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "DisplayImage",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Familyid1",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "WeddingAnniversary",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Families");

            migrationBuilder.DropColumn(
                name: "DisplayImage",
                table: "Families");

            migrationBuilder.RenameColumn(
                name: "Familyid",
                table: "Persons",
                newName: "FamilyId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Persons",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_Persons_Familyid",
                table: "Persons",
                newName: "IX_Persons_FamilyId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Families",
                newName: "Id");

            migrationBuilder.AlterColumn<int>(
                name: "FamilyId",
                table: "Persons",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ContactId",
                table: "Persons",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OwnerId",
                table: "Persons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "Persons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Persons_ContactId",
                table: "Persons",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_OwnerId",
                table: "Persons",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Contacts_ContactId",
                table: "Persons",
                column: "ContactId",
                principalTable: "Contacts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Families_FamilyId",
                table: "Persons",
                column: "FamilyId",
                principalTable: "Families",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Users_OwnerId",
                table: "Persons",
                column: "OwnerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
