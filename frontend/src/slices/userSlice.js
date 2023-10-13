import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addUserToLocalStorage,RemoveUserFromLocalStorage,GetUserFromLocalStorage } from '../localStorage'
import axios from 'axios'



const initialState = {
  isLoading: true,
  sidebarOpen : false,
  user:GetUserFromLocalStorage()
}

export const registerUser = createAsyncThunk(
    'user/registerUser',async(userCredentail,thunkAPI)=>{
      try {
        const res = await axios.post('http://localhost:5000/api/v1/create',userCredentail)
        console.log(res.data)
        return res.data       
      } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg)
      }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',async(userCredentail,thunkAPI)=>{
      try {
        const res = await axios.post('http://localhost:5000/api/v1/login',userCredentail)
        console.log(res.data)
        return res.data
        
      } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg)
      }
    }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
     logoutUser : (state)=>{
      state.user = null
      RemoveUserFromLocalStorage()
     }
  },
  extraReducers: {
     [registerUser.pending]:(state)=>{
       state.isLoading= true
     },
     [registerUser.fulfilled]:(state,{payload})=>{
      const {user} = payload
      state.isLoading= false
      state.user = user 
      addUserToLocalStorage(user)
      toast.success(`welcome ${user.name}`)
    },
    [registerUser.rejected]:(state,{payload})=>{
      state.isLoading= true
      toast.error(payload)
    },
    [loginUser.pending]:(state)=>{
      state.isLoading= true
    },
    [loginUser.fulfilled]:(state,{payload})=>{
     const {user} = payload
     state.isLoading= false
     state.user = user 
     addUserToLocalStorage(user)
     toast.success(`welcome back ${user.name}`)
   },
   [loginUser.rejected]:(state,{payload})=>{
     state.isLoading= true
     toast.error(payload)
   }
  },
})

// Action creators are generated for each case reducer function
export const { logoutUser  } = userSlice.actions
export default userSlice.reducer