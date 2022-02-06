import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useSession } from "next-auth/react";
import { playingTrackState } from '../atoms/playerAtom'
import { useRecoilState } from "recoil";
import Body from "./Body";
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
   clientId: process.env.SPOTIFY_CLIENT_ID,
});

const Dashboard = () => {
   const {data: session} = useSession()
   const {accessToken} = session

   const [playingTrack, setPlayingTrack] =useRecoilState(playingTrackState)
   const [showPlayer, setShowPlayer] = useState(false)

   useEffect(() => {
      setShowPlayer(true)
   }, []);

   const chooseTrack = (track) => {
      setPlayingTrack(track)
   }

   useEffect(() => {
      if(!accessToken) return;
      spotifyApi.setAccessToken(accessToken)
   }, [accessToken]);

   return (
      <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
         <Sidebar />
         <Body chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
         <RightBar chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
         {showPlayer && (
            <div className="fixed bottom-0 inset-x-0 z-50">
               <Player accessToken={accessToken} trackUri={playingTrack.uri}/>
            </div>
         )}
      </main>
   );
};

export default Dashboard;
