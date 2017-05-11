/**
 * Copyright (c) 2017-present, Agoo.com.co <http://www.agoo.com.co>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies
 */
var express = require('express');
var dashboardRouter = express.Router();
var logger = require('../utils/logger').logger;
var request = require('request');
// TODO: Agregar passport

/* GET / root page. */
dashboardRouter.get('/dashboard', function (req, res) {
    var error = '';
    // Basic error validator
    // Error
    if (typeof req.query.error !== 'undefined') {
        error = req.query.error;
    }
    // Session
    if (typeof req.session.userId === 'undefined' || typeof req.session.userId === '') {
        return res.redirect('/login');
    }

    res.render('dash/index', {
        title: 'Dashboard | Agoo Administrator',
        level: '../',
        layout: 'main',
        error: error
    });
});

module.exports = dashboardRouter;