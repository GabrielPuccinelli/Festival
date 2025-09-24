const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    src('src/scss/**/*.scss') // Identify the SCSS file
        .pipe(sass().on('error', sass.logError)) // Compile it
        .pipe(dest('build/css')); // Save it in the public/css folder
    done();
}

function js(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
    done();
}

exports.css = css;
exports.js = js;
exports.dev = dev;
