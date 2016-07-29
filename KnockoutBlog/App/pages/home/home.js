define(['knockout', 'text!./home.html'], function (ko, homeTemplate) {

    function homeViewModel() {

        var self = this;

        self.title = "Welcome to eMarketer Blogs!";
        self.description = "Here, as an eMarketer employee, you can read coworkers' blogs and write your own posts.";

        return self;
    }
    return { viewModel: homeViewModel, template: homeTemplate };

});