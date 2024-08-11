import React, { useState } from 'react'
import useConversation from '../zustand/UseConversation.js';
import axios from 'axios';


function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const {messages,setMessage,selectedConversation} = useConversation()

    const sendMessages = async (message)=>{
        setLoading(true);
        try {
            const res = await axios.post(`api/message/send/${selectedConversation._id}`,{message})
            setMessage([...messages,res.data]) // to keep the previous message
            setLoading(false)
        } 
        catch (error) {
            console.log("Error in useSendMessage while sending message",error)
            setLoading(false)
        }
    }

  return {loading,sendMessages}
}

export default useSendMessage