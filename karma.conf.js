// Karma configuration
// Generated on Fri Jul 31 2015 00:00:34 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html'],

      htmlReporter: {
          outputDir: 'karma_html', // where to put the reports
          templatePath: 'null', // set if you moved jasmine_template.html
          focusOnFailures: true, // reports show failures on start
          namedFiles: false, // name files instead of creating sub-directories
          pageTitle: null, // page title for reports; browser info by default
          urlFriendlyName: false, // simple replaces space with _ for files/dirs
          reportName: 'report-summer-filename', // report summary filename

          //experimental
          preserveDescribeNesting: false, // folded suites stay folded
          foldAll: false, //reports start folded
      },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
