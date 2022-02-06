import Head from "next/head";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";
import { useSession } from "next-auth/react";
import Loader from '../components/Loader'

export default function Home() {
   const router = useRouter();
   const { status, data: session } = useSession({
      onUnauthenticated() {
         router.push("/signin");
      },
   });

   if (status === "loading") return <Loader />;

   return (
      <div className="">
         <Head>
            <title>Spotify Redesign - Dashboard</title>
            <meta name="description" content="Spotify Clone By Khoerul Rizal" />
            <link rel="icon" href="/logo-green.png" />
         </Head>

         <Dashboard />
      </div>
   );
}
