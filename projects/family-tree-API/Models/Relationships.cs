namespace family_tree_API.Models
{
    public class Relationships
    {

      public int id { get; set; }
        public Family Family { get; set; }

        public Person SourcePerson { get; set; }
        public Person TargetPersonB { get; set; }

        public RelationshipType RelationshipType { get; set; }

        public RelationshipRole SourceRole { get; set; }

        public RelationshipRole TargetRole { get; set; }

    }

    public enum RelationshipType {

        Father,
        Mother,
        Husband,
        Wife,
        Son,
        Daughter
    }

    public enum RelationshipRole {
        Spouse,
        Parent,

        Child,

        Siblings
    }


}
