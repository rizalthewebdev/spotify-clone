import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { RiHomeSmileFill } from 'react-icons/ri'
import { FaCompass, FaMicrophoneAlt } from 'react-icons/fa'
import { BsBarChartFill, BsClockFill, BsThreeDots } from 'react-icons/bs'

const Sidebar = () => {
    const router = useRouter()

   return (
      <section className="fixed -top-1 z-40 flex flex-col items-center w-[90px] h-screen p-4 bg-black space-y-7">
         <Image
            src="/logo-white.png"
            width={56}
            height={56}
            objectFit="contain"
            onClick={() => router.push('/')}
            className="cursor-pointer"
            priority
         />
         <div className="flex flex-col items-center space-y-5 -ml-[2px]">
            <RiHomeSmileFill className="sidebarIcon text-white/90 text-[28px]"/>
            <FaCompass className="sidebarIcon text-[24px]"/>
            <FaMicrophoneAlt className="sidebarIcon text-xl"/>
            <BsBarChartFill className="sidebarIcon"/>
            <BsClockFill className="sidebarIcon"/>
            <BsThreeDots className="sidebarIcon"/>
         </div>
      </section>
   );
};

export default Sidebar;
