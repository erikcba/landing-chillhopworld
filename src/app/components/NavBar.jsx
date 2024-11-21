import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-gradient-to-t from-transparent to-zinc-900/80 fixed top-0 w-full z-20'>
            <ul className='container mx-auto flex flex-row justify-between items-center py-8'>
                <a className='sm:w-1/2 w-full' href="">
                    <h1 className='text-3xl font-bold sm:w-1/2 w-full text-center sm:text-start text-stone-300 hover:text-white ease-in-out'>
                        Chillhop World
                    </h1>
                </a>
                <div className='hidden flex-row items-center gap-4 justify-end w-1/2 sm:flex '>
                    <a className='text-stone-100 hover:text-white hover:scale-105 transition-transform ease-in-out font-medium' href="">
                        <li>Releases</li>
                    </a>
                    <a className='text-stone-100 hover:text-white hover:scale-105 transition-transform ease-in-out font-medium' href="">
                        <li>Listen</li>
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