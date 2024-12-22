import React from 'react'

const NewReleasesCard = ({title, artist, image, id, link, type}) => {
  return (
    <a key={id} href={link} target='_blank' rel='noreferrer' className='flex flex-col items-center gap-3 lg:mx-4 group hover:cursor-pointer sm:mx-0 mx-2'>
        <div className='relative rounded-lg overflow-hidden w-full lg:h-80 shadow-lg'>
          <img className='w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110' src={image} alt="" />
          <div className='absolute top-3 px-4 py-1.5 right-3 leading-none rounded-full text-sm bg-fuchsia-800 text-stone-300 z-10'>
            <p>{type}</p>
          </div>
        </div>
        <div className='w-full'>
            <h3 className='text-xl font-bold text-stone-300 text-left'>{title}</h3>
            <h3 className='text-xl font-light text-stone-300 text-left'>{artist}</h3>
        </div>
    </a>
  )
}

export default NewReleasesCard