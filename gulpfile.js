const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');

// Simplified the Jekyll task to avoid TypeError
gulp.task('jekyll', shell.task(['bundle exec jekyll build --watch'], { verbose: true }));

// BrowserSync task with improved logging
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./_site"
    },
    notify: false, // Disable BrowserSync notifications
    open: false    // Prevent BrowserSync from opening a browser window automatically
  });

  console.log('BrowserSync is running. Watching for file changes...');

  // Watch for Jekyll rebuilds and reload BrowserSync
  gulp.watch("_site/**/*.*").on('change', function (file) {
    console.log(`File changed: ${file}`);
    browserSync.reload();
  });
});

// Default task with parallel execution
gulp.task('default', gulp.parallel('jekyll', 'serve'));
