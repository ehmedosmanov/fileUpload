import express from 'express'
import { createProduct, getAllProducts, getProductById } from '../controllers/productController.js'
import { upload } from '../middleware/upload.js'

export const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.get('/:id', getProductById)
productRouter.post('/', upload.array('image', 12), createProduct)

