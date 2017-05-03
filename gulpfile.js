/**
 *
 */

var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var runSequence = require('run-sequence');

var opts = {
  outputPath: './',
  outputName: 'obnoxious.css',

  autoprefixerOptions: {
    browsers: ['last 2 versions'],
    cascade: false
  },

  sassOptions: {
    outputStyle: 'expanded'
  }
};

gulp.task('compile', function() {
  return gulp.src('source/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass(opts.sassOptions))
    .pipe(autoprefixer(opts.autoprefixerOptions))
    .pipe(concat(opts.outputName))
    .pipe(gulp.dest(opts.outputPath))
})

gulp.task('watch', function() {
  gulp.watch('source/**/*.scss', ['compile'])
});
