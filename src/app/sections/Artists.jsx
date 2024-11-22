import React from 'react'
import ArtistisCard from '../components/ArtistisCard'

const Artists = () => {
    return (
        <section className='bg-section-tertiary py-32'>
            <div className='container mx-auto'>
                <div className='w-full flex flex-col gap-10'>
                    <h1 className='text-3xl text-stone-300 font-bold pb-10 drop-shadow-lg'>
                        Artists
                    </h1>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-6'>
                        <ArtistisCard name='Pitulio Beats' image='./portada2.jfif' />
                        <ArtistisCard name='Aloja Sounds' image='./portada1.avif' />
                        <ArtistisCard name='Sape Beats' image='./portada3.jpg' />
                        <ArtistisCard name='Oa manola' image='./portada4.jpg' />
                        <ArtistisCard name='Pitulio Beats' image='./portada2.jfif' />
                        <ArtistisCard name='Aloja Sounds' image='./portada1.avif' />
                        <ArtistisCard name='Sape Beats' image='./portada3.jpg' />
                        <ArtistisCard name='Oa manola' image='./portada4.jpg' />
                        <ArtistisCard name='Pitulio Beats' image='./portada2.jfif' />
                        <ArtistisCard name='Aloja Sounds' image='./portada1.avif' />
                        <ArtistisCard name='Sape Beats' image='./portada3.jpg' />
                        <ArtistisCard name='Oa manola' image='./portada4.jpg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Artists