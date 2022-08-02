import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice'; //yazdığımız dosyayı import ettik



export const store = configureStore({
    reducer: {},
    counter: counterReducer, //parametre olarak verdik
});