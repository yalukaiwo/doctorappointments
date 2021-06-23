const { src, dest } = require("gulp")
const imagemin = require('gulp-imagemin');

const images = () => {
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img/'))
}

exports.images = images