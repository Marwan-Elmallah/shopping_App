const router = require('express').Router()
const { UserController } = require('../../controller')


router.get("/", UserController.getUser)
router.get("/:id", UserController.getUser)
router.post("/", UserController.register)
router.post("/login", UserController.login)

module.exports = router
