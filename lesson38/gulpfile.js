const { dest, watch, src } = require('gulp');
// const gulp = require('gulp') 
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// var browserSync = require('browser-sync').create();

// function liveReload() {
//     browserSync.init({
//         server: {
//             baseDir: "./app"
//         }
//     });
//     gulp.watch('app/sass/*.scss', compiler)
//     gulp.watch('app/sass/*.scss', autoprefixer)
//     gulp.watch('app/sass/*.scss', cleaner)
//     .pipe(browserSync.stream());
// }

function compiler() { //делаем компиляцию всех файлов sсss
    return src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('app/css'))

}

function autoprefixer(){ //расставляем префиксы
    return src('app/css/style.css')
    .pipe(prefix({
        cascade: false
    }))
    .pipe(prefix(['last 2 versions']))
    .pipe(dest('app/css'))
}

function cleaner() {
    return src('app/css/style.css')
    .pipe(cleanCSS('app/css/style.css'))
    .pipe(dest('app/css'))
}

function watcher() {
    watch(['app/sass/*.scss'], compiler)

}
function buildCSS() {
    return src('app/css/style.css')
    .pipe(dest('dest/css'))
}
function buildHTML() {
    return src('app/css/index.html')
    .pipe(dest('dest'))
}
function buildJS() {
    return src('app/css/*.js')
    .pipe(dest('dest/js/'))
}


// exports.default = liveReload;
exports.compiler = compiler;
exports.autoprefixer = autoprefixer;
exports.cleaner = cleaner;
exports.watcher = watcher;
exports.buildCSS = buildCSS;
exports.buildHTML = buildHTML;
exports.buildJS = buildJS;
