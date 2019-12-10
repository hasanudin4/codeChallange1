const product = require('../models/product.js')


module.exports = {
    create: function (req, res) {
        Product.create({
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                image: req.body.image
            })
            .then(data => {
                res.status(201).json({
                    success: true,
                    data: data
                })
            })
            .catch(err => {
                res.status(422).json({
                    success: false,
                    errors: err
                })
            })
    },
    index: function (req, res) {
        Product.find({})
            .then(data => {
                res.status(200).json({
                    success: true,
                    data: data
                })
            })
            .catch(err => {
                res.status(404).json({
                    success: false,
                    errors: err
                })
            })
    },
    update: function (req, res) {
        Product.findByIdAndUpdate(req.params._id, req.body)
            .then(data => {
                res.status(200).json({
                    success: true,
                    data: data
                })
            })
            .catch(err => {
                res.status(422).json({
                    success: false,
                    errors: err
                })
            })
    },
    delete: function (req, res) {
        Product.findByIdAndDelete(req.params._id)
            .then(data => {
                res.status(200).json({
                    success: true,
                    data: 'Successfully delete data!'
                })
            })
            .catch(err => {
                res.status(422).json({
                    success: false,
                    errors: 'Failed to delete data!'
                })
            })
    }
}