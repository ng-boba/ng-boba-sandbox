module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/frog/**/*.js',
                dest: 'build/frog.min.js'
            }
        },
        ng_boba: {
            options: {
                module: 'jModule'
            },
            build: {
                src: 'src/frog/**/*.js',
                dest: 'build/frog.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-boba');


    // Default task(s).
    grunt.registerTask('default', ['ng_boba']);

};