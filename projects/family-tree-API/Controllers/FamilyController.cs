using System.Security.Claims;
using System.Threading.Tasks;
using family_tree_API.Data;
using family_tree_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using family_tree_API.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System;

namespace family_tree_API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class FamilyController : ControllerBase
  {

    private readonly IFamilyRepository _familyRepo;
    private readonly IPersonRepository _personRepo;
    private readonly IConfiguration _config;

    private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
    private Cloudinary _cloudinary;

    private readonly IUnitOfWork unitOfWork;

    public FamilyController(IConfiguration config, IFamilyRepository familyRepo, IPersonRepository personRepo,  IUnitOfWork unitOfWork, IOptions<CloudinarySettings> cloudinaryConfig)
    {
      _config = config;
      this.unitOfWork = unitOfWork;
      this._familyRepo = familyRepo;
      this._personRepo = personRepo;
      _cloudinaryConfig = cloudinaryConfig;

      Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );
            _cloudinary = new Cloudinary(acc);
    }



    [HttpPost("addfamily")]
    public async Task<IActionResult> Addfamily([FromBody] Family family)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);
      var familyAdded = _familyRepo.CreateFamily(family);
      await unitOfWork.CompleteAsync();
      return Ok(familyAdded);
    }

    [HttpPost("addperson")]
    public async Task<IActionResult> AddPerson([FromBody] Person person)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);
      var personAdded = _personRepo.CreatePerson(person);
      await unitOfWork.CompleteAsync();
      return Ok(personAdded);
    }

    [HttpDelete("deleteperson/{id}")]
    public async Task<IActionResult> DeletePerson(int id)
    {
      var person = await _personRepo.GetPerson(id);

      if (person == null)
        return NotFound();

      _personRepo.DeletePerson(person);
      await unitOfWork.CompleteAsync();

      return Ok(id);
    }

  }
}
