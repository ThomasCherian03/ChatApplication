// this is for the message text underwhich we put a User component. Ismain saare USESRS aate hai

import React from 'react'
import User from './User'

export default function Users() {
  return (
    <div>   
        <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>
            Messages
        </h1>

        <div className='flex-1 overflow-y-auto py-2' style={{maxHeight:"calc(84vh - 10vh)"}}>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>    
    
    </div>
  )
}
