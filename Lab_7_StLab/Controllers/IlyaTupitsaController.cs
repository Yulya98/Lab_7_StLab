using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;

namespace Lab_7_StLab.Controllers
{
    public class IlyaTupitsaController : ApiController
    {
        [Route("hz")]
        public string PostAktiveUser()
        {
            Users user = WorkWithDb.getInformationActiveUser();
            return JsonConvert.SerializeObject(user);
        }
    }
}
