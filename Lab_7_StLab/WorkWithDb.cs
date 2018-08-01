using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lab_7_StLab
{
    public class WorkWithDb
    {
        public static void AddNewUser(Users user)
        {
            Lab_7Entities7 context = new Lab_7Entities7();
            context.Users.Add(user);
            context.SaveChanges();
            Users.ActiveUser = (from u in context.Users
                                select u.Id).ToList().Last();
        }

        public static bool DefineUser(string email, string password)
        {
            Lab_7Entities7 context = new Lab_7Entities7();
            IEnumerable<Users> listUsers = from u in context.Users
                                           select u;
            foreach (Users us in listUsers)
            {
                if (us.Email == email)
                {
                    if (us.Password == password)
                    {
                        Users.ActiveUser = us.Id;
                        return true;
                    }
                }
            }
            return false;
        }

        public static Users getInformationActiveUser()
        {
            Lab_7Entities7 context = new Lab_7Entities7();
            Users aktiveUser = (from u in context.Users
                               where u.Id == Users.ActiveUser
                               select u).FirstOrDefault();
            return aktiveUser;
        }

        public static IEnumerable<string> PathPhoto()
        {
            Lab_7Entities7 context = new Lab_7Entities7();
            int id = WorkWithDb.getInformationActiveUser().Id;
            IEnumerable<string> photoPath = from page in context.Images
                                            join user in context.UsersImages on page.Id equals user.IdImage
                                            where user.IdUser == id
                                            select page.Path;
            return photoPath;
        }

        public static void AddNewPhoto(string path)
        {
            Lab_7Entities7 context = new Lab_7Entities7();
            Images image = new Images();
            image.Path = path;
            context.Images.Add(image);
            context.SaveChanges();
            int idPage = (from u in context.Images
                     where u.Path == path
                     select u.Id).FirstOrDefault();
            int idUser = WorkWithDb.getInformationActiveUser().Id;
            UsersImages users = new UsersImages();
            users.IdUser = idUser;
            users.IdImage = idPage;
            context.UsersImages.Add(users);
            context.SaveChanges();
        }

        public static List<string> SearchPosts()
        {
            Lab_7Entities7 context = new Lab_7Entities7();
            string[] authors = (from user in context.Users
                                   join userPage in context.UsersImages on user.Id equals userPage.IdUser
                                   select user.Name).ToArray();
            authors.Reverse();
            string[] paths = (from imageImg in context.Images
                             join imageUsImg in context.UsersImages on imageImg.Id equals imageUsImg.IdImage
                             select imageImg.Path).ToArray();
            paths.Reverse();
            int index = 0;
            List<string> posts = new List<string>();
            foreach(string author in authors)
            {
                posts.Add(author);
                posts.Add(paths[index]);
                index++;
            }
            return posts;
        }
    }
}