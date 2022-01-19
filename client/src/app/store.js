import { configureStore } from '@reduxjs/toolkit'
import circlesReducer from '../slices/circlesSlice'

export default configureStore({
    reducer: {
      circles: circlesReducer
    }
})