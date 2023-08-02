const productModel = require('../models/products.model')

async function createProduct(req, res, next){
    try {
        const createdProduct = await productModel.create(req.body);
        res.status(201).json(createdProduct)
    } catch (err) {
        next(err);
    }
}

async function getProducts(req, res, next){
    try {
        const products = await productModel.find({});
        res.status(200).json(products)
    } catch (err) {
        next(err);
    }
}

async function getProductById(req, res, next){
    try {
        const product = await productModel.findById(req.params.productId);
        res.status(200).json(product)
    } catch (err) {
        next(err);
    }
}

async function updateProductById(req, res, next){
    try {

        const product = await productModel.findByIdAndUpdate(
            req.params.productId,
            req.body,
            {new : true}
        );
        if (product){
            res.status(200).json(product)
        } else {
            res.status(404).send()
        }

    } catch (err) {
        next(err);
    }
}

async function deleteProductById(req, res, next){
    try {

        const product = await productModel.findByIdAndDelete(req.params.productId);
        if (product){
            res.status(200).json(product)
        } else {
            res.status(404).send()
        }

    } catch (err) {
        next(err);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
}