import express from 'express'
import {placeOrder,placeOrderBkash,placeOrderNogod,allOrders,userOrders,updateStatus,deleteOrder} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)
// Delete order - Admin only
orderRouter.post('/delete', adminAuth, deleteOrder);

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/bkash', authUser, placeOrderBkash)
orderRouter.post('/nogod', authUser, placeOrderNogod)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter 