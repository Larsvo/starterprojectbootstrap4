const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const browsersync = require('browser-sync').create();

//compile scss to css
function style() {
    //1 where is my css file
    return gulp.src('./scss/**/*.scss')
    
        //2 pass scss compiler
        .pipe(sass().on('error', sass.logError))
        //3 where t save css
        .pipe(gulp.dest('./css'))
        //4 sync changes all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;