import { useParams } from "react-router-dom";

const Tech = () => {
    const { id } = useParams()
    return (
        <h2>This is Tech Section</h2>
    )
}

export default Tech