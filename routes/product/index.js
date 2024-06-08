const router = require('express').Router()
const { ProductController } = require('../../controller')
const { Product } = require('../../database')


router.get("/", ProductController.getProduct)
router.post("/", ProductController.createProduct)
router.put("/:id", ProductController.updateProduct)
router.delete("/:id", ProductController.deleteProduct)

module.exports = router