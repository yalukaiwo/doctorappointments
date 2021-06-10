const { src, dest } = require("gulp")
const minifyjs = require('gulp-js-minify');
const uglify = require("gulp-uglify")
const concat = require("gulp-concat")

const scripts = () => {
    return src('./src/js/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(minifyjs())
    .pipe(dest('./dist/js/'));
}

exports.scripts = scripts