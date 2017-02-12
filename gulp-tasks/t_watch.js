// -------------------- BROWSER SYNC http://www.browsersync.io/docs/ --------------------
'use strict';

var gulp = require('gulp'),
    // browser sync
    bs_angular = require('browser-sync').create('bs_angular');


gulp.task('watch', (process.argv[3] === '--compile') ? ['default'] : null, function() {

    bs_angular.init({
        // http://www.browsersync.io/docs/options/#option-host
        //host: "192.168.10.10",
        // http://www.browsersync.io/docs/options/#option-proxy
        //proxy: "http://localhost:3010",
        // http://www.browsersync.io/docs/options/#option-port
        port: 3012,
        // http://www.browsersync.io/docs/options/#option-notify
        notify: true,
        watchOptions: {
            usePolling: true
        },
        server: true,
        ui: {
            port: 3013
        }
    });

    gulp
        .watch([
            'gulp-tasks/*',
            'index.html',
            'app/**/*',
            '!app/**/*.min.js'
        ],{
            usePolling: true
        })
        .on('change', bs_angular.reload);

});