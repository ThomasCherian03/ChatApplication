// this is for the avatar + the name + the email. Ismain single User ban raha hai and users main multiple time call ho raha hai

import React from 'react'

export default function User() {
  return (
    <div>
        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
            <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://media.licdn.com/dms/image/D5612AQFlR6CXtEk3og/article-inline_image-shrink_1000_1488/0/1709355454835?e=1725494400&v=beta&t=j41TQYSrOVhQHkBAUjU1Z-KztfNa3469LMY9QgrOppY" />
            </div>
            </div>

            <div>
                <h1 className='font-semibold text-md'>Thomas</h1>
                <span className='text-gray-500'>thomas.cherian1523@gmail.com</span>
            </div>
        </div>
    </div>
  )
}
