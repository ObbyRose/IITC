import { useSelector } from "react-redux"

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart);

    const handleRemoveItem = () => {}

    return(
        <div>
            <h2>My cart</h2>
            <p>Total Items: {cart.totalQuantity}</p>
            <p>Total Price: {cart.totalPrice}</p>
            <ul>
                {cart.items.map ((item) =>{
                    return (
                        <li key={item.id} style={{margin: "10px 0"}}>
                            <span>
                                {item.name} - {item.price}$ x {item.quantity} = ${item.totalPrice}
                            </span>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
                        </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Cart