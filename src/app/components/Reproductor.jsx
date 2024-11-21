import React from 'react'

const Reproductor = () => {
    return (
        <div className='shadow-lg'>
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/4eWBwGl0c5wtp6k5Krp6My?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default Reproductor
