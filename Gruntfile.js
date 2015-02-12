'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'javascript/*.js',
        dest: 'build/main.min.js'
      }
    },
    sass: {
      dist: {
        files: {
         'build/main.css':'sass/main.scss'
        }
      }
    },
    processhtml: {
      dist: {
        options: {
          process: true,
          data: {
            title: 'My Angular app',
            message: 'This is production distribution'
          }
        },
        files: {
          'build/index.html': ['index.html']
        }
      }
    }
  });

  // Load the plugin tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');

  // Custom tasks
  grunt.registerTask('build', ['processhtml']);
  grunt.registerTask('default', ['uglify', 'sass']);
};