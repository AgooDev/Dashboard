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
var express     = require('express');
var landingRouter = express.Router();
var logger      = require('../utils/logger').logger;
// TODO: Agregar passport

/* GET / root page. */
landingRouter.get('/', function (req, res) {
    var error = '';
    // Basic error validator
    // Error
    if(typeof req.query.error !== 'undefined'){
        error = req.query.error;
    }
    // Session
    if(typeof req.session.userId === 'undefined' || typeof req.session.userId === ''){
        return res.redirect('/login');
    }
    res.render('landing/login', {
        title   : 'Dashboard | Agoo Administrator',
        level   : '',
        layout  : 'landing',
        error   : error
    });
});

/* GET Login page. */
landingRouter.get('/login', function (req, res) {
    var error = '';

    // Basic error validator
    // Error
    if(typeof req.query.error !== 'undefined'){
        error = req.query.error;
    }
    // Session
    if(!(typeof req.session.userId === 'undefined' || typeof req.session.userId === '')){
        return res.redirect('/');
    }
    res.render('landing/login', {
        title   : 'Dashboard | Agoo Administrator',
        level   : '',
        layout  : 'landing',
        error   : error
    });
});

/* POST Login page. */
landingRouter.post('/login', function (req, res) {
    if( typeof req.body.username === 'undefined'&& req.body.username === ''
        && typeof req.body.password === 'undefined' && req.body.password === ''){
        logger.info('Login credentials: Empty values.');
        // error=11 Login credentials: Empty values.
        return res.redirect('/login?error=1');
    }
    // finalizar el post del login
});

/* GET Logout page. */
landingRouter.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if(err){
            logger.info(err);
        }
        res.redirect('/login');
    });
});

module.exports = landingRouter;