"use client"
import React, { useState } from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [state, handleSubmit] = useForm("xpwzedka");

  return (
    <section id="contact" className="bg-section-tertiary-2 py-32">
      <div className="container mx-auto">
        <h1 className="text-3xl text-stone-300 font-bold pb-10 drop-shadow-lg">Contact us</h1>
        <form
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4 w-1/2 mx-auto py-10"
        >
          <div className="flex flex-col gap-6 w-full px-6 mx-auto">
            <label htmlFor="name" className="text-2xl text-fuchsia-600 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="bg-transparent border-b-2 border-fuchsia-800 py-2 focus:outline-none focus:border-fuchsia-400 text-gray-300 font-medium"
            />

            <label htmlFor="email" className="text-2xl text-fuchsia-600 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="bg-transparent border-b-2 border-fuchsia-800 py-2 focus:outline-none focus:border-fuchsia-400 text-gray-300 font-medium"
            />

            <label htmlFor="file" className="text-2xl text-fuchsia-600">
              Song
            </label>
            <input
              id="file"
              type="file"
              accept=".mp3"
              className="bg-transparent text-gray-300"
              onChange={(e) => setSelectedFile(e.target.files[0]?.name || null)}
            />

            <label htmlFor="message" className="text-2xl text-fuchsia-600 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Message"
              className="bg-transparent border-b-2 border-fuchsia-800 py-2 focus:outline-none focus:border-fuchsia-400 text-gray-300 font-medium"
            />

            {state.succeeded ? (
              <p className="text-center text-fuchsia-600 font-semibold">
                Thanks for your submission!
              </p>
            ) : (
              <button
                type="submit"
                disabled={state.submitting}
                className="mx-auto bg-fuchsia-600 py-2 px-3 flex flex-row items-center gap-2 rounded-md text-white font-medium text-lg hover:bg-fuchsia-900 transition-colors ease-in-out duration-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
