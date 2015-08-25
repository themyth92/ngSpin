module.exports = function grunt(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify : {
      options : {
        banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                 '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },

      dist : {
        files : {
          'build/ngSpin.min.js' : ['build/ngSpin.temp.js']
        }
      }
    },

    concat : {
      options : {
        separator : ';',
        banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                 '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },

      dist : {             
        dest : 'build/ngSpin.temp.js',
        src  : ['src/css-double-bounce/d-bounce.directive.js',
                'src/css-rotating-plane/rot-plane.directive.js',
                'src/css-wandering-cube/wand-cube.directive.js',
                'src/css-wave/wave.directive.js',
                'src/ng-spin.js']
      }
    },

    clean : {
      temp : 'build/ngSpin.temp.js',
      dist : 'build/ngSpin.min.js' 
    },

    jshint : {
      options : {
        curly : true,
        eqeqeq : true,
        eqnull : true,
        browser : true,
        globals : {
          angular : true
        },
   
        '-W027' : true,
      },

      dist : ['src/**/*.js']
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('dist', ['clean:dist', 'concat', 'uglify', 'clean:temp']);
  grunt.registerTask('quality',['jshint:dist']);
}
