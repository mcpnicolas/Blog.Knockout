define(['jquery', 'knockout', 'knockout-mapping'], function ($, ko, komapping) {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function blogViewModel() {
        var self = this;

        var uri = 'api/Blog';

        self.blogList = ko.observableArray();
        
        self.updateBlogs = function () {
            $.getJSON(uri, function (allBlogs) {               

                self.blogList($.makeArray(allBlogs));

            });
        }

        updateBlogs();

        /* not used
        self.updateBlog = function (bid) {
            $.getJSON(uri + "/update/" + bid, function (thisBlog) {
                self.blogList().find(b => b.id == bid).content;
            });
        };
        */

        self.editBlog = function (title, author, id) {

            $.ajax(uri + "/edit", {
                data: JSON.stringify({ newTitle: title, newAuthor: author, bid: id }),
                type: "POST", contentType: "application/json",
                success: function () { updateBlogs() }
            });
        }

        self.editPost = function (title, body, bid, pid) {

            $.ajax(uri + "/editpost", {
                data: JSON.stringify({ newTitle: title, newBody: body, bid: bid, pid: pid }),
                type: "POST", contentType: "application/json",
                success: function () { updateBlogs() }
            });
        }

        self.newPost = function (title, body, bid) {

            $.ajax(uri + "/editpost", {
                data: JSON.stringify({ newTitle: title, newBody: body, bid: bid }),
                type: "POST", contentType: "application/json",
                success: function () { updateBlogs() }
            });
        }

        self.deletePost = function (bid, pid) {

            $.ajax(uri + "/delete/" + bid + "/" + pid, {
                type: "DELETE", success: function () { updateBlogs() }
            });
        }

        return self;
    }

    return blogViewModel();
});

