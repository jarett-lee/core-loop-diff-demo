// gulp_tasks/sass.js

const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  gulp.src('../src/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('../public'))
})

gulp.task('sass:watch', function () {
  gulp.watch('../src/main.scss', ['sass'])
})
