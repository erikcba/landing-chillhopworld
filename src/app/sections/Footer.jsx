import Link from 'next/link'
import React from 'react'

const Footer = () => {


  const igIcon = <a href="https://www.instagram.com/chillhopworld/" target='blank' >
    <box-icon name='instagram' type='logo' color='#e0e0e0' size='sm' ></box-icon>
  </a>
  const spotifyIcon = <a href="https://open.spotify.com/playlist/4eWBwGl0c5wtp6k5Krp6My?si=LYvlJIfzS9uIOyxtSC1RjA" target='blank'>
    <box-icon type='logo' color='#e0e0e0' size='sm' name='spotify'></box-icon>
  </a>

  const youtubeIcon = <a href="https://www.youtube.com/channel/UC5HqzNII2ZZzENhYqJf_-eQ" target='blank' >
    <box-icon type='logo' color='#e0e0e0' size='sm' name='youtube'></box-icon>
  </a>
  const appleMusicIcon = <a href="https://music.apple.com/us/artist/chillhop-world/1597131229?l=es-MX" target='blank' >
    <box-icon type='logo' color='#e0e0e0' size='sm' name='apple'></box-icon>
  </a>

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