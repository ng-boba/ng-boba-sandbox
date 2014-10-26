module.exports = function(grunt) {

    /**
     * Sample ngBoba project configuration using concat
     */
    grunt.initConfig({
        ngBoba: {
            options: {
                modules: ['frog'],
                moduleFormat: "anonymous"
            },
            build: {
              src: 'src/frog/**/*.js'
            }
        },
        concat: {
          build: {
            src: '<%= ngBoba.output.files %>',
            dest: 'build/frog.concat.js'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-boba');

    // Default task(s).
    grunt.registerTask('default', ['ngBoba', 'concat']);
};
