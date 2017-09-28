var postcss = require('gulp-postcss');
var gulp=require('gulp');
var del = require('del');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var pump = require('pump');
const eslint = require('gulp-eslint');

gulp.task('rm',function(){
	return del('dist/**');
});
gulp.task('css',['rm'],function () {
    return gulp.src('./src/*.css')
             .pipe(sourcemaps.init())
	             .pipe(postcss([ autoprefixer() ]))
		             .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./dist'));
		    });
gulp.task('eslint',function(){
		return gulp.src('./src/*.js')
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
	})
gulp.task('js',['rm'], () =>
	gulp.src('src/*.js')
		.pipe(babel({presets: ['env']}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		);
gulp.task('js-watch', () =>
	gulp.src('src/*.js')
		.pipe(babel({presets: ['env']}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		);


gulp.task('default',['rm','css','eslint','js']);
gulp.task('watch',function(){
	var watcher = gulp.watch('./src/*.js', ['js-watch']);
	watcher.on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	});
