import { createSlice } from '@reduxjs/toolkit'
import update from 'immutability-helper';

const initialCircles = {
    a: { top: 20, left: 80, backgroundColor: '#2ecc71', title: 'Drag me around' },
    b: { top: 180, left: 20, backgroundColor: '#ba4a00', title: 'Drag me too' },
    c: { top: 300, left: 300, backgroundColor: '#9b59b6', title: 'Lululul' },
}

export const circlesSlice = createSlice({
    name: 'circles',
    initialState: {
        value: initialCircles
    },
    reducers: {
        addCircle: (state, action) => {
            // circles/addCircle: Adds a circle with parameters specified in action.payload.
            // If action dispatched is of type 'circles/addCircle', this reducer will be carried out
            // Use update to create a new copy of state.value quickly
            const payload = action.payload
            
            const id = payload.id
            const top = payload.top
            const left = payload.left
            const backgroundColor = payload.backgroundColor
            const title = payload.title
            
            const newCircle = {
                id: {
                    top, left, backgroundColor, title
                }
            }

            state.value = update(state.value, { $merge: newCircle })
        },
        moveCircle: (state, action) => {
            // circles/moveCircle: Modifies the coordinates (top, left) with the ones specified in action.payload, along with id
            // If action dispatched is of type 'circles/moveCircle', this reducer will be carried out
            const payload = action.payload

            const id = payload.id
            const top = payload.top
            const left = payload.left

            state.value = update(state.value, {
                [id]: {
                    $merge: { top, left }
                }
            })
        },
    }
})

export const selectCircles = state => state.circles

export const { addCircle, moveCircle } = circlesSlice.actions

export default circlesSlice.reducer