const gulp = require('gulp');
const ts = require('gulp-typescript');

function copyFiles() {
    gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: false,
        }))
        .pipe(gulp.dest('out/src/'));
}

gulp.task('default', copyFiles);

