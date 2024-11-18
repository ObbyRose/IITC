    import { useState } from 'react'
    import './App.css'

    //components Import
    // import Button from '../../components/Button.jsx'
    // import Modal from '../../components/Modal.jsx'
    // import Layout from '../../components/Layout.jsx'
    // import List from '../../components/List.jsx'
    // import Box from '../../components/Box.jsx'
    // import Card from '../../components/Card.jsx'
    // import Accordion from '../../components/Accordion.jsx'
    import PokeBall from '../../components/PokeBall.jsx'

    const users =[
    {id:1, name: "John Doe", email: "John.doe@gmail.com"},
    {id:2, name:"Jane Smith", email:"Jane.smith@gmail.com"},
    {id:3, name:"Alice Johnson", email:"Alice.johnson@gmail.com"}
    ]

    function App() {
    const [count, setCount] = useState(0)


    return (
        <div>
            {/* <h2>Custom Button with Icon</h2>
            <Button icon={<span>🔥</span>} onClick={() => setCount((prev) => prev + 1)}>
                Click Me
            </Button>
            <p>Button Click Count: {count}</p>

            <hr />

            <h2>Reusable List</h2>
            <List>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </List>
            <List type="ol">
                <li>Ordered Item 1</li>
                <li>Ordered Item 2</li>
            </List>

            <hr />

            <h2>Accordion</h2>
            <Accordion title="Click to Expand">
                <p>This is the content inside the accordion. You can toggle its visibility by clicking the title.</p>
            </Accordion>
            <Accordion title="Another Accordion">
                <p>This is another accordion with different content!</p>
            </Accordion>

            <hr />

            <h2>Styled Box</h2>
            <Box>
                <p>This is a styled box with custom background color and padding.</p>
            </Box>
            <Box>
                <p>This is another styled box with a different background color.</p>
            </Box>

            <hr/> */}
            <PokeBall/>
        </div>
    );
    }

    export default App
