import React from 'react'

function Chatuser() {
  return (
    <div className=' flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300'>
        <div className="mt-1 mb-1 avatar online">
            <div className="rounded-full w-14">
                <img src="https://media.licdn.com/dms/image/D5612AQFlR6CXtEk3og/article-inline_image-shrink_1000_1488/0/1709355454835?e=1725494400&v=beta&t=j41TQYSrOVhQHkBAUjU1Z-KztfNa3469LMY9QgrOppY" />
            </div>
        </div>

        <div>
            <h1 className='text-xl'>Thomas</h1>
            <span className='text-sm text-slate-400'>Offline</span>
        </div>
    </div>
  )
}

export default Chatuser