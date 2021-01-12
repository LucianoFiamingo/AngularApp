using API_Chat.Models;
using API_Chat.Models.Response;
using API_Chat.Models.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MiAngular.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly MyDBContext dBContext;
        public string USER_ID;

        public UserController(MyDBContext dBContext)
        {
            this.dBContext = dBContext;
        }

        [HttpPost("[action]")]
        public MyResponse Login([FromBody] UserVM model)
        {
            MyResponse myResponse = new MyResponse();
            try
            {
                User us = new User { Id = model.Id };

                User usLog = dBContext.Find<User>(us);
                if (usLog != null)
                {
                    HttpContext.Session.SetString(USER_ID, model.Id.ToString());
                    myResponse.Success = 1;
                }
                myResponse.Success = 0;
            }
            catch (Exception ex)
            {
                myResponse.Success = 0;
                myResponse.Message = ex.Message;
            }
            return myResponse;
        }

        [HttpGet("[action]")]
        public MyResponse Logout()
        {
            MyResponse myResponse = new MyResponse();
            try
            {
                HttpContext.Session.Clear();
                myResponse.Success = 1;
            }
            catch (Exception ex)
            {
                myResponse.Success = 0;
                myResponse.Message = ex.Message;
            }
            return myResponse;
        }

        [HttpGet("[action]")]
        public User Logged()
        {
            User user = new User() { Id = 1, Name = "Mario" };
            return user;
        }

    }
}
