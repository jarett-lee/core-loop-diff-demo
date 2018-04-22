// gulpfile.js

const gulp = require('gulp')
const hub = require('gulp-hub')

hub(['gulp_tasks/*.js'])

gulp.task('build', ['javascript', 'html', 'sass'])
gulp.task('watch', ['connect', 'javascript:watch', 'html:watch', 'sass:watch'])
gulp.task('default', ['build'])
