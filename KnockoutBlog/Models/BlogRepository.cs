using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using MongoDB.Bson;

namespace KnockoutBlog.Models
{
    public class BlogRepository : IBlogRepository
    {
        MongoClient _client;
        IMongoDatabase _database;
        IMongoCollection<Models.Blog> blogs;

        public BlogRepository(string connection = "")
        {
            if (string.IsNullOrWhiteSpace(connection))
            {
                connection = "mongodb://localhost:27017";
            }

            _client = new MongoClient(connection);
            _database = _client.GetDatabase("local");
            blogs = _database.GetCollection<Models.Blog>("blog_data");
        }

        public IEnumerable<Models.Blog> GetAllBlogs()
        {
            var docs = blogs.Find(new BsonDocument()).ToEnumerable();

            return docs;
        }

        public void EditBlog(int bid, string newTitle, string newAuthor)
        {
            var builder = Builders<Models.Blog>.Filter;

            var filter = builder.Eq("_id", bid);
            var update = Builders<Models.Blog>.Update.Set("title", newTitle).Set("author", newAuthor);

            blogs.UpdateOneAsync(filter, update);
        }

        public void EditPost(int bid, int pid, string newTitle, string newBody)
        {
            var builder = Builders<Models.Blog>.Filter;

            var filter = builder.Eq("_id", bid) & builder.Eq("content.pid", pid);
            var update = Builders<Models.Blog>.Update.Set("content.$.contentTitle", newTitle).Set("content.$.contentBody", newBody);

            blogs.UpdateOneAsync(filter, update);
        }

        public void NewPost(int bid, string newTitle, string newBody)
        {
            var filter = Builders<Models.Blog>.Filter.Eq("_id", bid);

            int last_pid = 0;

            if (blogs.Find(filter).FirstOrDefault().content.ToList().Count() != 0)
            {
                last_pid = blogs.Find(filter).FirstOrDefault().content.OrderByDescending(post => post.pid).First().pid;
            }

            var update = Builders<Models.Blog>.Update.Push("content", new BlogPost(last_pid + 1, newTitle, newBody));

            blogs.UpdateOneAsync(filter, update);
        }

        public void DeletePost(int bid, int pid)
        {
            var filter = Builders<Models.Blog>.Filter.Eq("_id", bid);
            var update = Builders<Models.Blog>.Update.PullFilter(b => b.content, p => p.pid == pid);

            blogs.FindOneAndUpdateAsync(filter, update);


        }
    }
}