import express from 'express'
import { getAllProducts, getProduct } from '../Controller/productController.js'

const router = express.Router()

router.route('/getallproducts').get(getAllProducts)
router.route('/getproduct/:id').get(getProduct)

export default router