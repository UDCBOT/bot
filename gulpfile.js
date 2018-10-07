const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function copyFiles()
{
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('out/'));
}

function copyLang()
{
    return gulp.src('src/lang/**')
        .pipe(gulp.dest('out/lang/'))
}

gulp.task('copyFiles', copyFiles);
gulp.task('copyLang', copyLang);

gulp.task('build', gulp.parallel('copyFiles', 'copyLang'));

gulp.task('default', gulp.parallel('build'));

