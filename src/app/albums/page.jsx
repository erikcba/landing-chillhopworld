"use client"
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Skeleton from '../components/Skeleton'
import AOS from 'aos'
import 'aos/dist/aos.css';
import AlbumsSection from './AlbumsSection'
import useArtistAlbums from '../../hooks/useAlbums'


const Albums = () => {

    const artistId = "6FRp4QaPuNXElp7RzYVNc8"
    const { latestAlbum, isLoading, error } = useArtistAlbums(artistId)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])


    return (
        <>
            <NavBar />
            <div className='bg-albums relative h-screen  '>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-bgSecondary z-0'></div>
                <div className='container mx-auto sm:pt-40 pt-20 px-10 relative z-10 flex flex-col gap-14'>
                    <h1 className='text-4xl text-stone-100 font-medium drop-shadow-lg '>Latest Release</h1>
                    {

                        isLoading ? (

                            <div className='mr-auto'>
                                <Skeleton />
                            </div>
                        ) : latestAlbum ? (
                            latestAlbum.map((album, index) => (
                                <div key={index} data-aos="fade-up" className='flex sm:flex-row flex-col  items-center justify-center gap-12'>
                                    <div className='sm:w-1/2 w-full flex'>
                                        <Image src={album.images[0].url} alt={album.name} priority className='shadow-lg rounded-md ml-auto' width={500} height={500} />
                                    </div>
                                    <div className='flex flex-col gap-1 sm:w-1/2 w-full'>
                                        <p className='text-stone-300 text-sm leading-none'>Release on {album.release_date}</p>
                                        <p className='text-stone-100 text-4xl leading-none font-medium drop-shadow-md'> {album.name} </p>
                                        <p className='text-stone-200 text-xl leading-none pb-6'> {album.artists.map((artist) => artist.name).join(', ')}</p>
                                        <a href={album.external_urls.spotify} target='blank' rel='noreferrer' className='bg-fuchsia-600 w-fit p-3 shadow-lg rounded-md flex flex-row gap-2 items-center justify-center text-white font-medium text-lg hover:bg-fuchsia-900 transition-colors ease-in-out duration-500 text-center leading-none'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
                                            Listen Now!
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No albums found.</p>
                        )
                            
                    }
                </div>

            </div>
            <section className=' bg-bgSecondary'>
                <AlbumsSection />
            </section>
        </>
    )
}

export default Albums
