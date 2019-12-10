const mongoose = require('mongoose');
const schema = mongoose.Schema;

var productSchema = new schema({
    name: {
        type: 'string',
        required: true
    },
    price: {
        type: 'number',
        required: true
    },
    stock: {
        type: 'number',
        required: true
    },
    image: {
        type: 'string',
        required: true
    }
});



module.exports = mongoose.model('Product', productSchema)