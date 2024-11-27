import { useSelector, useDispatch } from "react-redux"

import CartItem from "./CartItem.jsx";
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart);

    return(
        <div>
            <h2>My cart</h2>
            <p>Total Items: {cart.totalQuantity}</p>
            <p>Total Price: {cart.totalPrice}</p>
            <ul>
                {cart.items.map ((item) =>(
                    <CartItem key={item.id} item={item} />
                    ))}
            </ul>
        </div>
    )
}

export default Cart