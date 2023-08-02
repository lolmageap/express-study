const productModel = require('../models/products.model')

async function createProduct(req, res, next){
    try {
        const createdProduct = await productModel.create(req.body);
        res.status(201).json(createdProduct)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createProduct
}