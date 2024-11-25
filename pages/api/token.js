export default async function handler(req, res) {
    try {
      const client_id = process.env.SPOTIFY_CLIENT_ID;
      const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  
      // Solicita el token de acceso
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ grant_type: 'client_credentials' }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }
  
      const data = await response.json();
  
      // Devuelve el token de acceso
      res.status(200).json({ access_token: data.access_token });
    } catch (error) {
      console.error('Error fetching Spotify access token:', error);
      res.status(500).json({ error: error.message });
    }
  }
  