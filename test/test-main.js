/*jslint browser: true, nomen: true */
(function (requirejs) {
    'use strict';

    var allTestFiles = [],
        pathToModule = function (path) {
            return path.replace(/^\/base\//, '../../').replace(/\.(js|coffee)$/, '');
        };

    Object.keys(window.__karma__.files).forEach(function (file) {
        if (/^\/base\/test\/.*(spec|test)\.(js|coffee)$/i.test(file) || /^\/base\/test\/helpers\/.*\.(js|coffee)$/i.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });

    requirejs.config({
        // Karma serves files under /base, which is the basePath from your config file
        baseUrl: '/base/src/js',
        waitSeconds: 0,

        paths: {
            'app.templates': "/base/test/app.templates",
            jquery: "/base/src/lib/jquery/jquery",
            angular: "/base/src/lib/angular/angular",
            'angular-mocks': "/base/src/lib/angular-mocks/angular-mocks",
            'angular-animate': "/base/src/lib/angular-animate/angular-animate",
            'angular-sanitize': "/base/src/lib/angular-sanitize/angular-sanitize",
            'angular-resource': "/base/src/lib/angular-resource/angular-resource",
            'angular-ui-router': "/base/src/lib/angular-ui-router/angular-ui-router",
            'angular-strap': "/base/src/lib/angular-strap/angular-strap",
            'angular-strap-tpl': "/base/src/lib/angular-strap/angular-strap.tpl",
            fastclick: "/base/src/lib/fastclick/fastclick",
            moment: "/base/src/lib/moment/moment",
            underscore: "/base/src/lib/underscore/underscore",
            less: "/base/src/lib/require-less/less",
            lessc: "/base/src/lib/require-less/lessc",
            normalize: "/base/src/lib/require-less/normalize"
        },

        packages: [
            {
                name: 'cs',
                location: '/base/src/lib/require-cs',
                main: 'cs'
            },
            {
                name: 'coffee-script',
                location: '/base/src/lib/coffeescript',
                main: 'extras/coffee-script'
            }
        ],

        shim: {
            angular: {
                deps: ['jquery'],
                exports: 'angular'
            },
            'angular-animate': ['angular'],
            'angular-sanitize': ['angular'],
            'angular-resource': ['angular'],
            'angular-mocks': {
                deps: ['angular'],
                exports: 'angular.mock'
            },
            'angular-strap': ['angular', 'angular-animate'],
            'angular-strap-tpl': ['angular', 'angular-animate', 'angular-strap'],
            'angular-ui-router': ['angular']
        },

        // dynamically load all test files
        deps: allTestFiles,

        // we have to kickoff jasmine, as it is asynchronous
        callback: window.__karma__.start
    });
}(window.requirejs));
