using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lab_7_StLab.Controllers
{

    public class ValuesController : ApiController
    {
        //GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/values/5
        public void Get(Newtonsoft.Json.Linq.JObject obj)
        {
        }

        // POST api/values

        public void Post(Newtonsoft.Json.Linq.JObject obj)
        { 
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {}
         
        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
