// UrlShortener.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async () => {
    if (!url.startsWith('http')) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      // Using dummy API for now to test frontend
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setShortUrl(`https://short.fake/${data.id}`);
      setError('');
    } catch (err) {
      setError('Failed to shorten URL');
    }
  };

  return (
    <Box>
      <TextField
        label="Enter long URL"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleShorten}>Shorten URL</Button>

      {shortUrl && (
        <Typography sx={{ mt: 2 }} color="green">
          Shortened URL: {shortUrl}
        </Typography>
      )}

      {error && (
        <Typography sx={{ mt: 2 }} color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
}
