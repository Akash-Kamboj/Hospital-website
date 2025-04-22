const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');


const paths = {
  css: 'src/css/**/*.css',
  js: 'src/js/**/*.js',
  dest: {
    css: 'dist/css',
    js: 'dist/js'
  }
};

gulp.task('minify-css', function () {
  return gulp.src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dest.css));
});


gulp.task('minify-js', function () {
  return gulp.src(paths.js)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('default', gulp.parallel('minify-css', 'minify-js'));
