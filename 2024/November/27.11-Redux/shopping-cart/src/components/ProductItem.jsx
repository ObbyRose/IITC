import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../store/slices/cartSlice"


const ProductItem = ({item}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    function handleAddItem(item) {
        const itemData = {
            ...item,
            quantity: quantity,
            totalItemPrice: item.price * quantity,
        }

        dispatch(addItem(itemData))
    }
    return (
        <div key={item.id}>
        <span>
            {item.name} - {item.price}$
        </span>
        <div>
            <button onClick={() => setQuantity((state) => state-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((state) => state+1)}>+</button>
            
        </div>
        <button onClick={ () => handleAddItem(item)}>Add to cart</button>
    </div>
    )
}

export default ProductItem
