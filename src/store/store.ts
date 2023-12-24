import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/personSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./features/cartSlice";

export const store = configureStore({
    reducer: {
        person:PersonSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch:()=> typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;