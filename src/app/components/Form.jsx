import React, { useState } from 'react';
import { useForm } from "@formspree/react";

const Form = () => {
    const [state, handleSubmit] = useForm("xpwzedka");
    const [formData, setFormData] = useState({ name: "", email: "", song: "", message: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.song.trim()) {
            newErrors.song = "Song URL is required";
        } else if (!/^https?:\/\/.+soundcloud\.com\/.+/.test(formData.song)) {
            newErrors.song = "Invalid SoundCloud URL";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            handleSubmit(e);
        }
        setErrors(validationErrors);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto py-10"
        >
            <div className="flex flex-col gap-6 w-full px-6 mx-auto">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl text-violet-600 font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-2xl text-violet-600 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="song" className="text-2xl text-violet-600 font-semibold">Song</label>
                    <input
                        type="url"
                        name="song"
                        value={formData.song}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                    {errors.song && <p className="text-red-500">{errors.song}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-2xl text-violet-600 font-semibold">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 text-xl border-violet-800 py-2 focus:outline-none focus:border-violet-400 text-gray-300 font-medium"
                    />
                </div>

                {state.succeeded ? (
                    <p className="text-center text-violet-600 font-semibold">Thanks for your submission!</p>
                ) : (
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="mx-auto bg-violet-600 py-2 px-3 w-full flex flex-row items-center my-2 rounded-md hover:bg-violet-900 transition-colors ease-in-out duration-500"
                    >
                        <p className="text-center w-full text-white font-semibold text-lg">Submit</p>
                    </button>
                )}
            </div>
        </form>
    );
};

export default Form;
