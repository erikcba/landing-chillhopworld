export default async function handler(req, res) {
    const { playlistId } = req.query;
  
    if (!playlistId) {
      return res.status(400).json({ error: 'Playlist ID is required' });
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
  
      // Solicitar las pistas de la playlist
      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
  
      if (!playlistResponse.ok) {
        const errorData = await playlistResponse.json();
        throw new Error(errorData.error.message || 'Failed to fetch playlist tracks');
      }
  
      const playlistData = await playlistResponse.json();
  
      // Extraer los IDs de artistas únicos
      const artistIds = new Set();
      playlistData.items.forEach((item) => {
        item.track?.artists.forEach((artist) => artistIds.add(artist.id));
      });
  
      // Solicitar información detallada de cada artista
      const artistsPromises = Array.from(artistIds).map(async (artistId) => {
        const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
  
        if (!artistResponse.ok) {
          return null; // Manejar errores de solicitudes fallidas
        }
  
        const artistData = await artistResponse.json();
        return {
          id: artistData.id,
          name: artistData.name,
          image: artistData.images[0]?.url || '', // Imagen del artista
          url: artistData.external_urls.spotify,
        };
      });
  
      // Esperar a que todas las solicitudes se completen
      const artists = (await Promise.all(artistsPromises)).filter(Boolean);
  
      res.status(200).json({ artists });
    } catch (error) {
      console.error('Error fetching playlist artists:', error.message);
      res.status(500).json({ error: error.message });
    }
  }
  