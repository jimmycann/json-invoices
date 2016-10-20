'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('build', function () {
    return gulp.src('./public/style/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(gulp.dest('./public/style/css'));
});

gulp.task('build:watch', function () {
    gulp.watch('./public/style/scss/**/*.scss', ['build']);
});
