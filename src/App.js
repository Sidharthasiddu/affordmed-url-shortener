import { Container, Typography } from '@mui/material';
import UrlShortener from './UrlShortener';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        AFFORDMED URL Shortener
      </Typography>
      <UrlShortener />
    </Container>
  );
}

export default App;
