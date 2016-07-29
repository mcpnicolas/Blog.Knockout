define(["knockout", 'App/components/blog/blog', "text!./read.html"], function (ko, blogs, readTemplate) {

    function readViewModel(params) { 
        var self = blogs;

        // function isMatch(blog) { return blog.id == params.id }

        self.thisBlog = self.blogList().find(b => b._id == params.id);

        self.title = self.thisBlog.title;
        self.author = self.thisBlog.author;
        self.id = self.thisBlog.id;
        self.content = self.thisBlog.content.slice(0);

        self.contentRead = self.content.reverse();

        return self;
    }
    return { viewModel: readViewModel, template: readTemplate };

});