import React from 'react'

const ArtistisCard = ({image, name}) => {
  return (
    <div className='flex flex-col items-center  gap-3 justify-center'>
        <div className='rounded-full sm:w-40 w-32 h-32 sm:h-40 drop-shadow-lg overflow-hidden'>
            <img src={image} alt="" />
        </div>
        <h2 className='sm:text-xl text-md font-semibold text-stone-300 text-center drop-shadow-lg'>
            {name}
        </h2>
    </div>
  )
}

export default ArtistisCard