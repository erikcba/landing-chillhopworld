import React from 'react'
import useArtistAlbums from '../../hooks/useAlbums'
import Image from 'next/image'

const AlbumsSection = () => {

    const artistId = "6FRp4QaPuNXElp7RzYVNc8"
    const { albums, isLoading, error } = useArtistAlbums(artistId)

    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-4xl text-stone-100 font-medium drop-shadow-lg pb-14'>Releases</h1>
            <div className='grid grid-cols-4 gap-10'>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {
                    albums.map((album, index) => (
                        <a href={album.url} target='_blank' rel='noreferrer' key={index} className='w-fit flex flex-col items-start justify-start group hover:cursor-pointer ' >
                            <div className='rounded-md overflow-hidden w-fit shadow-lg'>
                                <Image className='transition-transform duration-300 ease-in-out group-hover:scale-110' src={album.image} alt={album.name} width={300} height={300} />
                            </div>
                            <div>
                                <h3 className='pt-4 text-lg text-stone-200 font-medium leading-none'>{album.name}</h3>
                                <p className='text-stone-300'>{album.artists} </p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default AlbumsSection
