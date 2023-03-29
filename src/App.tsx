import React from "react"
import "./App.css"
import Button from "./components/Button"
import Container from "./components/Container"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import { Counter } from "./components/state/Counter"
import { LoggedIn } from "./components/state/LoggedIn"
import { User } from "./components/state/User"
import Status from "./components/Status"

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ]
  return (
    <div className="App">
      {/* Basic Props */}

      {/* <Greet name={"Vishwas"} messageCount={10} isLoggesIn={true} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}

      {/* Advanced Props */}
      {/* <Status status="loading..." />
      <Heading>Place Holder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio!</Heading>
      </Oscar> */}
      {/* <Greet name={"Vishwas"} isLoggesIn={true} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id) // handleClick={()=>{console.log("Button Cliked")}
        }}
      /> */}
      {/* <Container style={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      <Counter />
    </div>
  )
}

export default App
