const { Product } = require("../../database")

class ProductController {
    static async getProduct(req, res) {
        const { id } = req.params
        let product
        if (id) {
            product = await Product.findById(id)
        } else {
            product = await Product.find({})
        }
        return res.status(200).json({
            error: false,
            message: 'Product found successfully',
            product
        })
    }

    static async createProduct(req, res) {
        const { name, price, image, description } = req.body
        const product = await Product.create({ name, price, image, description })
        return res.status(201).json({
            error: false,
            message: 'Product created successfully',
            product
        })
    }

    static async updateProduct(req, res) {
        const { id } = req.params
        const { name, price, image, description } = req.body
        const product = await Product.findByIdAndUpdate(id, { name, price, image, description })
        return res.status(200).json({
            error: false,
            message: 'Product updated successfully',
            product
        })
    }

    static async deleteProduct(req, res) {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json({
            error: false,
            message: 'Product deleted successfully',
            product
        })
    }


}

module.exports = ProductController