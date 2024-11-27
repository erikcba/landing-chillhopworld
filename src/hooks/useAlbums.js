import { useState, useEffect } from 'react';

const useArtistAlbums = (artistId, itemsPerPage = 8) => {
    const [albums, setAlbums] = useState([]);
    const [latestAlbum, setLatestAlbum] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
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
    }, [artistId])

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedAlbums = albums.slice(startIndex, endIndex);

    const totalPages = Math.ceil(albums.length / itemsPerPage);

    return { albums, latestAlbum, isLoading, error, paginatedAlbums, totalPages, currentPage, setCurrentPage };
};

export default useArtistAlbums;
