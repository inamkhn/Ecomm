import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '../Constants'


// export const apiSlice = createApi({
//     baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/api/v1"}),
//     tagTypes:['Product','Order','User'],
//     endpoints:(builder)=>({ })
// })


// export const apiSlice = createApi({
//   reducerPath:"apiSlice",
//   baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/api/v1"}),
//   endpoints:(builder)=>({
//     getproducts:builder.query({query:()=>"/getallproducts"})
//    })

// })

// export const {useGetProductsQuery} = apiSlice