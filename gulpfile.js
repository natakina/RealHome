var gulp = require('gulp');

//styles
var sass = require('gulp-sass');
gulp.task('styles', function(){
	return gulp.src('./dev/style.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest('./site'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./dev/style.scss', ['styles']);
});

//templates
var htmlmin = require('gulp-htmlmin');
 
gulp.task('templates', function() {
  return gulp.src('./dev/*.html')
    .pipe(htmlmin({
    	collapseWhitespace: true
    }))
    .pipe(gulp.dest('./site'));
});

//images
var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
	return gulp.src('./dev/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./site/img'))
});


gulp.task('default', ['styles', 'templates', 'images']);