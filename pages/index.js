import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify Redesign - Dashboard</title>
        <meta name="description" content="Spotify Clone By Khoerul Rizal" />
        <link rel="icon" href="/logo-green.png" />
      </Head>

      <Dashboard/>
    </div>
  )
}