"use client"
import React, { useState } from "react";

import Form from "../components/Form";

const Contact = () => {


  return (
    <section id="contact" className="bg-section-tertiary-2 py-20 sm:py-32">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center gap-6 sm:gap-10">
          <div className="lg:w-1/2 px-6 w-full mx-auto flex flex-col items-start justify-center">
            <h2 className="w-full mx-auto text-3xl md:text-5xl text-stone-200 font-bold drop-shadow-lg leading-tight">
              Are you an Artist?
            </h2>
            <p className="text-stone-200 font-medium text-xl">
              Send us your music!
            </p>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
