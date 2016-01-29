module.exports = function (config) {
    config.set({

        basePath: '',

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'ng-html2js'
        ],

        frameworks: ['jasmine'],



        files: [
            'flibs/angular/angular.js',
            'flibs/angular-ui-router/release/angular-ui-router.js',
            'flibs/angular-toastr/dist/angular-toastr.js',
            'flibs/angular-mocks/angular-mocks.js',
            'ng/**/*.js',
            'ng/**/*.html'
        ],

        exclude: [],

        preprocessors: {
            'ng/**/*.html': ['ng-html2js'],
            'ng/**/!(*.mock|*.spec).js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'ng/',
            moduleName: 'templates'
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: false
    });
};