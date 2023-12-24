import { CartItem, totalItemQtySelector, totalQtyLimitSelector } from "../store/features/cartSlice";
import { useAppSelector } from "../store/store";

const Cart = () => {
    // const totalItemQty = useAppSelector((state) => {
    //     console.log("selector runned");
    //     return state.cart.items.reduce(
    //         (total:number, curr:CartItem) => (total += curr.qty),
    //         0, 
    //     );
    // });

    const totalItemQty = useAppSelector(totalItemQtySelector);
    const isExceeded = useAppSelector((state) => totalQtyLimitSelector(state, 5))

    return (
        <div className="border p-3 rounded-md bg-green-50 text-green-500 shadow">
            <div>
                <span>Cart Items Count: {totalItemQty}</span>
            </div>
            <div>
                <span>Is Exceed: </span> <span>{isExceeded? "Yes": "No"}</span>
            </div>
        </div>

        
    )
}

export default Cart;