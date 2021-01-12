using MiAngular.Models;
using MiAngular.Models.Response;
using MiAngular.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MiAngular.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly MyDBContext dBContext;

        public UserController(MyDBContext dBContext)
        {
            this.dBContext = dBContext;
        }

        [HttpPost("[action]")]
        public MyResponse Login([FromBody]UserVM model)
        {
            MyResponse myResponse = new MyResponse();
            try
            {
                User us = new User { Id = model.Id };

                User usLog = dBContext.Find<User>(us);
                if (usLog != null)
                {
                  //  Session["USER_ID"] = usLog.Id;
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
            User user = new User() {Id = 1, Name = "Mario" };
            return user;
        }

    }
}
