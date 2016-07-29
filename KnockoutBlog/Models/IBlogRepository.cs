using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KnockoutBlog.Models
{
    public interface IBlogRepository
    {
        IEnumerable<Models.Blog> GetAllBlogs();

        void EditBlog(int bid, string newTitle, string newAuthor);

        void EditPost(int bid, int pid, string newTitle, string newBody);

        void NewPost(int bid, string newTitle, string newBody);

        void DeletePost(int bid, int pid);

    }
}
