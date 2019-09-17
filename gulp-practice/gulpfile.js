var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
  gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
})

gulp.task('auto', function() {
  gulp.watch('js/*.js', function() {
    gulp.task('script')
  })
})

gulp.task('default', gulp.parallel('script', 'auto'))