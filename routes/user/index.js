const router = require('express').Router()
const { UserController } = require('../../controller')


router.get("/", UserController.getUser)
router.post("/", UserController.register)
router.post("/login", UserController.login)
router.delete("/:id", UserController.deleteUser)

module.exports = router
