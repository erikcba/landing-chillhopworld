import Link from 'next/link'
import React from 'react'

const Footer = () => {


  const igIcon = <box-icon name='instagram' type='logo' color='#e0e0e0' ></box-icon>
  const spotifyIcon = <box-icon type='logo' color='#e0e0e0' name='spotify'></box-icon>
  const youtubeIcon = <box-icon type='logo' color='#e0e0e0' name='youtube'></box-icon>
  const appleMusicIcon = <box-icon type='logo' color='#e0e0e0' name='apple'></box-icon>

  const icons = [igIcon, spotifyIcon, youtubeIcon, appleMusicIcon]

  return (
    <div className='bg-section-secondary py-12 w-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-2'>
          <Link href='/#' className='text-stone-200 text-3xl font-semibold'>Chillhop World</Link>
          <div className='flex flex-row items-center justify-start gap-2'>
            {
              icons.map((icon, index) => (
                <div key={index} className='hover:cursor-pointer hover:scale-110 transition-transform ease-in-out'>
                  {icon}
                </div>
              ))
            }
          </div>
          <p className='text-stone-200 text-md font-normal'>© 2024 Chillhop World</p>
        </div>
      </div>
    </div>
  )
}

export default Footer