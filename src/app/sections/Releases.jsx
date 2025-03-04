"use client"
import NewReleasesCard from '../components/NewReleasesCard'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../globals.css"
import Slider from 'react-slick'
import { useEffect, useState } from 'react'
import Skeleton from '../components/Skeleton'
import Link from 'next/link'

const Releases = () => {

  const [albums, setAlbums] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(false)


  useEffect(() => {
    fetchArtistAlbums()
  }, [])

  const fetchArtistAlbums = async () => {
    const artistId = "6FRp4QaPuNXElp7RzYVNc8"
    setisLoading(true)
    try {
      const response = await fetch(`/api/latestsAlbums?artistId=${artistId}`)
      if (!response.ok) throw new Error("Failed to fetch artist albums")
      const data = await response.json()
      setAlbums(data.albums)
      setisLoading(false)
    } catch (err) {
      setError(err.message)
    }
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  }
  

  return (
    <section className='bg-section-primary py-20 sm:py-32'>
      <div className='container mx-auto px-6 sm:px-0'>
        <div className='flex flex-row items-center justify-between pb-14'>
          <h1 className='text-2xl sm:text-3xl  text-stone-300 font-bold drop-shadow-lg'>New Releases</h1>
          <Link href='/albums' className='border shadow-lg hover:shadow-fuchsia-800 border-fuchsia-500 uppercase text-white text-base sm:text-lg rounded-md hover:bg-fuchsia-500 hover:text-white transition-all ease-in-out duration-500 px-3 py-2 '>
            See all
          </Link>
        </div>
        {isLoading ? (
          <div className='flex flex-row gap-6 w-full'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className='slider-container'>
            <Slider {...settings}>
              {albums && albums.length > 0 ? (
                albums.map((album, index) => (
                  <NewReleasesCard
                    key={index}
                    link={album.url}
                    title={album.name}
                    artist={album.artists}
                    image={album.image}
                    type={album.type}
                  />
                ))
              ) : (
                <p>No se encontraron álbumes.</p>
              )}
            </Slider>
          </div>
        )}
      </div>

    </section>
  )
}

export default Releases