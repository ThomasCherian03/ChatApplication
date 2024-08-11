import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import userGetAllusers from "../../context/userGetAllusers";
import useConversation from '../../zustand/UseConversation';
import toast from 'react-hot-toast';

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = userGetAllusers();
  const { setSelectedConversation } = useConversation(); // Fixed the usage here

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
    } else {
      toast.error("User Not Found");
    }
  };

  return (
    <div className='h-[10vh]'>
      <div className='px-6 py-4'>
        <form onSubmit={handleSearch}> {/* Changed to handleSearch */}
          <div className='flex space-x-3'>
            <label className="border-[1px] border-gray-700 rounded-lg p-3 flex items-center gap-2 w-[80%] bg-slate-900">
              <input
                type="text"
                className="bg-transparent outline-none grow"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <button type="submit"> {/* Added type="submit" */}
              <ImSearch className='p-2 text-5xl duration-300 rounded-full hover:bg-gray-600 ' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
