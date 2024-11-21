"use client"
import React, { useEffect } from 'react';
import AOS from 'aos'; // Importa AOS
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import Reproductor from '../components/Reproductor';

const Listen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <section  className="bg-section-secondary py-32 w-full">
      <div data-aos="fade-up" className="container mx-auto">
        <div  className="w-full h-96 flex flex-row justify-center items-center gap-12">
          <h2 className="w-1/2 mx-auto text-5xl text-stone-200 font-bold drop-shadow-lg leading-tight">
            Relaxing sounds that accompany your days
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
