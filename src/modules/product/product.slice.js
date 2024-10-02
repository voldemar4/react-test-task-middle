import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {rootReducer} from '../../app/store';
import * as api from '../../shared/api'

export const fetchProduct = createAsyncThunk(
    'fetchProduct',
    async (id) => {
        const [product, sizes] = await Promise.all([
            api.getProduct(Number(id)),
            api.getSizes()
        ])

        return {
            product,
            sizes
        }
    }
)

export const productSlice = createSlice({
    name: "product",
    initialState: {
        data: undefined,

        colors: [],
        colorIdx: 0,

        sizes: [],
        availableSizes: [],
        sizeIdx: undefined
    },
    selectors: {
        id: (state) => state.data.id,
        name: (state) => state.data.name,
        price: (state) => state.colors[state.colorIdx].price,
        activeColor: (state) => state.colors[state.colorIdx],
        activeColorName: (state) => state.colors[state.colorIdx].name,
        activeColorImages: (state) => state.colors[state.colorIdx].images,
        colorsNames: createSelector(
            [state => state.colors],
            colors => colors.map(color => color.name)
        ),
        sizes: createSelector(
            [state => state.sizes, state => state.availableSizes],
            (sizes, availableSizes) => availableSizes.map(size => ({
                ...size,
                disabled:  !sizes.includes(size.id)
            }))
        ),
        activeSize: (state) => state.sizes[state.sizeIdx],
        canAddToCart: (state) => state.sizeIdx !== undefined,
        availableSizes: (state) => state.availableSizes
    },
    reducers: {
        setColorIdx: (state, action) => {
            state.colorIdx = action.payload
            state.sizes = state.colors[action.payload].sizes
            state.sizeIdx = undefined
        },
        setSizeIdx: (state, action) => {
             if (action.payload === state.sizes[state.sizeIdx]) {
                 state.sizeIdx = undefined
                 return;
             }

             state.sizeIdx = state.sizes.findIndex(size => size === action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.data = action.payload.product

            state.colors = action.payload.product.colors
            state.colorIdx = 0

            state.sizes = action.payload.product.colors[0].sizes
            state.availableSizes = action.payload.sizes
            state.sizeIdx = undefined
        })
    }
}).injectInto(rootReducer)