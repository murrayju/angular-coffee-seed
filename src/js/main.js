/*jslint browser:true */
/*global requirejs */

// define the dependencies with requirejs
requirejs({
    // baseUrl is implicitly relative to this file
    waitSeconds: 0,

    paths: {
        jquery: "../lib/jquery/jquery",
        angular: "../lib/angular/angular",
        'angular-animate': "../lib/angular-animate/angular-animate",
        'angular-sanitize': "../lib/angular-sanitize/angular-sanitize",
        'angular-resource': "../lib/angular-resource/angular-resource",
        'angular-ui-router': "../lib/angular-ui-router/angular-ui-router",
        'angular-strap': "../lib/angular-strap/angular-strap",
        'angular-strap-tpl': "../lib/angular-strap/angular-strap.tpl",
        fastclick: "../lib/fastclick/fastclick",
        moment: "../lib/moment/moment",
        underscore: "../lib/underscore/underscore",
        less: "../lib/require-less/less",
        lessc: "../lib/require-less/lessc",
        normalize: "../lib/require-less/normalize",
        cs: '../lib/require-cs/cs',
        'coffee-script': '../lib/coffeescript/extras/coffee-script'
    },

    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-animate': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-strap': ['angular', 'angular-animate'],
        'angular-strap-tpl': ['angular', 'angular-animate', 'angular-strap'],
        'angular-ui-router': ['angular']
    },

    less: {
        relativeUrls: true
    }
}, ['cs!bootstrap', 'less!../less/main']);
