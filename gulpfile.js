const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');

// Jekyll build task
gulp.task('jekyll', shell.task(['bundle exec jekyll build --watch']));

// BrowserSync task
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./_site"
    }
  });
  // Watch for Jekyll rebuilds
  gulp.watch("_site/**/*.*").on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.parallel('jekyll', 'serve'));
