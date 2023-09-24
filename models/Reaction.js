const { Schema, Types } = require('mongoose');
const { format_date } = require('../utils/helpers');

// define schema for a reaction 
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: format_date,
        }
    },
    {
        toJSON: {
            getters: true, 
        },
        id: false,
    }
);

module.exports = reactionSchema; 

