"use client"
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Skeleton from '../components/Skeleton'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Albums = () => {
    const [albums, setAlbums] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [latestAlbum, setLatestAlbum] = useState()


    useEffect(() => {
        fetchArtistAlbums()
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    const fetchArtistAlbums = async () => {
        const artistId = "6FRp4QaPuNXElp7RzYVNc8"
        try {
            const response = await fetch(`/api/allAlbums?artistId=${artistId}`)
            if (!response.ok) throw new Error("Failed to fetch artist albums")

            const data = await response.json()
            setAlbums(data.albums)
            setLatestAlbum(data.latestAlbum)
            setisLoading(false)
            console.log(data.latestAlbum)
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <NavBar />
            <div className='bg-albums relative h-screen  '>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-bgSecondary z-0'></div>
                <div className='container mx-auto pt-40 relative z-10 flex flex-col gap-10'>
                    <h1 className='text-4xl text-stone-100 font-medium'>Latest Release</h1>
                    {
                        latestAlbum ? (
                            latestAlbum.map((album, index) => (
                                <div key={index} data-aos="fade-up" className='flex flex-row items-center gap-5'>
                                    <div className='rounded-md overflow-hidden w-fit shadow-lg'>
                                        <Image src={album.images[0].url} alt={album.name} width={500} height={500} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-stone-300 text-sm'>Release on {album.release_date}</p>
                                        <p className='text-stone-100 text-4xl font-medium drop-shadow-md'> {album.name} </p>
                                        <p className='text-stone-200 text-xl'> {album.artists.map((artist) => artist.name).join(', ')}</p>
                                        <a href={album.external_urls.spotify} target='blank' rel='noreferrer' className='bg-fuchsia-600 p-3 shadow-lg rounded-md flex flex-row gap-2 items-center justify-center text-white font-medium text-lg hover:bg-fuchsia-900 transition-colors ease-in-out duration-500 text-center leading-none'>
                                            Listen Now!
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
                                        </a>
                                    </div>
                                </div>
                            ))
                        )
                            :
                            <div>

                            </div>
                    }
                </div>

            </div>
            <section className='h-96 bg-bgSecondary'>

            </section>
        </>
    )
}

export default Albums
