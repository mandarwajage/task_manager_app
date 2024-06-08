import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
  user: localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    setCredentials : (state,actions)=> {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logout:(state, action) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    setOpenSidenar:(state,action) => {
      state.insSidebaropen = action.payload;
    }
  }
})