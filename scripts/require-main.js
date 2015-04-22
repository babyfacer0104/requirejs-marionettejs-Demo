requirejs.config({
    baseUrl: 'scripts',

    paths: {
        'jquery': 'vendor/jquery-1.10.2',
        'backbone': 'vendor/backbone',
        'marionette': 'vendor/backbone.marionette',
        'tpl': 'vendor/tpl',
        'underscore': 'vendor/underscore',
        'app': 'app'
    },

    shim: {
        'backbone': {
            deps: ['jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'marionette': {
            deps: ['backbone','underscore'],
            exports: 'Marionette'
        }
    }
});

require(['app'], function (App) {
    App.start();

    $('.showMainPage').on('click', function () {
        App.trigger('show:main');
    });

    $('.showMyPage').on('click', function () {
        App.trigger('show:myPage');
    });
});