import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name:'cart',
    initialState:{ items: [], totalQuantity: 0, totalPrice: 0 },
    reducers:{
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)
            if (!existingItem) {
                state.items.push(action.payload)
            } else{
                existingItem.quantity += action.payload.quantity
                existingItem.totalItemPrice += action.payload.totalItemPrice
            }

            state.items.forEach((item) => {
                state.totalPrice += item.totalItemPrice
                state.totalQuantity += item.quantity
            })
        },
        removeItem: (state, action) => {
            //1. Find item Index
            const itemIndex = state.items.findIndex((item) => item.id === action.payload)
            //2. Filter Index
            const items = state.items[itemIndex]
            state.totalQuantity -= item.quantity
            state.totalPrice -= item.price
            state.items.splice(itemIndex, 1)
        }
    }
})

export const { addItem , removeItem } = cartSlice.actions
export default cartSlice.reducer