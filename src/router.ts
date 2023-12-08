import { Router } from 'express'
import { listCategories } from './app/useCases/categories/listCategory'

export const router = Router()

// list categories
router.get('/categories', listCategories)

// create category
router.post('/categories', (req,res) => {
  res.send('OK')
})

// list products
router.get('/products', (req,res) => {
  res.send('OK')
})

// create product
router.post('/products', (req,res) => {
  res.send('OK')
})

// get products by category
router.get('/categories/:categoryId/products', (req,res) => {
  res.send('OK')
})

// list orders
router.get('/orders', (req,res) => {
  res.send('OK')
})

// create order
router.post('/orders', (req,res) => {
  res.send('OK')
})

// change order status
router.put('/orders', (req,res) => {
  res.send('OK')
})

// delete/cancel order
router.delete('/orders', (req,res) => {
  res.send('OK')
})

