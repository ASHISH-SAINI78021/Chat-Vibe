 import { createContext, useContext, useEffect, useState } from "react";


 const chatContext = createContext();
 const chat = ({children})=> {
    const [user , setuser] = useState();

    useEffect(()=> {
        const userInfo = JSON.parse(localStorage.getItem("auth"));
        setuser(userInfo);

    } , []);
    return (
        <chatContext.Provider
            value={{user , setuser}}
        >{children}</chatContext.Provider>
    )
 }

 export const chatState = ()=> {
    return useContext(chatContext); 
 }

 export default chat;