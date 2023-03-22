import React from "react"
import "./App.css"
import Greet from "./components/Greet"
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
      <Status status="loading..." />
    </div>
  )
}

export default App
