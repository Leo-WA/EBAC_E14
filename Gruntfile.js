module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      less: {
        development: {
          files: {
            'caminho/para/seu/arquivo.css': 'caminho/para/seu/arquivo.less'
          }
        }
      },
      
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'caminho/para/seu/arquivo.js',
          dest: 'caminho/para/seu/arquivo.min.js'
        }
      },
  
      watch: {
        styles: {
          files: ['**/*.less'],
          tasks: ['less']
        },
        scripts: {
          files: ['**/*.js'],
          tasks: ['uglify']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  

    grunt.registerTask('default', ['less', 'uglify']);
  };
  