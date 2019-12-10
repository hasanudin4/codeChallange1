const express = require('express');
const app = express();
const port = 8000;
const router = require('./routes.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', 
{useNewUrlParser: true, useUnifiedTopology: true},
function(err) {
    if (err) {
        return console.log(err)
    }
    app.use(express.json());
    app.use('/api/v1', router)

    app.listen(port, function() {
        console.log(`listening on port ${port}`)
    })
})
