import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";
import React from "react";

const Loader = () => {
   return (
      <div className="h-screen w-screen bg-black">
         <div className="flex flex-col items-center justify-center pt-40 space-y-7">
             <span className="relative w-[400px] h-[250px] lg:w-[600px] lg:h-[200px]">
                <Image src='/logo-login.png' alt="" layout="fill" objectFit="contain" className="animate-pulse" priority/>
             </span>
             <ThreeBounce size={25} color="#15883e" />
         </div>
      </div>
   );
};

export default Loader;
