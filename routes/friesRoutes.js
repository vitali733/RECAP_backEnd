const express = require('express')
const { getAllFries, createFry, deleteOneFry, updateOneFry } = require('../controllers')
const friesRouter = express.Router()

friesRouter.route('/').get(getAllFries).post(createFry)
friesRouter.route('/:id').delete(deleteOneFry).put(updateOneFry)

module.exports = friesRouter

