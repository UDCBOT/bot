const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function copyFiles() {
    gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('out/'));
}

gulp.task('default', copyFiles);

