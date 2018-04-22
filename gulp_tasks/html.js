// gulp_tasks/html.js

const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('html', function () {
  gulp.src('../src/index.html')
    .pipe(gulp.dest('../public'))
    .pipe(connect.reload())
})

gulp.task('html:watch', function () {
  gulp.watch('../src/index.html', ['html'])
})
