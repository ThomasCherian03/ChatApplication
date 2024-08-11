import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./Authprovider"
import io from "socket.io-client"
const socketContext = createContext()

export const useSocketContext = ()=>{
    return useContext(socketContext)
}

export const SocketProvider = ({children}) =>{ // we are passing children so that other components can use it
    const [socket,setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [authUser] = useAuth()
    // console.log("abe yea auth user id hai "+ authUser._id);
    useEffect(()=>{
        // console.log("Auth User:", authUser);
        // console.log("Auth User ID:", authUser ? authUser.user._id: "Auth User is undefined");

        if(authUser){
            const socket = io.connect("https://chatapplication-9kxk.onrender.com",
            {
                query:
                {
                    userId: authUser.user._id // Ensure authUser._id is defined
                }
            })
            setSocket(socket)
            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            })
            return()=>socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);

    return (
        <socketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </socketContext.Provider>
    )
}