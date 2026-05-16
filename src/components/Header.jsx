import React, { useEffect, useState } from 'react'
import Nav from './Nav'

function Header() {

  // const backgrounds = [
  //   '/hero1.png',
  //   '/hero2.png'
  // ]

  // const [currentBg, setCurrentBg] = useState(0)

  // useEffect(() => {

  //   const interval = setInterval(() => {

  //     setCurrentBg((prev) =>
  //       prev === backgrounds.length - 1 ? 0 : prev + 1
  //     )

  //   }, 5000)

  //   return () => clearInterval(interval)

  // }, [])

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden ' style={{backgroundImage: `url(/hero1.png)`}} id='Header'>
     <Nav/> 
     <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl md:text-6xl lg:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div>
     </div>
     
    </div>
  )
}

export default Header
