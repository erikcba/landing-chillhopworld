import React from 'react'

const NewReleasesCard = ({title, artist, image}) => {
  return (
    <div className='flex flex-col items-center '>
        <div className='bg-slate-400 rounded-lg w-64 h-64'>

        </div>
        <div>
            <h3 className='text-xl font-bold'>{title}</h3>
            <h3 className='text-xl'>{artist}</h3>
        </div>
    </div>
  )
}

export default NewReleasesCard