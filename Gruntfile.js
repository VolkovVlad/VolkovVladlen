module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
    less: {
      style: {
        files: {
        "css/style.css": ["less/style.less"]
        }
      }
    }, 
    
    autoprefixer: {
      options: {
        browsers: ["last 5 version", "ie 10"]
      },
      style: {
        src: "css/style.css"
        // ,
        // src: "less/**/*.less"
      }
    }, 
    
    cmq: {
      style: {
        files: {
        "css/style.css": ["css/style.css"]
        }
      }
    },
    
    cssmin: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"],
          "css/font-style.min.css": ["css/font-style.css"]
        }
      }
    },
    
    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    },
    
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },
    
    watch: {
      less: {
        files: ["less/**/*.less", "css/**/*.css", "*.html"],
        tasks: [
                "less",
                ],
        options: {
            spawn: false,
            livereload: true
        }
      } 
    },
    
    sprite:{
      all: {
        src: 'image/icons/*.png',
        dest: 'image/spritesheet.png',
        destCss: 'css/sprites.css',
        algorithm: 'top-down',
        padding: 40
      }
    },
    
    concat: {
      css: {
        src: ['css/**/*.min.css'],
        dest: 'css/united-min-Style.css'
      }
    }
    
  });  
 

 grunt.registerTask("build", [
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "csscomb",
    "imagemin",
    "sprite",
    "concat",
    
    "watch"
  ])
  
};