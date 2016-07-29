using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using KnockoutBlog.Models;
using MongoDB.Driver;

namespace KnockoutBlog.Controllers
{

public class BlogController : ApiController
    {

        private static readonly IBlogRepository blogs = new BlogRepository();
        
        // GET: api/Blog
        public IEnumerable<Models.Blog> Get()
        {
            return blogs.GetAllBlogs();
        }

        /*
        // GET: api/Blog/id
        [Route("api/Blog/update/{id}")]
        public IHttpActionResult Get(int id)
        {
            var thisBlog = BlogData.Blogs.FirstOrDefault(b => b.id == id);
            if (thisBlog == null) { return NotFound(); }
            return Ok(thisBlog);
        }
        */

        // POST: api/Blog/edit
        [Route("api/Blog/edit")]
        public void Post([FromBody]EditBlogModel model)
        {
            blogs.EditBlog(model.bid, model.newTitle, model.newAuthor);
        }

        // POST: api/Blog/editpost
        [Route("api/Blog/editpost")]
        public void Post([FromBody]EditPostModel model)
        {
            
            if (model.pid == 0)
            {
                blogs.NewPost(model.bid, model.newTitle, model.newBody);
            }
            else
            {
                blogs.EditPost(model.bid, model.pid, model.newTitle, model.newBody);
            }
            
        }

        // DELETE: api/Blog/5/1
        [Route("api/Blog/delete/{bid}/{pid}")]
        public void Delete(int bid, int pid)
        {
            blogs.DeletePost(bid, pid);
        }
        
    }
}
