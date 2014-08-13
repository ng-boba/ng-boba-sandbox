module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        ngBoba: {
            options: {
                modules: ['frog'],
                moduleFormat: "anonymous"
            },
            build: {
                src: 'src/frog/**/*.js',
                dest: 'build/frog.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-boba');


    // Default task(s).
    grunt.registerTask('default', ['ngBoba']);

};