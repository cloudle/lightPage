var gulp = require('gulp'),
	watch = require('gulp-watch'),
	gutil = require('gulp-util'),
	chalk = require('chalk'),
	concat = require('gulp-concat'),
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

var configs = require('./configs'),
	isDevelopmentMode = !configs.production;

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

var essentialScriptSrc = './app/entry.js',
	scriptSrc = configs.scriptPatch ? [essentialScriptSrc, configs.scriptPatch] : [essentialScriptSrc];

gulp.task('babelify', function(){
	watchifyBuilder(babelify, [scriptSrc], 'bundle.js', {presets: ["es2015", "stage-0"]}, isDevelopmentMode);
});

function mapLog(msg) { gutil.log('Script updated: '+chalk.blue.bold(msg)); }

function watchifyBuilder(compressor, entryPoint, filename, options, developmentMode) {
	var args = merge(watchify.args, { debug: developmentMode, cacheFile: './build/browserify-cache.json' });
	var bundler = watchify(browserifyInc(entryPoint, args)).transform(compressor, options);
	bundleScript(bundler, filename, developmentMode);
	bundler.on('update', function() {
		bundleScript(bundler, filename, developmentMode);
	}).on('log', mapLog)
}

function bundleScript(bundler, filename, developmentMode) {
	return bundler.bundle()
		.on('error', mapError)
		.pipe(source(filename))
		.pipe(buffer())
		// .pipe(gulpIf(!developmentMode, uglify()))
		.pipe(gulp.dest('www'))
		.pipe(browserSync.stream())
}

gulp.task('sass-bundle', function() {
	var sassConfigs = isDevelopmentMode ? {} : {outputStyle: 'compressed'},
		essentialStyleSrc = './app/entry.scss',
		styleSrc = configs.cssPatch ? [essentialStyleSrc, configs.cssPatch] : [essentialStyleSrc];

	console.log(styleSrc);
	gulp.src(styleSrc)
		.pipe(gulpIf(isDevelopmentMode, sourcemaps.init()))
		.pipe(sass(sassConfigs)).on('error', mapError)
		.pipe(prefixer())
		.pipe(gulpIf(isDevelopmentMode, sourcemaps.write()))
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('./www'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		port: 2015,
		proxy: "http://localhost:"+configs.serverPort,
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