import React from 'react'
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export default function Fodservices() {
    const api_url='https://restaurant-project.onrender.com/api'
    const getFoods = async () => {
        const response = await axios.get(api_url+'/products')
        return response.data
      }
  return (
    
    <div>
      
    </div>
  )
}


