using MiAngular.Models;
using MiAngular.Models.Response;
using MiAngular.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MiAngular.Controllers
{
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        private readonly MyDBContext dBContext;

        public ChatController(MyDBContext dBContext)
        {
            this.dBContext = dBContext;
        }

        [HttpGet("[action]")]
        public IEnumerable<MessageVM> Message()
        {
            List<MessageVM> listMsgs = (from msg in dBContext.Message
                                        orderby msg.Id descending
                                        select new MessageVM
                                        {
                                            Id = msg.Id,
                                            Name = msg.Name,
                                            Text = msg.Text
                                        }).ToList();

            return listMsgs;
        }

        [HttpPost("[action]")]
        public MyResponse Add([FromBody]MessageVM model)
        {
            MyResponse myResponse = new MyResponse();
            try
            {
                Message msg = new Message();
                msg.Name = model.Name;
                msg.Text = model.Text;
                dBContext.Message.Add(msg);
                dBContext.SaveChanges();
                myResponse.Success = 1;
            }
            catch (Exception ex)
            {
                myResponse.Success = 0;
                myResponse.Message = ex.Message;
            }
            return myResponse;
        }
    }
}
