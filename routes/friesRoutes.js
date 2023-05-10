const express = require('express')
const { getAllFries, createFry, deleteOneFry, updateOneFry } = require('../controllers')
const friesRouter = express.Router()

friesRouter.route('/fries').get(getAllFries)
friesRouter.route('/fries/:id').delete(deleteOneFry).put(updateOneFry)
friesRouter.route('/createfry').post(createFry)

module.exports = friesRouter

