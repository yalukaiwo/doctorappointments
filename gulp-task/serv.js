const { watch, series } = require("gulp")
const browserSync = require("browser-sync")
const { styles } = require("./styles.js")
const { scripts } = require("./scripts.js")

const serv = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on("change", browserSync.reload)
    watch("./src/css/*.scss").on("change", series(styles, browserSync.reload))
    watch("./src/js/*.js").on("change", series(scripts, browserSync.reload))
};

exports.serv = serv