const { src, dest } = require('gulp');
const slim = require('gulp-slim');

function development() {
  return src('./src/*.slim')
    .pipe(slim({ pretty: true }))
    .pipe(dest('./public/'));
}

exports.default = development;
