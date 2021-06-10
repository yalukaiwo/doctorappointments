const { src } = require("gulp")
const clean = require("gulp-clean")

const cl = () => {
    return src('./dist/', {read: false})
        .pipe(clean());
}

exports.clean = cl