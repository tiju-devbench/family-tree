namespace family_tree_API.Models
{
    public class Address
    {
        public int Id { get; set; }

        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string StreetName { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Postcode { get; set; }
    }
}
