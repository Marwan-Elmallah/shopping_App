const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product