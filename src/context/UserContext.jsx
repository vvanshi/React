import React,{createContext} from 'react'

export const dataContext=createContext()

const UserContext = ({children}) => {

    const username="Vanshika";

  return (
    <div>
    <dataContext.Provider value={username}>
    {children}
    </dataContext.Provider>

    </div>
  )
}

export default UserContext
