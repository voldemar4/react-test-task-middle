import {combineSlices, configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineSlices()

export const store = configureStore({
    reducer: rootReducer
})