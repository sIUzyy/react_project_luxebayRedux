//call the slice we created in cartSliceds.jsx.
//wrap this store in main.jsx

import { configureStore } from "@reduxjs/toolkit";
import userCart from './cartSlices'

export const store = configureStore({
    reducer: {
        userCart,
    }
})