const GulpClient = require('gulp');
const { src, dest, watch } = require('gulp') // передаем все методы галпа
const scss = require('gulp-sass') // передаем все методы плагина галп-сасс
const sassLint = require('gulp-sass-lint');

function styles() { //объявляем таск
    return src('sass/style.scss') //начало содержания таска
    .pipe(scss())
    .pipe(scss().on('error', alert('error')))
    .pipe(dest('css/'))
}

function watching() {
    watch(['sass/**/*.scss'], styles);

}

function linting() {
    src.task('default', function () {
        return src('sass/**/*.sss')
          .pipe(sassLint())
          .pipe(sassLint.format())
          .pipe(sassLint.failOnError())
      });
}


exports.styles = styles; // экспортируем (выполняем) таск при вызове галп стайлс
exports.watching = watching;
exports.linting = linting;