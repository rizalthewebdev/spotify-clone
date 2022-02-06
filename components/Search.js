import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdSwitch } from "react-icons/io";

const Search = ({ search, setSearch}) => {
   const [searchFocus, setSearchFocus] = useState(false);

   return (
      <div
         className={`max-w-6xl rounded-full overflow-hidden border-2 ${
            searchFocus
               ? "border-green-800 bg-zinc-900/50"
               : "border-[#1a1a1a] bg-[#1a1a1a]"
         } px-5 py-2.5 flex justify-between items-center cursor-default`}
      >
         <div className="flex items-center space-x-3 w-full cursor-text">
            <RiSearch2Line
               className={`text-xl ${
                  searchFocus ? "text-green-500" : "text-white/70"
               } `}
            />
            <input
               className={`w-full form-input outline-none bg-transparent text-white/70 ${
                  searchFocus
                     ? "placeholder:text-gray-700"
                     : "placeholder:text-zinc-500"
               }`}
               onFocus={() => setSearchFocus(true)}
               onBlur={() => setSearchFocus(false)}
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               placeholder="Search..."
            />
         </div>
         <div className="flex items-center divide-x divide-zinc-600">
            <div className="hidden md:flex items-center pr-4 space-x-2">
               <button className='tag'>
                  Music
               </button>
               <button className='tag'>
                  Album
               </button>
               <button className='tag'>
                  Artist
               </button>
            </div>
            <div
               className={`flex items-center pl-3 text-white/70 cursor-pointer space-x-1`}
               onClick={(e) => e.stopPropagation()}
            >
               <IoMdSwitch fontSize={25} />
               <p className="text-[15px]">Filters</p>
            </div>
         </div>
      </div>
   );
};

export default Search;
