using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lab_7_StLab.Controllers
{
    public class DatabaseController : ApiController
    {
        [Route("registrationform")]
        public bool IsUser(Newtonsoft.Json.Linq.JObject obj)
        {
            bool isUser = WorkWithDb.DefineUser(obj["Email"].ToString(), obj["Password"].ToString());
            return isUser;
        }

        [Route("aktiveusersearch")]
        public Users AktiveUser(Newtonsoft.Json.Linq.JObject obj)
        {
            Users user = WorkWithDb.getInformationActiveUser();
            return user;
        }

        [Route("adduser")]
        public void AddUser(Newtonsoft.Json.Linq.JObject obj)
        {
            Users user = new Users { Name = obj["Name"].ToString(), Surname = obj["Surname"].ToString(), Pseudonym = obj["Pseudonym"].ToString(), Email = obj["Email"].ToString(), FieldOfActivity = obj["FieldOfActivity"].ToString(), City = obj["City"].ToString(), Password = obj["Password"].ToString() };
            WorkWithDb.AddNewUser(user);
        }

        [Route("searchphoto")]
        public string[] SearchPhoto(Newtonsoft.Json.Linq.JObject list)
        {
            string[] array = WorkWithDb.PathPhoto().ToArray();
            return array;
        }

        [Route("addPhoto")]
        public void AddPhoto(Newtonsoft.Json.Linq.JObject photo)
        {
            WorkWithDb.AddNewPhoto(photo["Path"].ToString());
        }

        [Route("searchPosts")]
        public string[] searchImagesPosts()
        {
            string[] posts = WorkWithDb.SearchPosts().ToArray();
            return posts;
        }
    }
}
