import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Fodservices from './Fodservices'
import { useEffect , useSelector  } from "react";
import {useState}  from "react";
const initialState = {
  value: 0,
  food : [],
  loading :  true ,
  error:""
}
const Food= useSelector((state) => state.product.products);
export const fetchFood = createAsyncThunk('category/fetchFood',
 async (thunkAPI)=>{
  try {
    return await Fodservices.getFoods()
  } catch (error) {
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
  }
 }
 
)
