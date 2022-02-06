import React from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const Poster = ({ track, chooseTrack }) => {
   return (
    <div className="relative w-[250x] h-[350px] rounded-[35px] overflow-hidden text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto">
         <img
            src={track?.albumUrl}
            alt="poster_img"
            className="w-full h-full object-cover absolute inset-0 rounded-[35px] opacity-80 group-hover:opacity-100"
         />
         <div className="absolute bottom-10 inset-x-0 flex items-center ml-4 space-x-3.5">
            <div className="h-11 w-11 bg-green-600 rounded-full flex items-center justify-center text-gray-100 group-hover:bg-[#1db954]">
               <BsFillPlayFill className="text-[24px]" />
            </div>
            <div className="flex flex-col">
               <p>{track.title}</p>
               <p>{track.artist}</p>
            </div>
         </div>
      </div>
   );
};

export default Poster;
