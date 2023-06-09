import { CircularProgress } from '@mui/material';
import { Container } from '@mui/system';

const Loader = () => (
  <Container sx={{ display: 'grid', placeContent: 'center', mt: 5 }}>
    <CircularProgress sx={{ color: 'green' }} />
  </Container>
);

export default Loader;
