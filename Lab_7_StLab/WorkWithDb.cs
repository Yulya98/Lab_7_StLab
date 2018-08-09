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
            Lab_7Entities9 context = new Lab_7Entities9();
            context.Users.Add(user);
            context.SaveChanges();
            Users.ActiveUser = (from u in context.Users
                                select u.Id).ToList().Last();
        }

        public static bool DefineUser(string email, string password)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
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
            Lab_7Entities9 context = new Lab_7Entities9();
            Users aktiveUser = (from u in context.Users
                               where u.Id == Users.ActiveUser
                               select u).FirstOrDefault();
            return aktiveUser;
        }

        public static List<string> PathPhoto(int id)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
            string[] photoPath = (from page in context.Images
                                 join user in context.UsersImages on page.Id equals user.IdImage
                                 where user.IdUser == id
                                 select page.Path).ToArray();
            string[] namePhoto = (from page in context.UsersImages
                                 join user in context.Images on page.IdImage equals user.Id
                                 where page.IdUser == id
                                 select page.Name).ToArray();
            int i = 0;
            List<string> resultList = new List<string>();
            foreach(string str in photoPath)
            {
                resultList.Add(str);
                resultList.Add(namePhoto[i]);
                i++;
            }
            return resultList;
        }

        public static void AddNewPhoto(string path,string nameImg)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
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
            users.Name = nameImg;
            context.UsersImages.Add(users);
            context.SaveChanges();
        }

        public static List<string> SearchPosts()
        {
            Lab_7Entities9 context = new Lab_7Entities9();
            string[] authors = (from user in context.Users
                                join userPage in context.UsersImages on user.Id equals userPage.IdUser
                                select user.Name).ToArray();
            authors.Reverse();
            string[] paths = (from imageImg in context.Images
                              join imageUsImg in context.UsersImages on imageImg.Id equals imageUsImg.IdImage
                              select imageImg.Path).ToArray();
            int[] idPosts = (from podtsId in context.UsersImages
                             select podtsId.Id).ToArray();
            int[] idUser = (from podtsId in context.UsersImages
                             select podtsId.IdUser).ToArray();
            idUser.Reverse();
            idPosts.Reverse();
            paths.Reverse();
            int index = 0;
            List<string> posts = new List<string>();
            foreach (string author in authors)
            {
                posts.Add(idPosts[index].ToString());
                posts.Add(author);
                posts.Add(paths[index]);
                posts.Add(idUser[index].ToString());
                index++;
            }
            return posts;
        }

        public static List<string> SearchComments(int idPost)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
            string[] listUsers = (from userName in context.Users
                                  join postId in context.UsersImagesComments on userName.Id equals postId.IdUser
                                  where idPost == postId.IdPost
                                  select userName.Name).ToArray();
            string[] listComments = (from comment in context.UsersImagesComments
                                     where idPost == comment.IdPost
                                     select comment.Comment).ToArray();
            List<string> listCommentsUsers = new List<string>();
            int i = 0;
            foreach(string str in listUsers)
            {
                listCommentsUsers.Add(str);
                listCommentsUsers.Add(listComments[i]);
                i++;
            }
            return listCommentsUsers;
         }


        public static List<string> AuthorNameAndImagePath(int idPost)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
            string autorPost = (from author in context.Users
                                join post in context.UsersImages on author.Id equals post.IdUser
                                where post.Id == idPost
                                select author.Name).FirstOrDefault();
            int authorId = (from author in context.Users
                                join post in context.UsersImages on author.Id equals post.IdUser
                                where post.Id == idPost
                                select author.Id).FirstOrDefault();
            string imagePath = (from path in context.Images
                                join post in context.UsersImages on path.Id equals post.IdImage
                                where post.Id == idPost
                                select path.Path).FirstOrDefault();
            List<string> list = new List<string>();
            list.Add(autorPost);
            list.Add(imagePath);
            list.Add(authorId.ToString());
            return list;
        }

        public static void DeletePhoto(string nameOfPhoto)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
            int idUser = WorkWithDb.getInformationActiveUser().Id;
            UsersImages user = (from image in context.UsersImages
                                where image.Name == nameOfPhoto && image.IdUser == Users.ActiveUser
                                select image).FirstOrDefault();
            context.UsersImages.Attach(user);
            context.UsersImages.Remove(user);
            context.SaveChanges();
        }

        public static void AddComment(int idPost, string text)
        {
            Lab_7Entities9 context = new Lab_7Entities9();
            int activeUserId = WorkWithDb.getInformationActiveUser().Id;
            UsersImagesComments comment = new UsersImagesComments();
            comment.IdPost = idPost;
            comment.IdUser = activeUserId;
            comment.Comment = text;
            context.UsersImagesComments.Add(comment);
            context.SaveChanges();
        }
    }
}