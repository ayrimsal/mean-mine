'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    EgitimMerkezi = mongoose.model('EgitimMerkezi'),
    _ = require('lodash');


/**
 * Find article by id
 */
exports.egitimMerkezi = function(req, res, next, id) {
    EgitimMerkezi.load(id, function(err, egitimMerkezi) {
        if (err) return next(err);
        if (!egitimMerkezi) return next(new Error('Failed to load egitimMerkezi ' + id));
        req.egitimMerkezi = egitimMerkezi;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var egitimMerkezi = new EgitimMerkezi(req.body);
    egitimMerkezi.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                egitimMerkezi: egitimMerkezi
            });
        } else {
            res.jsonp(egitimMerkezi);
        }
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {
    var egitimMerkezi = req.egitimMerkezi;

    egitimMerkezi = _.extend(egitimMerkezi, req.body);

    egitimMerkezi.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                egitimMerkezi: egitimMerkezi
            });
        } else {
            res.jsonp(egitimMerkezi);
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var egitimMerkezi = req.egitimMerkezi;

    egitimMerkezi.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                egitimMerkezi: egitimMerkezi
            });
        } else {
            res.jsonp(egitimMerkezi);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.egitimMerkezi);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    EgitimMerkezi.find().sort('-created').exec(function(err, egitimMerkezis) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(egitimMerkezis);
        }
    });
};