import React from 'react'

const NewReleasesCard = ({title, artist, image}) => {
  return (
    <div className='flex flex-col items-center gap-3 lg:mx-4 group hover:cursor-pointer'>
        <div className='bg-slate-400 rounded-lg overflow-hidden w-full lg:h-80 shadow-lg'>
          <img className='w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110' src={image} alt="" />
        </div>
        <div className='w-full'>
            <h3 className='text-xl font-bold text-stone-300 text-left'>{title}</h3>
            <h3 className='text-xl text-stone-300 text-left'>{artist}</h3>
        </div>
    </div>
  )
}

export default NewReleasesCard