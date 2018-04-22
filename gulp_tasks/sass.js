// gulp_tasks/sass.js

const gulp = require('gulp')
const sass = require('gulp-sass')
const connect = require('gulp-connect')

gulp.task('sass', function () {
  gulp.src('../src/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('../public'))
    .pipe(connect.reload())
})

gulp.task('sass:watch', function () {
  gulp.watch('../src/main.scss', ['sass'])
})
