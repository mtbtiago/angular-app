'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'build/main.min.js': ['javascript/*.js', 'bower_components/bower-tinder-js/*.js']
        }
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
    },
    copy: {
      main: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
        dest: 'build/bootstrap.min.css',
      }
    },
    'gh-pages': {
        options: {
          base: 'build',
          repo: 'https://github.com/mtbtiago/angular-app.git'
        },
        src: ['**']
    }
  });

  // Load the plugin tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Custom tasks
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('default', ['uglify', 'sass', 'copy', 'processhtml']);
};