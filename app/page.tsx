import Head from "next/head"
import SideMenu from "./components/SideMenu"
import Header from "./components/Header"
import Dashboard from "./dashboard/page"

export default function Home() {
  return (
   <>

   <main>
    <Header />
    <SideMenu />
    <Dashboard />
    </main>
    
    </>
    
  )
}
