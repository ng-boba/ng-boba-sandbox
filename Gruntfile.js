module.exports = function(grunt) {

  /**
   * ngBoba seed project configuration with concat and watch support
   */
  grunt.initConfig({

    /**
     * We need to configure boba for each of the modules in our
     * project.
     */
    ngBoba: {
      options: {
        moduleFormat: 'anonymous',

        /**
         * If we enable verbose messages, boba will try to help us sort out
         * our project configuration errors. You can also specify the --debug
         * flag to activate verbose messages.
         */
        verbose: true,

        /**
         * Dependencies are additional files to include outside of our project scope. They are included
         * before your project files. Make sure you include Angular otherwise things just won't work!
         */
        dependencies: [
          'lib/angular-1.3.0.js'
        ]
      },
      buildApp: {
        options: {
          modules: ['app'],

          /**
           * Let's generate the dependency JSON so we can use infuser. If we don't want to use
           * the infuser, then we can skip this output step.
           */
          output: 'build/app.boba.json'
        },
        src: ['src/**/*.js']
      },
      buildWebsite: {
        options: {
          modules: ['website'],
          output: 'build/website.boba.json'
        },
        src: ['src/**/*.js']
      }
    },

    /**
     * Let's use the grunt concat task to create an
     * aggregated file for each of our modules.
     */
    concat: {
      buildApp: {
        src: '<%= ngBoba.buildApp.output.files %>',
        dest: 'build/app.concat.js'
      },
      buildWebsite: {
        src: '<%= ngBoba.buildWebsite.output.files %>',
        dest: 'build/website.concat.js'
      }
    },

    /**
     * General watch command watches all javascript source files
     * and rebuilds all the components.
     */
    watch: {
      options: {
        atBegin: true
      },
      build: {
        files: ['src/**/*.js'],
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
