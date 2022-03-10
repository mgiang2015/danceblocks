import { configureStore } from '@reduxjs/toolkit'
import circlesReducer from '../slices/circlesSlice'
import userReducer from '../slices/userSlice'

export default configureStore({
    reducer: {
      circles: circlesReducer,
      user: userReducer,
    }
})