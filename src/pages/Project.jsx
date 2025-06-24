
import { Box, Typography, IconButton, Grid, Chip, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';




const Project = () => {

  return (
    <Box sx={{ height: '100vh', width: '100vw', position: 'relative', overflowY: 'auto', color: '#fff' }}>
      
      {/* Background */}
      <Box sx={{
        position: 'fixed',
        top: 0, left: 0, height: '100%', width: '100%',
        backgroundImage: `url("https://hareesh.web.app/static/media/patrick-tomasso-Oaqk7qqNh_c-unsplash.8ca90014.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0
      }} />
      <Box sx={{
        position: 'fixed',
        top: 0, left: 0, height: '100%', width: '100%',
        backgroundColor: 'rgba(252, 246, 244, 0.8)',
        zIndex: 1
      }} />

      {/* Top bar */}
      <Box sx={{
        position: 'fixed',
        top: 0, left: 20, right: 0,
        height: 64, px: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
       zIndex: 10 // <- higher than background and content
      }}>
        <Typography variant="body1" component="span" sx={{
          fontWeight: 'bold', fontSize: '1.9rem',
          fontFamily: "'Dancing Script', cursive",
          textShadow: '1px 1px 3px rgba(0,0,0,0.2)', color: '#000',
        }}>
          ES
        </Typography>

        <IconButton component={RouterLink} to="/" sx={{ color: 'black' }}>
          <Box component="img"
            src="https://img.icons8.com/ios/50/circled-left-2.png"
            alt="Back"
            width={50}
            height={50}
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                borderRadius: '50%',
                transform: 'scale(1.05)',
              },
            }}
          />
        </IconButton>

     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 576 512"
  width="70"
  height="70"
  fill="currentColor"
  style={{ color: 'black' }}
>
</svg>
      
      </Box>

      <Box sx={{
        pt: 10, px: 4, maxWidth: 1200, margin: 'auto',
        position: 'relative', zIndex: 2, color: '#000', marginBottom: '100px',
      }}>

  <Box
    component="h1"
    sx={{
      position: 'fixed',
      top: '0.1rem',
      left: '6rem',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: 'calc(3rem + 3vw)',
      zIndex: 0,
     
      fontWeight: 'bold',
      fontFamily: "'Dancing Script', cursive",
     
    }}
  >
    FEATURES
  </Box>
        <SocialLinks visible={true} />

        {/* Card Grid */}


      </Box>
    </Box>
  );
};

export default Project;
