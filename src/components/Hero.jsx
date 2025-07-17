import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen overflow-hidden flex items-center justify-center'>
        <img src="/hero.jpg" className='absolute inset-0 w-full h-full object-cover rounded-3xl px-8 py-5 z-0' />
        <div className='relative z-10 flex flex-col items-center justify-center'>
        <p className='text-5xl text-white font-bold'>Join Hands - Serve Together</p>
        <p className='text-lg text-white'>Connect with your community and make a difference through meaningful volunteer opportunities</p>
        </div>
    </div>
  )
}

export default Hero