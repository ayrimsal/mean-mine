'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * EgitimMerkezi Schema
 */
var EgitimMerkeziSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    ad: {
        type: String,
        default: '',
        trim: true
    },
    kisaltma: {
        type: String,
        default: '',
        trim: true
    },
    icerik: {
        type: String,
        default: '',
        trim: true
    },
    adres: {
        type: String,
        trim: true
    },
    telefon: {
        type: String,
        trim: true
    },
    fax: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }

});

/**
 * Validations
 */
EgitimMerkeziSchema.path('ad').validate(function(ad) {
    return ad.length;
}, 'Ad cannot be blank');

/**
 * Statics
 */
EgitimMerkeziSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('EgitimMerkezi', EgitimMerkeziSchema);
