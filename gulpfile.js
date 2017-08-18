const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const budo = require('budo')
const history = require('connect-history-api-fallback')
const babelify = require('babelify').configure({
    presets:['es2020']
})

const node_modules = 'node_modules'
const sweetAlert = node_modules + '/sweetalert2/dist'
const bower_components_dir = 'bower_components'


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

gulp.task('copy', function () {
    return gulp.src([
        sweetAlert + '/sweetalert2.min.css',
        node_modules + '/moment/moment.js',
        bower_components_dir + '/moment/locale/tr.js',
        node_modules + '/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
        node_modules + '/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
    ])
        .pipe(gulp.dest('./app/packages'))
})

gulp.task('default', ['copy', 'watch'])