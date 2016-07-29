define(["knockout", 'App/components/blog/blog', "text!./featured.html"], function (ko, blogs, featuredTemplate) {
    
    function featuredViewModel() {

        var self = blogs;

        function isMatch(blog) {
            var feedIds = [12345, 54321, 90003, 14563, 55970];
            return feedIds.indexOf(blog._id) in feedIds;
        }

        self.featuredList = self.blogList.filter(isMatch);

        return self;
    }
    return { viewModel: featuredViewModel, template: featuredTemplate };
});