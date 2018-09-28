const {
  src,
  dest,
  watch,
  series,
} = require('gulp');
const browserSync = require('browser-sync').create();
const slim = require('gulp-slim');
const pump = require('pump');

const siteDestFolder = './public';
const slimSelector = './src/*.slim';

function slimTransform() {
  return pump([
    src(slimSelector),
    slim({ pretty: true }),
    dest(siteDestFolder),
  ]);
}

function development() {
  browserSync.init({
    server: siteDestFolder,
  });

  watch(slimSelector,
    { ignoreInitial: false },
    series(
      slimTransform,
      browserSync.reload,
    ));
}

exports.default = development;
