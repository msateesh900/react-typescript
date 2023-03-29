import React from "react"
import "./App.css"
import Button from "./components/Button"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
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
      <Button
        handleClick={(event, id) => {
          {
            /* handleClick={()=>{console.log("Button Cliked")}*/
          }
          console.log("Button Clicked", event, id)
        }}
      />
    </div>
  )
}

export default App
