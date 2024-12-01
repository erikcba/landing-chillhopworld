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
    <section id='listen' className="bg-section-secondary py-32 w-full">
      <div data-aos="fade-up" className="container mx-auto">
        <div  className="w-full flex flex-row justify-center items-center gap-6">
          <h2 className="w-1/2 mx-auto text-5xl text-stone-200 font-bold drop-shadow-lg leading-tight">
            Relaxing sounds <br /> that accompany your days
          </h2>
          <div className="w-1/2">
            <Reproductor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listen;
