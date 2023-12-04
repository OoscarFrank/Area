using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Text;



namespace demoApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class authController : ControllerBase
    {
        private static List<List<string>> Users = new List<List<string>>();

        public class LoginModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class RegisterModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
        }

        [HttpPost("Login")]
        public ActionResult login(LoginModel model)
        {
            for (int i = 0; i < Users.Count; i++)
            {
                if (Users[i][0] == model.Email && Users[i][1] == model.Password)
                {
                    string userString = Users[i][0] + Users[i][1] + Users[i][2] + Users[i][3];
                    byte[] byteArray = Encoding.UTF8.GetBytes(userString);
                    string base64String = Convert.ToBase64String(byteArray);
                    return Ok(new { msg = "ok", token = base64String });
                }
            }
            return BadRequest(new { msg = "Invalid Credentials" });
        }

        [HttpPost("Register")]
        public ActionResult register(RegisterModel model)
        {
            for (int i = 0; i < Users.Count; i++)
            {
                if (Users[i][0] == model.Email)
                {
                    return BadRequest(new { msg = "User already exists" });
                }
            }
            Users.Add(new List<string> { model.Email, model.Password, model.FirstName, model.LastName });
            string userString = model.Email + model.Password + model.FirstName + model.LastName;
            byte[] byteArray = Encoding.UTF8.GetBytes(userString);
            string base64String = Convert.ToBase64String(byteArray);
            return Ok(new { msg = "ok", token = base64String });
        }

    }
}
