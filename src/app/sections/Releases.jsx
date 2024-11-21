import React from 'react'
import NewReleasesCard from '../components/NewReleasesCard'

const Releases = () => {
  return (
    <section className='bg-section-primary py-32'>
        <div className='container mx-auto'>
            <h1 className='text-3xl text-stone-300 font-bold pb-10 drop-shadow-lg'>New Releases</h1>
            <div className='flex flex-row w-full items-center justify-between gap-4 overflow-hidden sm:overflow-visible'>
                <NewReleasesCard title={'Rainy forest'} artist={'Tosama Beats'}/>
                <NewReleasesCard title={'We will always be together'} artist={'Chillhop World'}/>
                <NewReleasesCard title={'Rainy forest'} artist={'Tosama Beat'}/>
                <NewReleasesCard title={'We will always be together'} artist={'Chillhop World'}/>
            </div>
        </div>
    </section>
  )
}

export default Releases