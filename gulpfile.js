//通过require()导入所需文件
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
//创建并发布任务
gulp.task('js',function(){
	gulp.src('src/js/*.js').pipe(concat('index.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
})
gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('img',function(){
	gulp.src('src/img/*.*')
	.pipe(rename({"suffix" : ".min"}))
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img'));
})
//监听
gulp.task('default',function(){
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/img/*.*',['img']);
})

