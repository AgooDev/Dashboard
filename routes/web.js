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
var logger = require('../utils/logger').logger;
var moment = require('moment');
var express = require('express');
var router = express.Router();

/**
 * SetupWebRouter
 *
 * @description  Configure all routes on express router
 *
 * @param {express}      app      The application server
 */
function SetupWebRouter(app) {
    // logger for all request will first hits this middleware
    router.use(function (req, res, next) {
        var now = moment(new Date());

        var date = now.format('DD-MM-YYYY HH:mm');
        logger.info('%s %s %s', req.method, req.url, date);
        next();
    });

    app.use(router);

    /**
     *  Declare all routes
     */
    var landingRoutes = require('./landing');
    var dashboardRoutes = require('./dashboard');

    app.use('/', landingRoutes);
    app.use('/', dashboardRoutes);
}

// Export setup function
module.exports.SetupWebRouter = SetupWebRouter;