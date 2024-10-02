import {createSlice} from "@reduxjs/toolkit";
import {rootReducer} from "../../app/store";

const cartInitialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    selectors: {
        items: state => state.items,
        count: state => state.items.length
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.cartId !== action.payload)
        }
    },
    initialState: cartInitialState
}).injectInto(rootReducer)