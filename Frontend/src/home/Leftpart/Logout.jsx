import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
  return (
    <div className='h-[10vh]'>
        <div>
            <BiLogOutCircle className='p-2 mt-2 ml-2 text-5xl text-white duration-300 rounded-full cursor-pointer hover:bg-slate-700' />
        </div>
    </div>
  )
}

export default Logout