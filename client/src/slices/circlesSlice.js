import { createSlice } from '@reduxjs/toolkit'
import update from 'immutability-helper';

const initialCircles = {
    1: { top: 20, left: 80, backgroundColor: '#2ecc71', title: 'Le' },
    2: { top: 180, left: 20, backgroundColor: '#ba4a00', title: 'Zel' },
    3: { top: 300, left: 300, backgroundColor: '#9b59b6', title: 'Sofea' },
}

export const circlesSlice = createSlice({
    name: 'circles',
    initialState: {
        value: initialCircles,
        counter: 4
    },
    reducers: {
        addCircle: (state, action) => {
            // circles/addCircle: Adds a circle with parameters specified in action.payload.
            // If action dispatched is of type 'circles/addCircle', this reducer will be carried out
            // Use update to create a new copy of state.value quickly
            const payload = action.payload
            
            const id = state.counter
            const top = payload.top
            const left = payload.left
            const backgroundColor = payload.backgroundColor
            const title = payload.title
            
            const newCircle = {
                [id]: {
                    top, left, backgroundColor, title
                }
            }

            state.value = update(state.value, { $merge: newCircle })
            state.counter += 1
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
        changeCircle: (state, action) => {
            // circles/changeCircle: Modifes the properties (title and backgroundColor) of circle with
            // id specified in action.payload
            const payload = action.payload

            const id = payload.id
            const title = payload.title
            const backgroundColor = payload.backgroundColor

            state.value = update(state.value, {
                [id]: {
                    $merge: { title, backgroundColor }
                }
            })
        },
        deleteCircle: (state, action) => {
            // action specifies the id of the circle deleted
            const payload = action.payload

            const id = payload.id

            state.value = update(state.value, { $unset: [id] })
        }
    }
})

export const selectCircles = state => state.circles

export const { addCircle, moveCircle, changeCircle, deleteCircle } = circlesSlice.actions

export default circlesSlice.reducer