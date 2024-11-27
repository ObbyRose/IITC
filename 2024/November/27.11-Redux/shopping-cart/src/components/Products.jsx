import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../store/slices/cartSlice.js"

const products = [
    {id: 1, name:'Laptop', price: 1000},
    {id: 2, name:'Phone', price: 500},
    {id: 3, name:'Headphones', price: 100}
]

const Products = () => {
    const dispatch = useDispatch()

    function handleAddItem(item) {
        const itemData = {
            ...item,
            quantity: 1,
            totalItemPrice: item.price
        }
        dispatch(addItem(itemData))
    }

    return(
        <div>
            <h2>Products list</h2>
            {products.map((prod) => {
                return (
                <div key={prod.id}>
                    <span>
                        {prod.name} - {prod.price}$
                    </span>
                    <button onClick={ () => handleAddItem(prod)}>Add to cart</button>
                </div>
                )
            })}
        </div>
    )
}

export default Products