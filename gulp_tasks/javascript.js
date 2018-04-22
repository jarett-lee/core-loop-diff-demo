// gulp_tasks/javascript.js

const gulp = require('gulp')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const babelify = require('babelify')
const uglify = require('gulp-uglify')
const log = require('fancy-log')
const minify = require('gulp-babel-minify')

gulp.task('javascript-bundle', function () {
  // Create a bundle
  const b = browserify({
    entries: '../src/js/main.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['env']
    })]
  })

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // Add other gulp transformations (eg. uglify) to the pipeline here.
    .pipe(uglify())
    .on('error', log.error)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../public'))
})

gulp.task('javascript-es6', function () {
  gulp.src('../src/js/**/*.js')
    .pipe(minify({
      mangle: {
        keepClassName: false
      }
    }))
    .pipe(gulp.dest('../public/js'))
})

gulp.task('javascript', ['javascript-bundle', 'javascript-es6'])

gulp.task('javascript:watch', function () {
  gulp.watch('../src/js/**/*.js', ['javascript'])
})
