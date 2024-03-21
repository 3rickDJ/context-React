import React, {useState, useContext} from  "react"
const userContext = React.createContext()
const userToggleContext = React.createContext()
export function useUserContext() {
  return useContext(userContext)
}
export function useUserToggleContext() {
  return useContext(userToggleContext)
}
export function UserProvider(props) {
  const [user, setUser] = useState(null)
  const toggleUser = () => {
    if (user) {
      setUser(null)
    } else {
      setUser({
        name: "Pedro",
        email: " "
      })
    }
  }
  
  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={toggleUser}>
        {props.children}
      </userToggleContext.Provider>
    </userContext.Provider>
  )

}