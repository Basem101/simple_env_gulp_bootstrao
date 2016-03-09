// including plugins
    var gulp          = require('gulp');
        less          = require("gulp-less"),
        minifycss     = require('gulp-minify-css'),
        rename        = require('gulp-rename'),
        plumber       = require('gulp-plumber'),
        autoprefixer  = require('gulp-autoprefixer');

    // Task - Compiles Unchained Less Files
    gulp.task('compile-bp-less', function () {
      gulp.src('static/less/bootstrap/bootstrap.less') // path to your file
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest('static/css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('static/css'))
      .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'));
    });

    // Task - Watches Unchained + bp Less Files
    gulp.task('watch-bp-less', function () {
       gulp.watch('static/less/bootstrap/**/*.less', ['compile-bp-less']);
       gulp.watch('static/less/bootstrap/*.less', ['compile-bp-less']);
    });

    // Task - 'Gulp' Command in terminal
    gulp.task('default', ['compile-bp-less', 'watch-bp-less'],
        function () {
    });