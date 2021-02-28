const router = require("express").Router()
const exampleController = require("../controllers/example.controller")

router.get('/', exampleController.index)

// module exports
module.exports = router