define(['knockout', 'App/components/blog/blog', 'text!./edit.html'], function (ko, blogs, editTemplate) {

    ko.extenders.required = function (target, overrideMessage) {

        target.hasError = ko.observable(false);
        target.validationMessage = ko.observable();

        function validate(newValue) {
            target.hasError(newValue? false : true);
            target.validationMessage(newValue ? "" : overrideMessage);       
        }

        validate(target());
        target.subscribe(validate);
        return target;
    };

    function editViewModel() {

        var self = blogs;

        self.myBlogId = 12345;
        
        self.thisBlog = self.blogList().find(b => b._id == self.myBlogId);

        self.title = ko.observable(self.thisBlog.title).extend({ required: "Please enter a blog title" });
        self.author = ko.observable(self.thisBlog.author).extend({ required: "Please enter an author" });
        self.id = self.thisBlog._id;
        self.content = ko.observable(self.thisBlog.content);

        self.saveChanges = function (form) {
            blogs.editBlog(self.title(), self.author(), self.id);
        }

        return self;
    }
    return { viewModel: editViewModel, template: editTemplate };

});
