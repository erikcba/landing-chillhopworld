import { useState, useEffect } from 'react';

const useArtistAlbums = (artistId) => {
    const [albums, setAlbums] = useState([]);
    const [latestAlbum, setLatestAlbum] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtistAlbums = async () => {
            try {
                const response = await fetch(`/api/allAlbums?artistId=${artistId}`);
                if (!response.ok) throw new Error("Failed to fetch artist albums");
                const data = await response.json();
                setAlbums(data.albums);
                setLatestAlbum(data.latestAlbum);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };

        if (artistId) {
            fetchArtistAlbums();
        }
    }, [artistId]);

    return { albums, latestAlbum, isLoading, error };
};

export default useArtistAlbums;
