import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";
import Loader from "../components/Loader";

const signin = ({ providers }) => {
   const { data: session } = useSession();
   const router = useRouter();
 
   useEffect(() => {
      if (session) {
         router.push("/");
      }
   }, [session]);

   if(session) return <Loader/>

   return (
      <>
         <Head>
            <title>Login - Spotify</title>
            <link rel="icon" href="/logo-green.png" />
         </Head>
         <div className="w-screen h-screen bg-black flex flex-col justify-center items-center space-y-10">
            <Image
               src="/logo-login.png"
               alt="logo"
               width={750}
               height={250}
               objectFit="contain"
               className="animate-pulse"
               priority
            />
            {Object.values(providers).map((provider) => (
               <div key={provider.name}>
                  <button
                     className="text-white py-4 px-6 rounded-full bg-[#1db954] font-bold text-xs md:text-base transition duration-300 ease-out border border-transparent uppercase tracking-wider hover:scale-105 hover:bg-[#0db146]"
                     onClick={() => signIn(provider.id)}
                  >
                     Sign In with {provider.name}
                  </button>
               </div>
            ))}
         </div>
      </>
   );
};

export default signin;

export async function getServerSideProps() {
   const providers = await getProviders();
   return {
      props: { providers },
   };
}
