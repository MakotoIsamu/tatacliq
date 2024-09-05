const express = require('express')
const Product = require('../models/ProductModel')
const router = express.Router()

router.get('/' , async ( req , res )=>{
    try {
        const products = await(Product.find())
        res.json({products})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router