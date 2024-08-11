import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../zustand/UseConversation.js'
import { useAuth } from '../../context/Authprovider.jsx'

function Right() {
  const {selectedConversation,setSelectedConversation}=useConversation();
  useEffect(()=>{
    return setSelectedConversation(null)
  },[setSelectedConversation]);
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300' >
    <div>
      {!selectedConversation?(<NoChatSelected/>):(<>
          
            
          <Chatuser />
          <div className="flex-1 overflow-y-auto" style={{maxHeight:"calc(92vh - 8vh)"}}>
              <Messages/>
          </div>
          
          <Typesend/>
      
      
      </>)}
      </div>
    </div>
  )
}

export default Right

const NoChatSelected = ()=>{
  const [authUser] = useAuth()
  return(
    <>
    <div className='flex items-center justify-center h-screen'>
      <h1 className='text-center'>Welcome <span className='text-xl font-semibold'>{authUser.user.fullname}</span>
      <br/>
      No Chat Selected, Please Start Conversation By Selecting Anyone In Your Contact</h1>
    </div>
    </>
  )
}