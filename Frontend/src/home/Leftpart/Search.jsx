import React from 'react'
import { ImSearch } from "react-icons/im";

function Search() {
  return (
    <div className='h-[10vh]'>
        <div className='px-6 py-4'>
            <form action="">
                <div className='flex space-x-3'>
        
                    <label className="border-[1px] border-gray-700 rounded-lg p-3 flex items-center gap-2 w-[80%] bg-slate-900">
                        <input type="text" className="outline-none grow bg-slate-900" placeholder="Search" />
                    </label>

                    <button>
                        <ImSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 '/>
                    </button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Search