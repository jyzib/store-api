const express = require("express")
const router = express.Router()
const product = require('../controller/product')

router.get('/',product.getallproduct)
router.post('/',product.postproduct,)
router.get('/search',product.getone)
module.exports = router