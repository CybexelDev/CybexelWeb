import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'

function Home() {
  return (
<div className="min-h-screen bg-[#f5f6fb] font-sans text-slate-900">
      <div className="mx-auto  space-y-10 p-1 sm:p-5">
        <div className="relative">
          {/* <Navbar/> */}
          <Hero />
        </div>
        </div>
        </div>
 )
}

export default Home