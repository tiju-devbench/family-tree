using System.ComponentModel.DataAnnotations;
using family_tree_API.Data;

namespace family_tree_API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8,MinimumLength= 4,ErrorMessage=ErrorMessages.PasswordLength)]
        public string Password { get; set; }
    }
}
