import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen overflow-hidden flex items-center justify-center'>
        <img src="/hero.png" className='absolute inset-0 w-full h-full object-cover z-0 opacity-90' />
        <div className='relative z-10 flex flex-col items-center justify-center gap-4'>
        <p className='text-5xl text-white font-bold'>Join Hands - Serve Together</p>
        <p className='text-lg text-white'>Connect with your community and make a difference through meaningful volunteer opportunities</p>
        <div className='flex gap-4'>
          <button className='bg-[var(--main-theme-color)] text-white p-2 w-40 rounded-md'>Post an Event</button>
        <button className='border-1 border-[var(--main-theme-color)] text-white p-2 w-40 rounded-md'>Browse Events</button>
        </div>
        </div>
    </div>
  )
}

export default Hero