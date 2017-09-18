var browserify = require('browserify');
var gulp = require("gulp");
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babelify = require('babelify');

// Default gulp task
gulp.task("default", ['javascript']);

// JS => babel, minifying, sourcemaps
gulp.task('javascript', function () {
    return browserify({
          entries: ["./src/index.js"],
          debug: true
        })
        .transform(babelify, { presets: ["es2015"] })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['javascript']);
});
