
//Sassコンパイル
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require("gulp-plumber");
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');


const path = {
    base:'./',
    scss:'./src/htdocs/scss/**/*.scss',
   image:'./assets/images/**/*',
      js:'./src/htdocs/**/*.js',
     css:'./src/htdocs/assets/css',
    html:'./src/**/*.html',
     php:'./src/htdocs/**/*.php'
};



gulp.task('sass', function(){
    return gulp.src(path.scss)
    .pipe(plumber({
      errorHandler: notify.onError({
        title: "失敗してるよ！",
        message: "<%= error.message %>"
        })
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
    }))
    .pipe(autoprefixer({
        browsers: ["last 2 versions", "Firefox ESR"],
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.css))
    .pipe(filter(['**', '!**/*.map']))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('server', function () {
    browserSync({
        notify: false,
        proxy: "http://localhost.kinmemai-honpo.jp/"
    });
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
  gulp.watch(path.scss, gulp.series('sass'));
  gulp.watch([path.php,path.html], gulp.series('reload'));
});

gulp.task('default',
    gulp.parallel('server','watch')
);












