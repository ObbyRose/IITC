import { useEffect, useState } from "react"
import axios from "axios"

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const [apiData, setApiData]= useState(null)

    const fetchData = async () => {
        try {
            const {data} = axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(data);
            setApiData(data)
        } catch (error) {
            console.error
        }
    }
    useEffect = (() => {
        fetchData()
    }, []);

    return(<>
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
    </>
    )
}

export default Counter