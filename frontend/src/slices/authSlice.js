// import { createSlice } from "@reduxjs/toolkit";

// const init = {
//     userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
// }

// const authSlice = createSlice({
//     name:'auth',
//     init,
//     reducers:{
//         setCredentials:(state,action)=>{
//             state.userInfo = action.payload
//             localStorage.setItem('userInfo',JSON.stringify(action.payload))
//         }
//     }
// })


// export const { setCredentials } = authSlice.actions
// export default authSlice.reducer