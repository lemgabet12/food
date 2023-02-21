import { configureStore } from '@reduxjs/toolkit'
import Fodservices from '../Features/Fodservices'
export const store = configureStore({
  reducer: {
    Fodservices : Fodservices
  },
})