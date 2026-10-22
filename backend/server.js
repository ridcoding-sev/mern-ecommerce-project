import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import contactRouter from './routes/ContactRoute.js'

import dns from "dns"

dns.setServers(["1.1.1.1","8.8.8.8"])
// App Config
const app = express()
const port = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())

// db connect
connectDB()
connectCloudinary()


// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)  
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/contact', contactRouter)


app.listen(port, () => {
    console.log('Server started on PORT : ' + port)
})