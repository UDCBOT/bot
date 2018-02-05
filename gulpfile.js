const gulp = require('gulp');

function copyFiles() {
    gulp.src('src/**/*.js')
        .pipe(gulp.dest('build/'));
}

gulp.task('default', copyFiles);

