import React from 'react'

const Hero = () => {
    return (
        <section className='relative bg-hero h-svh md:h-[70vh] bg-cover bg-center'>
            <div className='absolute inset-0 bg-zinc-900 bg-opacity-20 '></div>
            <div className='w-full container mx-auto flex flex-row items-center justify-center h-full '>
                <div className='flex flex-col items-center justify-center lg:w-full sm:w-1/2 sm:p-0 w-full px-10 '>
                    <div className='w-full flex flex-col items-center justify-center gap-4 z-10'>
                        <h1 className='md:text-5xl text-4xl font-bold text-stone-100 text-left w-full drop-shadow-lg'>
                            Presenting the best of lofi
                        </h1>
                        <p className='text-2xl text-left font-medium w-full text-stone-100 drop-shadow-lg'>
                            New melodies and talents that transform your day
                        </p>
                        <div className='w-full'>
                            <button className='bg-fuchsia-600 py-2 px-3 flex flex-row  items-center gap-2 rounded-md text-white font-medium text-lg hover:bg-fuchsia-900 transition-colors ease-in-out duration-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
                                Listen now!
                            </button>
                        </div>
                        <div className='block sm:hidden mt-10'>
                            <box-icon name='hand-right' type='solid' size='2em' animation='fade-down' color='#dedcdc' ></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
