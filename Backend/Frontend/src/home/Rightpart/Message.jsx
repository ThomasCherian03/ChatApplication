import React from 'react'

function Message({message}) {

  const authUser = JSON.parse(localStorage.getItem("ChatApp"))
  // console.log(message.senderId);
  // console.log(authUser.user._id);
  const itsMe = message.senderId===authUser.user._id;
  const chatName = itsMe?"chat-end":"chat-start"
  const chatColor = itsMe?"bg-blue-500":""
  
  const createdAt = new Date(message.createdAt)
  const formattedTime = createdAt.toLocaleTimeString([],{
    hour: "2-digit",
    minute: "2-digit",
  })
  return (
    <div>
        <div className='p-4'>
          {/* took chat end from div classname chat-end */}
            <div className={`chat ${chatName}`}> 
                <div className={`chat-bubble text-white ${chatColor}`}>
                  {message.message}
                </div>
                <div className='text-gray-500 chat-footer'>
                  {formattedTime}
                </div>
            </div>

            {/* <div className="chat ">
              <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
            </div> */}
        </div>
        
    </div>
  )
}

export default Message;
