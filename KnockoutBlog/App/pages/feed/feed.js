define(['knockout', 'App/components/blog/blog', 'text!./feed.html'], function (ko, blogs, feedTemplate) {

    function feedViewModel() {

        var self = blogs;

        self.header = "My Feed";

        function isMatch(blog) {
            var feedIds = [12345, 54321, 90003];
            return feedIds.indexOf(blog._id) in feedIds;
        }

        self.feed = self.blogList.filter(isMatch);

        return self;
    }
    return { viewModel: feedViewModel, template: feedTemplate };

});