define(['knockout', 'App/components/blog/blog', 'text!./editPost.html'], function (ko, blogs, editPostTemplate) {

    ko.extenders.required = function (target, overrideMessage) {

        target.hasError = ko.observable(false);
        target.validationMessage = ko.observable();

        function validate(newValue) {
            target.hasError(newValue ? false : true);
            target.validationMessage(newValue ? "" : overrideMessage);
        }

        validate(target());
        target.subscribe(validate);
        return target;
    };

    function editPostViewModel(params) {

        var self = this;
        var blogVM = blogs;

        self.myBlogId = 12345;

        self.thisBlog = blogVM.blogList().find(b => b._id == self.myBlogId);

        if (params.pid == 'new') {
            self.postTitle = ko.observable().extend({ required: "Please enter a post title" });
            self.postBody = ko.observable();
        }
        else {
            self.thisPost = self.thisBlog.content.find(p => p.pid == params.pid);

            self.postTitle = ko.observable(self.thisPost.contentTitle).extend({ required: "Please enter a post title" });
            self.postBody = ko.observable(self.thisPost.contentBody);

        }

        self.saveChanges = function (form) {

            if (params.pid == 'new') {
                blogs.newPost(self.postTitle(), self.postBody(), self.myBlogId);
            }
            else {
                blogs.editPost(self.postTitle(), self.postBody(), self.myBlogId, params.pid);
            }
        }

        self.deletePost = function (form) {
            if (params.pid != 'new') {
                blogs.deletePost(self.myBlogId, params.pid);
            }
        }
        

        return self;
    };

    return { viewModel: editPostViewModel, template: editPostTemplate };

});