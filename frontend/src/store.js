import { configureStore } from '@reduxjs/toolkit'
// import { apiSlice } from './slices/apiSlice.js'
import  cartSliceReducer   from './slices/cartSlice'
import userSlice from './slices/userSlice.js'
// import authSliceReducer from './slices/authSlice'
export const store = configureStore({
  reducer: {
  //  [apiSlice.reducerPath]: apiSlice.reducer,
    cart:cartSliceReducer,
    user:userSlice

    // auth:authSliceReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
})

