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
        public string[] PostAktiveUser()
        {
            Users user = WorkWithDb.getInformationActiveUser();
            return new string[]{ user.Name, user.Surname, user.Email, user.FieldOfActivity,user.City};
        }


        [Route("searchActiveUserId")]
        public string serchActiveUserId()
        {
            int id = WorkWithDb.getInformationActiveUser().Id;
            return id.ToString();
        }

        [Route("adduser")]
        public void AddUser(Newtonsoft.Json.Linq.JObject obj)
        {
            Users user = new Users { Name = obj["Name"].ToString(), Surname = obj["Surname"].ToString(), Pseudonym = obj["Pseudonym"].ToString(), Email = obj["Email"].ToString(), FieldOfActivity = obj["FieldOfActivity"].ToString(), City = obj["City"].ToString(), Password = obj["Password"].ToString() };
            WorkWithDb.AddNewUser(user);
        }

        [Route("searchphoto")]
        public string[] SearchPhoto(Newtonsoft.Json.Linq.JObject idUser)
        {
            string[] array = WorkWithDb.PathPhoto(Convert.ToInt32(idUser["idActiveUers"])).ToArray();
            return array;
        }

        [Route("addPhoto")]
        public void AddPhoto(Newtonsoft.Json.Linq.JObject photo)
        {
            WorkWithDb.AddNewPhoto(photo["NameImg"].ToString(), photo["Path"].ToString());
        }

        [Route("searchPosts")]
        public string[] searchImagesPosts()
        {
            string[] posts = WorkWithDb.SearchPosts().ToArray();
            return posts; 
        }

        [Route("searchComments")]
        public string[] SearchCommentsToPosts(Newtonsoft.Json.Linq.JObject idPost)
        {
            string[] comments = WorkWithDb.SearchComments(Convert.ToInt32(idPost["idPost"])).ToArray();
            return comments;
        }

        [Route("searchAuthor")]
        public string[] AuthorNameAndImagePath(Newtonsoft.Json.Linq.JObject idPost)
        {
            string[] authorsPaths = WorkWithDb.AuthorNameAndImagePath(Convert.ToInt32(idPost["idPost"])).ToArray();
            return authorsPaths;
        }

        [Route("deletePhoto")]
        public void DeletePhoto(Newtonsoft.Json.Linq.JObject photo)
        {
            WorkWithDb.DeletePhoto(photo["nameImg"].ToString());
        }

        [Route("addComment")]
        public void AddComment(Newtonsoft.Json.Linq.JObject photo)
        {
            WorkWithDb.AddComment(Convert.ToInt32(photo["idPost"]), photo["text"].ToString());
        }

    }
}
                                                            