// gulp_tasks/javascript.js

const gulp = require('gulp')
const connect = require('gulp-connect')
const plumber = require('gulp-plumber')

const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const babelify = require('babelify')
const uglify = require('gulp-uglify')
const log = require('fancy-log')
const minify = require('gulp-babel-minify')

function errorHandler (err) {
  log.error(err.message)
  console.error()
  console.error(err.codeFrame)
  this.emit('end')
}

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
    .on('error', errorHandler)
    .pipe(source('bundle.js'))
    .pipe(plumber({
      errorHandler: errorHandler
    }))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // Add other gulp transformations (eg. uglify) to the pipeline here.
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../public'))
    .pipe(connect.reload())
})

gulp.task('javascript-es6', function () {
  gulp.src('../src/js/**/*.js')
    .pipe(plumber({
      errorHandler: function () {
        // ignore, the other function will handle it
      }
    }))
    .pipe(minify({
      mangle: {
        keepClassName: false
      }
    }))
    .pipe(gulp.dest('../public/js'))
    .pipe(connect.reload())
})

gulp.task('javascript', ['javascript-bundle', 'javascript-es6'])

gulp.task('javascript:watch', function () {
  gulp.start('javascript')
  gulp.watch('../src/js/**/*.js', ['javascript'])
})
