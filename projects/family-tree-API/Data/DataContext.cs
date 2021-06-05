using System;
using System.Configuration;
using family_tree_API.Models;
using Microsoft.EntityFrameworkCore;

namespace family_tree_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        //public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Family> Families { get; set; }
        public DbSet<Person> Persons { get; set; }

        public DbSet<Relationships> Relationships { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        modelBuilder.Entity<Person>()
            .Property(c => c.Gender)
            .HasConversion<int>();

        modelBuilder.Entity<Relationships>()
        .Property(e => e.RelationshipType)
        .HasConversion(
            v => v.ToString(),
            v => (RelationshipType)Enum.Parse(typeof(RelationshipType), v));

        modelBuilder.Entity<Relationships>()
        .Property(e => e.SourceRole)
        .HasConversion(
            v => v.ToString(),
            v => (RelationshipRole)Enum.Parse(typeof(RelationshipRole), v));

        modelBuilder.Entity<Relationships>()
        .Property(e => e.TargetRole)
        .HasConversion(
            v => v.ToString(),
            v => (RelationshipRole)Enum.Parse(typeof(RelationshipRole), v));



                    }

    }
}
