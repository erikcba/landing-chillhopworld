"use client"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Reproductor from '../components/Reproductor'

const Listen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <section id='listen' className="bg-section-secondary sm:py-32 py-20 w-full">
      <div data-aos="fade-up" className="container mx-auto">
        <div  className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
          <h2 className="lg:w-1/2 w-full mx-auto text-2xl sm:text-5xl text-stone-200 font-bold drop-shadow-lg leading-tight lg:px-0 px-10">
            Relaxing sounds <br /> that accompany your days
          </h2>
          <div className="lg:w-1/2 w-full lg:px-0 px-10">
            <Reproductor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listen;
