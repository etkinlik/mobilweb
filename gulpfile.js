const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const budo = require('budo')
const history = require('connect-history-api-fallback')
const babelify = require('babelify').configure({
    presets:['es2020']
})

gulp.task('bundle', function () {
    let bundler = browserify('./src/app.js', {transform:babelify}).bundle()
    return bundler
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app'))
})

gulp.task('watch', function () {
    budo('./src/app.js', {
        serve: 'bundle.js',
        stream: process.stdout,
        live:true,
        dir: 'app',
        open: true,
        ssl:false,
        browserfy:{
            transform:babelify,
            debug:true
        },
        middleware:[history()]
    })
})