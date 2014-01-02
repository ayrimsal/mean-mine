'use strict';

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    } 
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.user.role === 'admin'){ // admine her yol acik
            console.log(req.user.role);
            next();
        }
        else if (req.profile.id == req.user.id && req.profile.role == req.body.role){
            console.log('Profile: ', req.profile.id );
             next();
        }
        else {
        return res.send(401, 'User is not authorized');
        }
    }
};

/**
 * Article authorizations routing middleware
 */
exports.article = {
    hasAuthorization: function(req, res, next) {
        if (req.article.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};