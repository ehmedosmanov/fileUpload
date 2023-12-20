import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { productRouter } from './routes/productRoutes.js'

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/api', router)
app.use('/product', productRouter)

const URL = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const PORT = process.env.PORT

mongoose.connect(URL).catch((err) => console.log(err))


app.listen(PORT, (req,res) => {
    console.log(`Server is running on PORT - ${PORT}`);
})