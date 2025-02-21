import React from 'react'
import { useForm } from "@formspree/react";
import { useState } from "react";


const Form = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const [state, handleSubmit] = useForm("xpwzedka");
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto py-10"
        >
            <div className="flex flex-col gap-6 w-full px-6 mx-auto">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl text-violet-600 font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-2xl text-violet-600 font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="file" className="text-2xl text-violet-600 font-semibold">
                        Song
                    </label>
                    <input
                        id="file"
                        type="file"
                        accept=".mp3"
                        required
                        className="bg-transparent text-gray-300"
                        onChange={(e) => setSelectedFile(e.target.files[0]?.name || null)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-2xl text-violet-600 font-semibold">
                        Message
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                </div>

                {state.succeeded ? (
                    <p className="text-center text-violet-600 font-semibold">
                        Thanks for your submission!
                    </p>
                ) : (
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="mx-auto bg-violet-600 py-2 px-3 w-full  flex flex-row items-center my-2 rounded-md  hover:bg-violet-900 transition-colors ease-in-out duration-500"
                    >
                        <p className="text-center w-full text-white font-semibold text-lg">
                            Submit
                        </p>
                    </button>
                )}
            </div>
        </form>
    )
}

export default Form