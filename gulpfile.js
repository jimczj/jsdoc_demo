var gulp = require('gulp')
var jsdoc = require('gulp-jsdoc3');
// jsdoc 配置文件
var config = require('./jsdoc.json');

gulp.task('doc', function (cb) {
    gulp.src([], {read: false})
        .pipe(jsdoc(config, cb));
});
