import { createSlice } from '@reduxjs/toolkit'

//initialState will hold all of the value in our api such as id, itemName, itemPrice, itemDescription, etc...
const initialState = []

export const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        add: (state,action) => {
            state.push(action.payload)
        },

        remove: (state,action) => {
            return state.filter(item => item.id !== action.payload)
        }


    }
})
export const { add, remove } = cartSlice.actions
export default cartSlice.reducer