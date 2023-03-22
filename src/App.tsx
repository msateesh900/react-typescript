import React from "react"
import "./App.css"
import Greet from "./components/Greet"
import Person from "./components/Person"

function App() {
  return (
    <div className="App">
      {/* <Greet name={"Vishwas"} messageCount={10} isLoggesIn={true} /> */}
      <Person />
    </div>
  )
}

export default App
