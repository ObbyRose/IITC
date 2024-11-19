import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//MUI Imports
import { Avatar } from '@mui/material';

const DUMMY_USERS = [
  {id:12455 ,fullName: "Yossef Sabag", url: ""},
  {id:45857 ,fullName: "Elchanan Chen", url: ""},
  {id:444848 ,fullName: "Eden Shabi", url: ""}
]

const getInitial = (fullName) => {
  const nameArray = fullName.split(" ")
  let initials = ""
  nameArray.forEach((name) => {
    initials+= name[0]
  });

  console.log(nameArray);
  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div>
          {DUMMY_USERS.map((user) => {
            getInitial(user.fullName)
            return <div key={user.id}>
              <Avatar src={user.url}/>
              <p>{user.fullName}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
