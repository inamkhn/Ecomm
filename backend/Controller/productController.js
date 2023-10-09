// import  asyncHandler  from "../middleware/asyncHandler"
import Product from "../models/productModel.js"
import ErrorHandler from '../utils/errorHandler.js'

// export const createProduct = async(req,res,next)=>{
//     const {
//         name,price,user,image,brand,category,countInStock,numReviews,description
//            } = req.body
    
//     const product = await Product.create({
//         name,price,user,image,brand,category,countInStock,numReviews,description
//     })         
//     res.status(200).JSON(product)
// }

export const getAllProducts = async(req,res,next)=>{
      const products = await Product.find({})
      res.status(200).json(products)
}

export const getProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        return next(new ErrorHandler("Please enter all field", 400));
    }  
}

