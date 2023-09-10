const express = require("express")
const router = express.Router()
const product = require('../controller/product')

router.get('/',product.getallproduct)

module.exports = router