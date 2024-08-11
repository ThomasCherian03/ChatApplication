// this is for the avatar + the name + the email. Ismain single User ban raha hai and users main multiple time call ho raha hai

import React from 'react'
import useConversation from '../../zustand/UseConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx'

export default function User({user}) {
  const {selectedConversation, setSelectedConversation}  = useConversation()
  const isSelected = selectedConversation?._id===user._id
  const {socket, onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(user._id)
  return (
    
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-700":""}`} onClick={()=>setSelectedConversation(user)}>
      
        <div className='flex px-8 py-3 space-x-4 duration-300 cursor-pointer hover:bg-slate-700'>
            <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
                <img src="https://media.licdn.com/dms/image/D5612AQFlR6CXtEk3og/article-inline_image-shrink_1000_1488/0/1709355454835?e=1725494400&v=beta&t=j41TQYSrOVhQHkBAUjU1Z-KztfNa3469LMY9QgrOppY" />
            </div>
            </div>

            <div>
                <h1 className='font-semibold text-md'>{user.fullname}</h1>
                <span className='text-gray-500'>{user.email}</span>
            </div>
        </div>
    </div>
  )
}
