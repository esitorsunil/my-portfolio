import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
      }}
    >
       <img
        src="https://www.meesho.com/assets/error_500.svg"
        alt="Error"
        style={{ maxWidth: '100%', width: '100px', marginBottom: '2rem' }}
      />
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button
      disableRipple
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
