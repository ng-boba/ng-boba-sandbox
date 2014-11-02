module.exports = function(grunt) {

  /**
   * Sample ngBoba project configuration with concat and watch support
   */
  grunt.initConfig({
    ngBoba: {
      options: {
        modules: ['frog'],
        moduleFormat: 'anonymous'
      },
      build: {
        options: {
          /**
           * Let's generate the dependency JSON so we can use infuser.
           */
          output: 'build/frog.build.json'
        },
        src: ['src/frog/**/*.js']
      }
    },
    concat: {
      build: {
        /**
         * Let's create a build file too.
         */
        src: '<%= ngBoba.build.output.files %>',
        dest: 'build/frog.concat.js'
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      build: {
        files: ['src/frog/**/*.js'],
        tasks: ['ngBoba', 'concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ng-boba');

  // default tasks
  grunt.registerTask('default', ['ngBoba', 'concat']);
};
