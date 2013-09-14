require.config({
    paths: {
        jquery      : 'vendor/jquery',
        underscore  : 'vendor/underscore',
        backbone    : 'vendor/backbone',
        marionette  : 'vendor/backbone.marionette',
        todos       : 'apps/todos'
        //templates
    },
    shim: {
        underscore  : {
            exports : '_'
        },
        backbone    : {
            exports : 'Backbone',
            deps    : ['jquery','underscore']
        },
        marionette  : {
            exports : 'Backbone.Marionette',
            deps    : ['backbone']
        }
    },
    deps : ['jquery','underscore']
});

require([
    'todos',
    'jquery'

], function (
    app,
    $
) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
