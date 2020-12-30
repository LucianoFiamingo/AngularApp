using MiAngular.Models;
using MiAngular.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
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
                                        select new MessageVM
                                        {
                                            Id = msg.Id,
                                            Name = msg.Name,
                                            Text = msg.Text
                                        }).ToList();

            return listMsgs;
        }
    }
}
