'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function compileSass() {
    return gulp.src('src/sass/**.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
}

function concatJS() {
    return gulp.src('src/js/**.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/js'));
}

function htmlCompile() {
    return gulp.src('src/**.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('dist'));
}

function moveImages() {
    return gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'))
}

exports.default = function() {
    gulp.watch('src/sass/*.scss', compileSass);
    gulp.watch('src/js/**.js', concatJS);
    gulp.watch('src/**.html', htmlCompile);
    gulp.watch('src/images/*', moveImages);
}
