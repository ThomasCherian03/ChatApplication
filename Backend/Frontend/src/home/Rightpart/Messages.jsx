import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../context/useGetMessage.js';
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from '../../context/useGetSocketMessage.js';

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage()
  // console.log("MESSAGE EMPTY ARRAY: ",messages);
  // Filter out messages with undefined _id or id
  const validMessages = messages.filter(message => message?._id || message?.id);

  // Log the valid message IDs for debugging
  console.log('Valid Message IDs:', validMessages.map(message => message._id || message.id));

  const lastMsgRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current)
      {
        lastMsgRef.current.scrollIntoView({behavior: 'smooth'}); 
      }
    },100) // 100 milisecond
  },[validMessages])
  
  return (
    <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc(92vh - 8vh)" }}>
      {loading ? (
        <Loading />
      ) : (
        // Check if there are valid messages to display
        validMessages.length > 0 && validMessages.map((message) => (
          <div key={message._id || message.id} ref = {lastMsgRef}>
            <Message  message={message} />
          </div>
          
        ))
      )}
      {!loading && validMessages.length === 0 && (
        <div>
          <p className='text-center mt-[20%]'>Say! Hi to start the conversation</p>
        </div>
      )}
    </div>
  );
}

export default Messages;



                                      // OLD CODE WITH BUGS
// import React from 'react'
// import Message from './Message'
// import useGetMessage from '../../context/useGetMessage.js'
// import Loading from "../../components/Loading.jsx"

// function Messages() {

//   const {loading,messages} = useGetMessage();
//   // console.log(messages);
//   console.log('Message IDs:', messages.map(message => message._id));
  
//   return (
//     <div className="flex-1 overflow-y-auto" style={{minHeight:"calc(92vh - 8vh)"}}>
//       {loading?(<Loading/>):(messages.length>0 && messages.map((message)=>(
//         <Message key={message.id} message={message} />
//       )))}
//         {!loading && messages.length===0 && (
//           <div>
//             <p className='text-center mt-[20%]'>Say! Hi to start the conversation</p>
//           </div>
//         )}
//     </div>
//   )
// }

// export default Messages


                                                            // WORKING CODE


// import React from 'react';
// import Message from './Message';
// import useGetMessage from '../../context/useGetMessage.js';
// import Loading from "../../components/Loading.jsx";

// function Messages() {
//   const { loading, messages } = useGetMessage();

//   // Filter out invalid messages
//   const validMessages = messages.filter(message => message._id);

//   // Debug: Log the valid message IDs
//   console.log('Message IDs:', validMessages.map(message => message._id));

//   return (
//     <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc(92vh - 8vh)" }}>
//       {loading ? (
//         <Loading />
//       ) : (
//         validMessages.length > 0 ? (
//           validMessages.map((message) => (
//             <Message key={message._id} message={message} />
//           ))
//         ) : (
//           <div>
//             <p className='text-center mt-[20%]'>Say! Hi to start the conversation</p>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// export default Messages;

