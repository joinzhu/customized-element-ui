const { src, dest, parallel } = require('gulp')
const less = require('gulp-less')
const cssmin = require('gulp-minify-css')
const rename = require('gulp-rename')

function createClientCss() {
  return src('./src/assets/css/a-client.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename('global-and-cover.css'))
    .pipe(dest('./lib'))
}

function createAdminCss() {
  return src('./src/assets/css/a-admin.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename('global-and-cover-admin.css'))
    .pipe(dest('./lib'))
}

exports.default = parallel(createClientCss, createAdminCss)
