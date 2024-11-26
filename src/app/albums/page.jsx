"use client"
import { useEffect, useState } from 'react'


const Albums = () => {
    const [albums, setAlbums] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        fetchArtistAlbums()
    }, [])

    const fetchArtistAlbums = async () => {
        const artistId = "6FRp4QaPuNXElp7RzYVNc8"
        try {
            const response = await fetch(`/api/allAlbums?artistId=${artistId}`)
            if (!response.ok) throw new Error("Failed to fetch artist albums")

            const data = await response.json()
            setAlbums(data.albums)
            setisLoading(false)
            console.log(data)
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div>
            <h1>Albums</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            
        </div>
    )
}

export default Albums
