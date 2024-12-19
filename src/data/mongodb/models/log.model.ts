import mongoose from "mongoose";

/**
 * level: LogSeverityLevel;
 * message: string;
 * origin: string;
// CreateAt?: Date;
 */

const logSchema = new mongoose.Schema({
 
    
    message: {
        type: String,
        required: true
    },
    origin: {
        type: String,
    },
    level: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

export const logModel = mongoose.model('Log', logSchema);