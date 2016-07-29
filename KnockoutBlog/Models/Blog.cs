using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using MongoDB.Bson.Serialization.Attributes;

namespace KnockoutBlog.Models
{
    public class Blog
    {
        [BsonId]
        public int _id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public List<BlogPost> content { get; set; }

        public int postCount { get; set; }
        public Blog(int Id, string t, string a, string ct = "", string cb = "")
        {
            _id = Id;
            title = t;
            author = a;
            content = new List<BlogPost>();
            postCount = 0;

            if (ct != "")
            {
                CreatePost(ct, cb);
            }
        }

        public void CreatePost(string t = "New Post", string b = "")
        {
            content.Add(new BlogPost(++postCount, t, b));
        }

    }

    public class BlogPost
    {
        public int pid { get; set; }
        public string contentTitle { get; set; }
        public string contentBody { get; set; }
        public string date { get; set; }

        public BlogPost(int c, string t, string b = "")
        {
            pid = c;
            contentTitle = t;
            contentBody = b;
            date = DateTime.Now.ToShortDateString();
        }
    }

    public class EditBlogModel
    {
        public int bid { get; set; }
        public string newTitle { get; set; }
        public string newAuthor { get; set; }
    }

    public class EditPostModel
    {
        public int bid { get; set; }
        public int pid { get; set; }
        public string newTitle { get; set; }
        public string newBody { get; set; }
    }
}
