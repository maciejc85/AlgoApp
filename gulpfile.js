const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
var sass = require('gulp-sass');
const tscConfig = require('./tsconfig.json');


// clean the contents of the distribution directory
gulp.task('clean', function (cb) {
    return del(['dist/**/*', '!dist/node_modules/**/*'], { dot: true }, cb);
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(sourcemaps.init())          // <--- sourcemaps
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))      // <--- sourcemaps
        .pipe(gulp.dest('dist/app'));
});

gulp.task('sass', ['clean'], function () {
  return gulp.src('app/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/app'));
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function () {
    return gulp.src([
        'node_modules/**/*.js'
    ])
        .pipe(gulp.dest('dist/node_modules'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function () {
    return gulp.src(['app/**/*', '!app/**/*.sass', 'index.html', 'styles.css', 'bootstrap.css', '*.js', '*.json'], { base: './' })
        .pipe(gulp.dest('dist'))
});

gulp.task('tslint', ['clean'], function () {
    return gulp.src('app/**/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
 gulp.watch('app/**/*', ['watch-code-reload', 'watch-sass-reload']);
});
gulp.task('watch-code-reload', function () {
    return gulp.src(['app/**/*', '!app/**/*.sass', 'index.html', 'styles.css', 'bootstrap.css', '*.js', '*.json'], { base: './' })
        .pipe(gulp.dest('dist'))
});
gulp.task('watch-sass-reload', function () {
  return gulp.src('app/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/app'));
});


gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets', 'sass']);
gulp.task('quickbuild', ['compile', 'copy:libs', 'copy:assets', 'sass']);
gulp.task('default', ['quickbuild']);