const FryCollection = require('../models/frySchema.js')

const createFry = async (req, res, next) => {
try{
    const newFry = await FryCollection.create(req.body)
    return res.status(201).send(newFry)
} catch(error){
    console.log('error creating new fry in db')
    console.log(error)
}
}

const getAllFries = async (req, res, next) => {
    try{
        const allFries = await FryCollection.find()
        return res.send(allFries)
    } catch (error) {
        console.log('error getting all the fries')
        console.log(error)
        return res.send(500)
    }
  }

const deleteOneFry = async (req, res, next) => {
    try{
        const { id } = req.params;
        const deletedFry = await FryCollection.findByIdAndDelete(id)
        console.log('Fry has been deleted: ' + id)
        return res.json(deletedFry)
    } catch (error) {
        console.log('error with deleteOne')
        console.log(error)
        return res.send(500)
    }
  }

const updateOneFry = async (req, res, next) => {
    try{
        const { id } = req.params;
        const   { title, author, comments, date, imgURL } = req.body
        const updatedFry = await FryCollection.findByIdAndUpdate(
            id, 
            { title, author, comments, date, imgURL },
            { new: true, runValidators: true }
        )
        console.log('Fry has been updated: ' + id)
        return res.json(updatedFry)
    } catch (error) {
        console.log('error with upDateOneFry')
        console.log(error)
        return res.send(500)
    }
  }

module.exports = { getAllFries, createFry, deleteOneFry, updateOneFry }

