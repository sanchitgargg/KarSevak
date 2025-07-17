import React from 'react'

const Header = () => {
  return (
    <header className='px-8 py-5'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-2xl text-[var(--main-theme-color)] font-[Pacifico] cursor-pointer'>KarSevak</p>
            </div>
            <div>
                <ul className='flex items-center gap-8 text-[#4B5563] cursor-pointer'>
                    <li className='hover:border-b-2 border-w-1 hover:border-[var(--main-theme-color)]'>Home</li>
                    <li className='hover:border-b-2 hover:border-[var(--main-theme-color)]'>Events</li>
                    <li className='hover:border-b-2 hover:border-[var(--main-theme-color)]'>About</li>
                    <li className='hover:border-b-2 hover:border-[var(--main-theme-color)]'>Contact</li>
                    <li className='hover:border-b-2 hover:border-[var(--main-theme-color)]'>Post Event</li>
                    <button className='bg-[var(--main-theme-color)] py-2 px-5 w-30 text-white rounded-lg cursor-pointer hover:scale-110 hover:duration-200'>Login</button>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header