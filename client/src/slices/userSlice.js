import { createSlice } from '@reduxjs/toolkit'

// we only store token. Other information can be queried using this authorization token
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
    },
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token
        }
    }
})

export const selectUser = state => state.user

export const { setUser } = userSlice.actions

export default userSlice.reducer