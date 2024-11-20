import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-gradient-to-t from-transparent to-zinc-800/50 fixed top-0 w-full z-10'>
            <ul className='container mx-auto flex flex-row justify-between items-center py-8'>
                <a className='w-1/2' href="">
                    <h1 className='text-3xl font-bold w-1/2 text-stone-300 hover:text-white ease-in-out'>
                        Chillhop World
                    </h1>
                </a>
                <div className='flex flex-row items-center gap-4 justify-end w-1/2 '>
                    <a className='text-stone-100 hover:text-white hover:scale-105 transition-transform ease-in-out font-medium' href="">
                        <li>Home</li>
                    </a>
                    <a className='text-stone-100 hover:text-white hover:scale-105 transition-transform ease-in-out font-medium' href="">
                        <li>About</li>
                    </a>
                    <a className='text-stone-100 hover:text-white hover:scale-105 transition-transform ease-in-out font-medium' href="">
                        <li>Contact</li>
                    </a>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar