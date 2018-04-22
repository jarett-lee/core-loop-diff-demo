// gulp_tasks/connect.js

const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('connect', function () {
  connect.server({
    root: '../public',
    livereload: true
  })
})
