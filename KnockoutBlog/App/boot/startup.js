define(['jquery', 'knockout', './router', 'knockout-projections'], function ($, ko, router) {

    ko.components.register('navigation', {
        require: 'App/components/navigation/navigation'
    });

    ko.components.register('featured', {
        require: 'App/components/featured/featured'
    });

    ko.components.register('home', {
        require: 'App/pages/home/home'
    });

    ko.components.register('feed', {
        require: 'App/pages/feed/feed'
    });

    ko.components.register('edit', {
        require: 'App/pages/edit/edit'
    });

    ko.components.register('editPost', {
        require: 'App/pages/editPost/editPost'
    });

    ko.components.register('read', {
        require: 'App/pages/read/read'
    });


    ko.applyBindings({ route: router.currentRoute });

});