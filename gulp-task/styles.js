const { dest, src } = require("gulp")
const sass = require("gulp-sass")
const cleanCSS = require("gulp-clean-css")
const autoprefixer = require('gulp-autoprefixer')

const styles = () => {
    return src('./src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('./dist/css/'))
}

exports.styles = styles