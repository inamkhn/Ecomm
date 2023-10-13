import {PRODUCTS_URL} from '../Constants'
import { apiSlice } from './apiSlice'


export const productApiSlice = apiSlice.injectEndpoints({
   endpoints:(builder)=>({
    getProducts: builder.query({
        query: () => ({
          url:"http://localhost:5000/api/v1/getallproducts"
        }),
        keepUnusedDataFor: 5
      })
    })
})

export const {useGetProductsQuery} = productApiSlice