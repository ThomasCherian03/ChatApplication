// this is for the message text underwhich we put a User component. Ismain saare USESRS aate hai

import React from 'react'
import User from './User'
import userGetAllusers from '../../context/userGetAllusers';


export default function Users() {
  const [allUsers,loading]  = userGetAllusers();
  console.log(allUsers);
  return (
    <div>   
        <h1 className='px-8 py-2 font-semibold text-white rounded-md bg-slate-800'>
            Messages
        </h1>

        <div className='flex-1 py-2 overflow-y-auto' style={{maxHeight:"calc(84vh - 10vh)"}}>
           {allUsers.map((user,index)=>( //If you want to implicitly return the JSX, you should use parentheses () instead of curly braces {}: else use {} and do this --->  return <User key={index} user={user} />;
            <User key={index} user={user} />
           ))}
        </div>    
    
    </div>
  )
}
