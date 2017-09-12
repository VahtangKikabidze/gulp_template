var gulp = require("gulp");
var server = require("gulp-server-livereload");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");
var wiredep = require('wiredep').stream;

var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
 
gulp.task('build', function () {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('build'));
});


gulp.task('bower', function () {
  gulp.src('*.html')
    .pipe(wiredep({
      directory: ''
    }))
    .pipe(gulp.dest(''));
});


//SERVER
gulp.task('server', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));
});

//STYLES
gulp.task('style', function () {
  gulp.src('sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
    	browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.sass', ['style']);
  gulp.watch('bower.json', ['bower']);
});


gulp.task('default', ['server', 'watch']);