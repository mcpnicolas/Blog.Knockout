define(["knockout", "text!./navigation.html"], function (ko, navigationTemplate) {

    function navigationViewModel() {
        var self = this;

        self.menu = ['Feed', 'Edit'];

        return self;
    }
    return { viewModel: navigationViewModel, template: navigationTemplate }
});