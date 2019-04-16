global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass-prod',
    'pug',
    'js.foundation',
    'js-prod',
    'copy.image',
    'fonts',
    'css.foundation'
  )
));

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js.foundation',
    'js.process',
    'copy.image',
    'fonts',
    'css.foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));