import { useState } from "react"
type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogIn = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@test.com",
    })
  }
  //   const handleLogOut = () => {
  //     setUser(null)
  //   }
  return (
    <div>
      <button onClick={handleLogIn}>LogIn</button>&nbsp;
      {/* <button onClick={handleLogOut}>Logout</button> */}
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  )
}
