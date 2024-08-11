import React from 'react';
import useConversation from '../../zustand/UseConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

function Chatuser() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  // Checking if the selected conversation is with the current user
  const isSelected = selectedConversation?._id; 

  // Function to get the online status of the user
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // Checking if the selected conversation user is online
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className={`flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 ${isSelected ? 'selected' : ''}`}>
      <div className={`mt-1 mb-1 avatar ${isOnline ? "online" : ""}`}>
        <div className="rounded-full w-14">
          <img src="https://media.licdn.com/dms/image/D5612AQFlR6CXtEk3og/article-inline_image-shrink_1000_1488/0/1709355454835?e=1725494400&v=beta&t=j41TQYSrOVhQHkBAUjU1Z-KztfNa3469LMY9QgrOppY" alt="User avatar" />
        </div>
      </div>

      <div>
        <h1 className='text-xl'>{selectedConversation?.fullname}</h1>
        <span className='text-sm text-slate-400'>{getOnlineUsersStatus(selectedConversation?._id)}</span>
      </div>
    </div>
  );
}

export default Chatuser;
