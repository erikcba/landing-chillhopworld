import React from 'react'
import useArtistAlbums from '../../hooks/useAlbums'
import Image from 'next/image'
import Skeleton from '../components/Skeleton'

const AlbumsSection = () => {

    const artistId = "6FRp4QaPuNXElp7RzYVNc8"
    const { albums, isLoading, error, paginatedAlbums, totalPages, currentPage, setCurrentPage } = useArtistAlbums(artistId)

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-4xl text-stone-100 font-medium drop-shadow-lg pb-14'>Releases</h1>
            {isLoading && <Skeleton />}
            {error && <p>Error: {error}</p>}

            {!isLoading && !error && (
                <>
                    <div data-aos="fade-up" className='grid grid-cols-4 gap-10'>
                        {paginatedAlbums.map((album, index) => (
                            <a
                                href={album.url}
                                target='_blank'
                                rel='noreferrer'
                                key={index}
                                className='w-fit flex flex-col items-start justify-start group hover:cursor-pointer'>
                                <div className='relative rounded-md overflow-hidden w-fit shadow-lg'>
                                    <Image
                                        className='transition-transform duration-300 ease-in-out group-hover:scale-110'
                                        src={album.image}
                                        alt={album.name}
                                        width={300}
                                        height={300}
                                    />
                                    <div className='absolute top-3 px-4 py-1.5 right-3 leading-none rounded-full text-sm bg-fuchsia-800 text-stone-300 z-10'>
                                        <p>{album.type}</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='pt-4 text-lg text-stone-200 font-medium leading-none'>{album.name}</h3>
                                    <p className='text-stone-300'>{album.artists}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Controles de Paginación */}
                    <div className='flex justify-center items-center mt-10'>
                        <button
                            className='px-4 py-2 mx-2 bg-fuchsia-700 text-white rounded-md hover:bg-fuchsia-500 disabled:bg-fuchsia-900'
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span className='text-stone-300'>Page {currentPage} of {totalPages}</span>
                        <button
                            className='px-4 py-2 mx-2 bg-fuchsia-700 text-white rounded-md hover:bg-fuchsia-500 disabled:bg-fuchsia-900'
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default AlbumsSection
