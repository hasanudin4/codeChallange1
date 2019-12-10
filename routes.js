const express = require('express');
const router = express.Router();
// const articlesController = require('./controllers/articlesController.js');
const usersController = require('./controllers/usersController.js');
const productsController = require('./controllers/productsController.js');

//crud  User
router.post('/users', usersController.create)
router.get('/users', usersController.index)
router.put('/users/:_id', usersController.update)
router.delete('/users/:_id', usersController.delete)

//crud  Product
router.post('/products', productsController.create)
router.get('/products', productsController.index)
router.put('/products/:_id', productsController.update)
router.delete('/products/:_id', productsController.delete)

module.exports = router