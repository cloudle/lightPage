var gulp = require('gulp'),
	watch = require('gulp-watch'),
	gutil = require('gulp-util'),
	chalk = require('chalk'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	gulpIf = require('gulp-if'),
	prefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	nodemon = require('gulp-nodemon'),
	babelify = require('babelify'),
	watchify = require('watchify'),
	uglify = require('gulp-uglify'),
	merge = require('merge'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync').create(),
	browserify = require('browserify'),
	browserifyInc = require('browserify-incremental');

function mapError(err) {
	if (err.fileName) {
		gutil.log(chalk.red(err.name)
			+ ': '
			+ chalk.yellow(err.fileName.replace(__dirname, ''))
			+ ': '
			+ 'Line '
			+ chalk.magenta(err.lineNumber)
			+ ' & '
			+ 'Column '
			+ chalk.magenta(err.columnNumber || err.column)
			+ ': '
			+ chalk.blue(err.description))
	} else {
		gutil.log(chalk.red(err.name)
			+ ': '
			+ chalk.blue(err.messageFormatted || err.message))
	}

	this.emit('end');
}

gulp.task('babelify', function(){
	watchifyBuilder(babelify, './app/entry.js', 'bundle.js', {presets: ["es2015", "stage-0"]}, true);
});

function mapLog(msg) { gutil.log('Script updated: '+chalk.blue.bold(msg)); }

function watchifyBuilder(compressor, entryPoint, filename, options, uglifyDisable) {
	var args = merge(watchify.args, { debug: true, cacheFile: './build/browserify-cache.json' });
	var bundler = watchify(browserifyInc(entryPoint, args)).transform(compressor, options);
	bundleScript(bundler, filename, uglifyDisable);
	bundler.on('update', function(){
		bundleScript(bundler, filename, uglifyDisable);
	}).on('log', mapLog)
}

function bundleScript(bundler, filename, uglifyDisable) {
	return bundler.bundle()
		.on('error', mapError)
		.pipe(source(filename))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(gulpIf(!uglifyDisable, uglify()))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('www'))
		.pipe(browserSync.stream())
}

gulp.task('sass-bundle', function() {
	gulp.src('./app/entry.scss')
		.pipe(sourcemaps.init())
		.pipe(sass()).on('error', mapError)
		.pipe(prefixer())
		.pipe(sourcemaps.write())
		.pipe(rename('bundle.css'))
		.pipe(gulp.dest('./www'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		port: 2015,
		proxy: "http://localhost:7020",
		files: ['./www/*.js', './www/**/*.html'],
		open: false
	});

	watch("./app/**/*.scss", () => gulp.start(['sass-bundle']));
});

var nodemonIgnores = ['www', 'app', 'node_modules'];
gulp.task('nodemon', function (callback) {
	var started = false;
	nodemon({script: 'server.js', ignore: nodemonIgnores}).on('start', function () {
		if (!started) { callback(); started = true; }
	});
});

gulp.task('default', ['sass-bundle', 'babelify', 'browser-sync']);