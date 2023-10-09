import express, { json } from "express";
import products from "./data/Products.js";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
import productRouter from './Routes/productRoute.js'
import userRouter from './Routes/userRoute.js'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { connect } from "./config/db.js";
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));
dotenv.config()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())



// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');

//   next();
// });


// app.get('/api/products',(req,res)=>{
//   res.json(products)
// })

// app.get('/api/products/:id',(req,res)=>{
//  const product = products.find((p)=>p._id === req.params.id)
//  res.json(product)
// })


app.use("/api/v1",productRouter)
app.use("/api/v1",userRouter)

// const connect = () => {
//     mongoose
//       .connect(process.env.MONGO_URL)
//       .then(() => {
//         console.log("Connected to DB");
//       })
//       .catch((err) => {
//         throw err;
//       });
//   };

app.listen(5000,(req,res)=>{
    connect()
    console.log(`server is runing on 5000`)
})
