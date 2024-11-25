export default async function handler(req, res) {
  const { artistId } = req.query;

  if (!artistId) {
    return res.status(400).json({ error: 'Artist ID is required' });
  }

  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

    if (!client_id || !client_secret) {
      return res.status(500).json({ error: 'Missing Spotify client credentials' });
    }

    // Obtener el token de acceso de Spotify
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      throw new Error(errorData.error_description || 'Failed to fetch access token');
    }

    const { access_token } = await tokenResponse.json();

    // Solicitar los álbumes del artista
    const albumsResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!albumsResponse.ok) {
      const errorData = await albumsResponse.json();
      throw new Error(errorData.error.message || 'Failed to fetch artist albums');
    }

    const albumsData = await albumsResponse.json();

    // Ordenar por fecha de lanzamiento y seleccionar los 8 más recientes
    const sortedAlbums = albumsData.items
      .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      .slice(0, 8);

    // Formatear los datos relevantes
    const formattedAlbums = sortedAlbums.map((album) => ({
      name: album.name,
      release_date: album.release_date,
      image: album.images[0]?.url || '',
      artists: album.artists.map((artist) => artist.name).join(", "),
      total_tracks: album.total_tracks,
      type: album.album_type,
      url: album.external_urls.spotify,
    }));

    res.status(200).json({ albums: formattedAlbums });
  } catch (error) {
    console.error('Error fetching artist albums:', error.message);
    res.status(500).json({ error: error.message });
  }
}
