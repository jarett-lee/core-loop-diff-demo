// gulp_tasks/html.js

const gulp = require('gulp')
const connect = require('gulp-connect')
const plumber = require('gulp-plumber')

gulp.task('html', function () {
  gulp.src('../src/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('../public'))
    .pipe(connect.reload())
})

gulp.task('html:watch', function () {
  gulp.start('html')
  gulp.watch('../src/index.html', ['html'])
})
