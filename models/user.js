const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userSchema = new schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    birthYear: {
        type: 'date',
        require: true
    },
    email: {
        type: 'string',
        required: true
    }

});

module.exports = mongoose.model('User', userSchema)