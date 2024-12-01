"use client"
import React, { useEffect, useState } from 'react';
import ArtistisCard from '../components/ArtistisCard';

const Artists = () => {
    // Estado para controlar cuántos artistas mostrar inicialmente
    const [visibleArtists, setVisibleArtists] = useState(8);

    const playlistId = '4eWBwGl0c5wtp6k5Krp6My'
    const [artists, setArtists] = useState([]);

    const fetchArtists = async () => {
        const response = await fetch(`/api/artists?playlistId=${playlistId}`);
        const data = await response.json();
        setArtists(data.artists || []);
    }

    useEffect(() => {
        fetchArtists();
    }, []);


    const handleShowMore = () => {
        setVisibleArtists(prev => prev + 4)
    };

    return (
        <section className="bg-section-tertiary py-32">
            <div className="container mx-auto">
                <div className="w-full flex flex-col gap-10">
                    <h1 className="text-3xl text-stone-300 font-bold pb-10 drop-shadow-lg">
                        Artists
                    </h1>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6">
                        {artists.slice(0, visibleArtists).map((artist, index) => (
                            <ArtistisCard
                                key={index}
                                name={artist.name}
                                image={artist.image}
                            />
                        ))}
                    </div>
                    {visibleArtists < artists.length && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleShowMore}
                                className="px-4 py-2 border shadow-lg hover:shadow-fuchsia-800 uppercase border-fuchsia-600 text-white text-lg rounded-md hover:bg-fuchsia-600 transition ease-in-out duration-300 "
                            >
                                Show more
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Artists;
