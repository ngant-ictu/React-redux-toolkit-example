import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface Product {
    id: number,
    name: string,
    price: number
}

export interface CartItem {
    product: Product,
    qty: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
        },
    },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions

//Create selector

const items = (state: RootState) => state.cart.items;

export const totalItemQtySelector = createSelector([items], (items) => {
    console.log("custom slector runned");

    return items.reduce(
        (total: number, curr: CartItem) => (total += curr.qty), 0
    );
});

export const totalQtyLimitSelector = createSelector([items, (items, limit:number) => limit], (items, limit) => {
    const total = items.reduce((total: number, curr: CartItem) => (total += curr.qty), 0);

    return total > limit;
})