import React, { useContext, useState } from "react";
import UserContext from "./User.context";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState({username : null,password : null})
    return(
        <UserContext.Provider value={{user , setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default  UserContextProvider;
export const useUserContext = () => useContext(UserContext)