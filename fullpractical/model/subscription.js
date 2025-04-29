const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true,
        trim: true
    },
    endDate: {
        type: Date
    }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);