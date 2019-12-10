const user = require('../models/user.js');


module.exports = {
    create: function (req, res) {
        User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthYear: req.body.birthYear,
                email: req.body.email

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
        User.find({})
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
        User.findByIdAndUpdate(req.params._id, req.body)
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
        User.findByIdAndDelete(req.params._id)
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