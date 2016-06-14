var gulp = require('gulp');


var less = require('gulp-less');
var path = require('path');
var react = require('gulp-react');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    console.log('hello')
});

gulp.task('less', function () {
    return gulp.src('./src/less/less/main.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('jsx', function () {
    return gulp.src([ "./src/jsx/Article1.js","./src/jsx/Article2.js","./src/jsx/Article3.js","./src/jsx/Article.js","./src/jsx/Footer.js","./src/jsx/Header.js","./src/jsx/Content_left.js","./src/jsx/Content_right.js","./src/jsx/Content.js","./src/jsx/main.js"])
        .pipe(react())
        .on('error', function(err){
            console.log(err);
            this.end();
        })
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('copy_img', function () {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./public/img'));
});

gulp.task('copy_lib', function () {
    return gulp.src('./src/lib/*')
        .pipe(gulp.dest('./public/lib'));
});

gulp.task('copy_font', function () {
    return gulp.src('./src/font/*')
        .pipe(gulp.dest('./public/font'));
});

gulp.task('watch', function () {
    gulp.watch('./src/jsx/*.js', ['jsx']);
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/img/*', ['copy_img']);
    gulp.watch('./src/lib/*', ['copy_lib']);
});

gulp.task('clean', function () {
    return gulp.src('./public', {read: false})
        .pipe(clean());
});

gulp.task('build', function () {
    runSequence('clean',
        ['less', 'jsx', 'copy_img', 'copy_lib' , 'copy_font']);
});
