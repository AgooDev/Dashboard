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
var landingRouter = express.Router();
var logger = require('../utils/logger').logger;
var request = require('request');
// TODO: Agregar passport

    /* GET / root page. */
    landingRouter.get('/', function (req, res) {
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
        res.render('landing/login', {
            title: 'Dashboard | Agoo Administrator',
            level: '',
            layout: 'landing',
            error: error
        });
    });

/* GET Login page. */
landingRouter.get('/login', function (req, res) {
    var error = '';

    // Basic error validator
    // Error
    if (typeof req.query.error !== 'undefined') {
        error = req.query.error;
    }
    // Session
    if (!(typeof req.session.userId === 'undefined' || typeof req.session.userId === '')) {
        return res.redirect('/');
    }
    res.render('landing/login', {
        title: 'Dashboard | Agoo Administrator',
        level: '',
        layout: 'landing',
        error: error
    });
});

/* POST Login page. */
landingRouter.post('/login', function (req, res) {
    if (typeof req.body.login_username === 'undefined' && req.body.login_username === ''
        && typeof req.body.login_password === 'undefined' && req.body.login_password === '') {
        logger.info('Login credentials: Empty values.');
        // error=11 Login credentials: Empty values.
        return res.redirect('/login?error=1');
    }

    // create the request to agoo api
    var username = req.body.login_username;
    var password = req.body.login_password;
    var apiUrl = process.env.API_URL + '/' + process.env.API_VERSION;
    var authValues = new Buffer(username + ':' + password).toString('base64');
    var options = {
        url: apiUrl + '/admin/login',
        headers: {
            'Authorization': 'Basic ' + authValues,
            'Content-Type': 'application/json'
        },
        method: 'GET'
    };

    // Sending login method
    request.get(options, function (err, httpResponse, body) {
        if (httpResponse.statusCode !== 200) {
            switch (httpResponse.statusCode) {
                case 401:
                    logger.error(err);
                    return res.status(401).send({
                        message: 'Unauthorized - Agoo API',
                        error: body
                    });
                    break;
                case 404:
                    logger.error(err);
                    return res.status(404).send({
                        message: 'Admin not found - Agoo API',
                        error: body
                    });
                    break;
                default:
                    logger.error(err);
                    return res.status(500).send({
                        message: 'Server error - Agoo API',
                        error: body
                    });
                    break;
            }
        }

        // Success
        logger.info(body);
        logger.info(JSON.parse(body));
        return res.json({charge: JSON.parse(body)});
    });

});

/* GET Logout page. */
landingRouter.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            logger.info(err);
        }
        res.redirect('/login');
    });
});

module.exports = landingRouter;