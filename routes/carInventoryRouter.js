const express = require('express')
const inventory = require('../model/inventory.js')
const inventoryRouter = express.Router()
const Inventory = require('../model/inventory.js')

 inventoryRouter.get("/", (req, res, next) =>{
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

//GET BY GENRE
inventoryRouter.get("/search/genre", (req,res,next) => {
    Inventory.find({Year: req.query.Year}, (err, inventory) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

// inventoryRouter.get("/search/genre", (req,res,next) => {
//     Inventory.find({Make: req.query.Make} , (err, inventory) =>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(inventory)
//     })
// })

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})




module.exports = inventoryRouter