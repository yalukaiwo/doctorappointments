const { series, parallel } = require("gulp")
const { styles } = require("./gulp-task/styles.js")
const { serv } = require("./gulp-task/serv.js")
const { scripts } = require("./gulp-task/scripts.js")
const { images } = require("./gulp-task/images.js")
const { clean } = require("./gulp-task/clean.js")

exports.build = series(clean, styles, scripts, images)
exports.dev = parallel(serv, series(styles, scripts, images));
