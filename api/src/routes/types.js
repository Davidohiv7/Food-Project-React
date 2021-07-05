const express = require('express')
const typesRouter = express.Router();
const { Type } = require('../db.js')



typesRouter.get('/', async (req, res, next) => {
    try {
        const types = await Type.findAll()
        res.send(types)
    } catch (error) {
        next(error)
    }  
})


module.exports = typesRouter