import React from 'react'
import { IoSend } from "react-icons/io5";

export default function Typesend() {
  return (
    <div className='flex space-x-2 h-[8vh]  bg-gray-800'>

        <div className='w-[70%] mx-4'>
            <input type="text" placeholder="Type here" className="w-full px-4 py-3 mt-1 mb-1 border border-gray-700 outline-none rounded-xl" />
        </div>

        <button>
            <IoSend className='text-3xl' />
        </button>
    </div>
  )
}
