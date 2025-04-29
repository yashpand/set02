const mongoose = require('mongoose');
//https://forms.gle/bH3BaCJSLZnFftLE9
const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    monthlyIncome: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);