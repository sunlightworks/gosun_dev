var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var useref = require("gulp-useref");
var gulpIf = require("gulp-if");
var strip = require("gulp-strip-comments");
var cssnano = require("cssnano");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var uncss = require("postcss-uncss");
var uglify = require("gulp-uglify");
var cache = require("gulp-cache");
var del = require("del");
var runSequence = require("run-sequence");
var rename = require("gulp-rename");
var unused = require("gulp-unused");
var gm = require("gulp-gm");
var newer = require("gulp-newer");
var imgmin = require("gulp-imagemin");
var base64 = require("gulp-base64");

// js file paths
var utilJsPath = 'node_modules/codyhouse-framework/main/assets/js'; // util.js path - you may need to update this if including the framework as external node module
var componentsJsPath = 'main/assets/js/components/*.js'; // component js files
var scriptsJsPath = 'ThemeKit/assets'; //folder for final scripts.js/scripts.min.js files

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss") // Gets all files ending with .scss in scss and children dirs
    .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest("ThemeKit/assets")) // Outputs it in the css folder
    .pipe(
      browserSync.reload({
        pretty: true,
        // Reloading with Browser Sync
        stream: true
      })
    );
});


gulp.task('watch', gulp.series(['sass', 'scripts'], function () {
  gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
  gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));


// Default
gulp.task("default", function(callback) {
  runSequence(["sass", "css", "watch"]);
});

gulp.task("css", function() {
  var plugins = [autoprefixer({ browsers: ["last 1 version"] }), cssnano()];
  return gulp
    .src("app/css/main.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("app"))
    .pipe(gulp.dest("ThemeKit/assets"));
});

gulp.task('scripts', function() {
  return gulp.src([utilJsPath+'/util.js', componentsJsPath])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(scriptsJsPath))
  .pipe(browserSync.reload({
    stream: true
  }))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(scriptsJsPath))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// Cleaning
gulp.task("clean", function() {
  return del.sync("dist").then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task("clean:dist", function() {
  return del.sync(["dist/**/*"]);
});

// Build Sequences
// ---------------

gulp.task("build", function(callback) {
  runSequence("clean:dist", "sass", ["css"], callback);
});


var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvariables = require('postcss-css-variables'); 
var calc = require('postcss-calc');  
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// js file paths
var utilJsPath = 'node_modules/codyhouse-framework/main/assets/js'; // util.js path - you may need to update this if including the framework as external node module
var componentsJsPath = 'app/js/components/*.js'; // component js files
var scriptsJsPath = 'ThemeKit/assets'; //folder for final scripts.js/scripts.min.js files

// css file paths
var cssFolder = 'ThemeKit/assets'; // folder for final style.css/style-custom-prop-fallbac.css files
var scssFilesPath = 'app/scss/**/*.scss'; // scss files to watch


gulp.task('sass', function() {
  return gulp.src(scssFilesPath)
  .pipe(sassGlob())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(gulp.dest(cssFolder))
  .pipe(rename('style-fallback.css'))
  .pipe(postcss([cssvariables(), calc()]))
  .pipe(gulp.dest(cssFolder));
});

gulp.task('scripts', function() {
  return gulp.src([utilJsPath+'/util.js', componentsJsPath])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(scriptsJsPath))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(scriptsJsPath))
});



gulp.task('default', gulp.series(['sass', 'scripts'], function () {
  gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
  gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));
