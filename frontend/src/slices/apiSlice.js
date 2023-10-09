import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '../Constants'


const base_query = fetchBaseQuery({baseUrl:BASE_URL})

// export const apiSlice = createApi({
//     base_query,
//     tagTypes:['getallproducts','Order','User'],
//     endpoints:(builder)=>({})
// })

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/api/v1/"}),
    endpoints:(builder)=>({
        getallproducts: builder.query({ query:()=>"getallproducts" })
    })
})


export const {useGetAllProductsQuery} = apiSlice