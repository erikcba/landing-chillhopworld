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
        <h1 className='text-3xl text-stone-300 font-bold pb-10 drop-shadow-lg'>New Releases</h1>
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