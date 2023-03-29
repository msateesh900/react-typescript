import { useState } from "react"
type LoggedInType = {
  isLoggedIn: boolean
}

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogIn = () => {
    setIsLoggedIn(true)
  }
  const handleLogOut = () => {
    // setIsLoggedIn(0)
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLogIn}>LogIn</button>&nbsp;
      <button onClick={handleLogOut}>Logout</button>
      <div>user is{isLoggedIn ? "Logged In" : "Logged out"}</div>
    </div>
  )
}
