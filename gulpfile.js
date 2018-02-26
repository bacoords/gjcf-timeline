var gulp = require('gulp');
var	gutil = require('gulp-util');
var	sass = require('gulp-sass');
var	autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');

gulp.task('css', function(){
	return gulp.src('sass/theme.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'));
});

// gulp.task('js', function(){
// 	return gulp.src('src/scripts/*.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('assets/scripts'));
// })

gulp.task('default', function(){
	gulp.watch('sass/**/*.scss', ['css']);
	// gulp.watch('src/scripts/*.js', ['js']);
});


gulp.task('zip', function () {
  return gulp.src([
		'./**/*',
    '!./{node_modules,node_modules/**/*}',
    '!./gulpfile.js',
    '!./package.json',
		'!./package-lock.json'
		])
    .pipe(zip('engage2excel-theme.zip'))
    .pipe(gulp.dest('./../'));
});
