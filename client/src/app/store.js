import { configureStore } from '@reduxjs/toolkit'
import circlesReducer from '../slices/circlesSlice'
import { loadState, saveState } from '../util/localStorage'
import throttle from 'lodash.throttle'

const preloadedState = loadState()
const store = configureStore({
    reducer: {
      circles: circlesReducer,
    },
    preloadedState: preloadedState
})

store.subscribe(throttle(() => {
  saveState({
    circles: store.getState().circles
  });
}, 1000));


export default store;