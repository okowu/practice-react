import { createSlice } from "@reduxjs/toolkit";
import DATA from '../data/data'

const initialState = { items: DATA }

const extensionsSlice = createSlice({
    name: 'extensions',
    initialState: initialState,
    reducers: {
        disableExtension: (state, action) => {

            const id = state.items.findIndex(item => item.id === action.payload)

            if (id === -1) {
                return
            }

            state.items[id] = {
                ...state.items[id],
                isActive: !state.items[id].isActive
            }
        },
        deleteExtension: (state, action) => {
            state.items = [
                ...state.items.filter(item => item.id !== action.payload)
            ]
        }
    }
})

export const extensionsActions = extensionsSlice.actions

export default extensionsSlice.reducer