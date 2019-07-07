var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
const imagemin = require('gulp-imagemin');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var del = require("del");

gulp.task('watch', function () {
  gulp.watch('app/sass/style.scss', gulp.series('style'));
});

function img() {
  return gulp.src("app/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest("build/img"));
};

gulp.task("build", gulp.series(clean, copy, style, img));

function style() {
  return gulp.src("app/sass/style.scss")
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
};

function copy() {
  return gulp.src([
      "app/fonts/**/*.{woff,woff2}",
      "app/js/**",
      "app/pages/*.html",
      "app/*.html"
    ], {
      base: "app"
    })
    .pipe(gulp.dest("build"));
};

function clean() {
  return del("build");
};
