import { configureStore } from "@reduxjs/toolkit";
import extensionsReducer from './extensions'

const store = configureStore({
    reducer: {
        extensions: extensionsReducer
    }
})

export default store