module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        ng_boba: {
            options: {
                modules: ['frog']
            },
            build: {
                src: 'src/frog/**/*.js',
                dest: 'build/frog.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-boba');


    // Default task(s).
    grunt.registerTask('default', ['ng_boba']);

};