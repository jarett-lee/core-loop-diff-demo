// gulp_tasks/sass.js

const gulp = require('gulp')
const connect = require('gulp-connect')
const plumber = require('gulp-plumber')

const sass = require('gulp-sass')

gulp.task('sass', function () {
  gulp.src('../src/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('../public'))
    .pipe(connect.reload())
})

gulp.task('sass:watch', function () {
  gulp.start('sass')
  gulp.watch('../src/main.scss', ['sass'])
})
