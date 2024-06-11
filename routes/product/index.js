const router = require('express').Router()
const { ProductController } = require('../../controller')
const { uploadImage } = require('../../middleware/uploadImage')


router.get("/", ProductController.getProduct)
router.get("/:id", ProductController.getProduct)
router.post("/", uploadImage, ProductController.createProduct)
router.put("/:id", ProductController.updateProduct)
router.delete("/:id", ProductController.deleteProduct)

module.exports = router