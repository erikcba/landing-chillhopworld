import React from 'react'

const Hero = () => {
    return (
        <section className='relative bg-hero h-[60vh] bg-cover bg-center'>
            <div className='absolute inset-0 bg-zinc-800 bg-opacity-20 '></div>
            <div className='w-full flex flex-row items-center justify-center h-full container'>
                <div className='flex flex-col items-center justify-center sm:w-1/3 sm:p-0 w-full px-12 '>
                    <div className='w-full flex flex-col items-center justify-center gap-4 z-10'>
                        <h1 className='text-4xl font-bold text-stone-100 text-left w-full'>
                            Presenting the best of lofi
                        </h1>
                        <p className='text-xl text-left font-medium w-full text-stone-100'>
                            New melodies and talents that transform your day
                        </p>
                        <div className='w-full'>
                            <button className='bg-cyan-300 py-2 px-3 rounded-md text-stone-800 font-medium text-lg hover:bg-cyan-900 hover:text-stone-100 transition-colors ease-in-out duration-500'>
                                Listen now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
