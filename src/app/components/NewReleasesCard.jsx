import React from 'react'

const NewReleasesCard = ({title, artist, image}) => {
  return (
    <div className='flex flex-col items-center gap-3'>
        <div className='bg-slate-400 rounded-lg w-80 h-80 shadow-lg'>

        </div>
        <div className='w-full'>
            <h3 className='text-xl font-bold text-stone-300 text-left'>{title}</h3>
            <h3 className='text-xl text-stone-300 text-left'>{artist}</h3>
        </div>
    </div>
  )
}

export default NewReleasesCard