import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categorySlice.js';
import productReducer from './productSlice.js';
import orderReducer, { localStorageMiddleware } from './orderSlice.js';
import modalReducer from './modalDeliverySlice.js'
import formReducer from './formSlice.js'


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
        modal: modalReducer,
        form: formReducer
    },

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(localStorageMiddleware)
    
});
