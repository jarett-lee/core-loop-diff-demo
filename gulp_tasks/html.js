// gulp_tasks/html.js

const gulp = require('gulp')

gulp.task('html', function () {
  gulp.src('../src/index.html')
    .pipe(gulp.dest('../public'))
})

gulp.task('html:watch', function () {
  gulp.watch('../src/index.html', ['html'])
})
