import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import bookSlice from './bookSlice/bookSlice'

export const store = configureStore({
  reducer: {
      user:userSlice,
      book:bookSlice,
  },
})