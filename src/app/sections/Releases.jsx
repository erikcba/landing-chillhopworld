"use client"
import NewReleasesCard from '../components/NewReleasesCard'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../globals.css"
import Slider from 'react-slick'

const Releases = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }



  return (
    <section className='bg-section-primary py-32'>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-between pb-14'>
          <h1 className='text-3xl text-stone-300 font-bold drop-shadow-lg'>New Releases</h1>
          <button className='border shadow-lg hover:shadow-fuchsia-800 border-fuchsia-500 uppercase text-white text-lg rounded-md hover:bg-fuchsia-500 hover:text-white transition-all ease-in-out duration-500 px-3 py-2 '>
            See all
          </button>
        </div>
        <div className='slider-container '>
          <Slider  {...settings}>
            <NewReleasesCard title={'Rainy forest'} artist={'Tosama Beats'} image='./portada2.jfif' />
            <NewReleasesCard title={'We will always be together'} artist={'Chillhop World'} image='./portada1.avif' />
            <NewReleasesCard title={'Rainy forest'} artist={'Tosama Beat'} image='./portada3.jpg' />
            <NewReleasesCard title={'We will always be together'} artist={'Chillhop World'} image='./portada4.jpg' />
          </Slider>

        </div>
      </div>
    </section>
  )
}

export default Releases