import React from 'react'
import NewReleasesCard from '../components/NewReleasesCard'

const Releases = () => {
  return (
    <section className='bg-section-secondary h-screen py-20'>
        <div className='container mx-auto'>
            <h1 className='text-3xl text-stone-700 font-bold pb-10'>New Releases</h1>
            <div className='flex flex-row w-full items-center justify-between overflow-hidden sm:overflow-visible'>
                <NewReleasesCard title={'Tema 1'} artist={'Autor 1'}/>
                <NewReleasesCard title={'Tema 2'} artist={'Autor 2'}/>
                <NewReleasesCard title={'Tema 3'} artist={'Autor 3'}/>
                <NewReleasesCard title={'Tema 4'} artist={'Autor 4'}/>
                <NewReleasesCard title={'Tema 4'} artist={'Autor 4'}/>
            </div>
        </div>
    </section>
  )
}

export default Releases