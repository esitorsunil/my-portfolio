import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography, Link } from '@mui/material';

const CircularNavbar = () => {
  return (
    <div className="circular-nav">

      <Box
        className="top-left-logo"
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontSize: '1.2rem',
          cursor: 'default',
          color: '#333',
          mt: 2,
        }}
      >
        <Typography
          variant="body1"
          component="span"
          className="logo-text"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.9rem',
            fontFamily: "'Dancing Script', cursive",
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          ES
        </Typography>
      </Box>

      <Box
        className="top-center-back"
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          fontSize: '1.2rem',
          color: '#333',
          mt: 2,
          fontWeight: 'bold', 
        }}
      >
        <Link>
          <ArrowBackIosNewIcon fontSize="medium" sx={{ cursor: 'pointer', color: 'black' }} />
        </Link>
      </Box>

      <Box
        className="top-right-hi"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          fontSize: '1.2rem',
          color: '#333',
          mt: 2,
        }}
      >
        <Link
          href="mailto:sunil.esitor@gmail.com"
          underline="none"
          color="inherit"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'underline' } 
          }}
        >
          Say hi...
        </Link>
      </Box>


      <Box
        className="bottom-center-links"
        sx={{
          position: 'absolute',
          bottom: 30,            
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 30,              
          fontSize: '1.1rem',
          color: '#333',
        }}
      >
        <Link
          href="#about"
          underline="none"
          color="inherit"
          sx={{ 
            cursor: 'pointer', 
            fontWeight: 'bold', 
            '&:hover': { textDecoration: 'underline' } 
          }}
        >
          About
        </Link>
        <Link
          href="#myskills"
          underline="none"
          color="inherit"
        
          sx={{ 
            cursor: 'pointer', 
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'underline' } 
          }}
        >
          My Skills
        </Link>
      </Box>
      <Box
  className="left-center-feats"
  sx={{
    position: 'absolute',
    top: '50%',
    left: 'calc(1rem + 2vw)',
    transform: 'rotate(-90deg) translateY(-50%)',
    transformOrigin: 'left center',
    zIndex: 1,
  }}
>
  <Link
    href="/blog"
    underline="none"
    color="inherit"
    sx={{
      fontWeight: 'bold',
      fontSize: '1.2rem',
      
      color: 'black',
      '&:hover': { textDecoration: 'underline' },
    }}
  >
    Projects
  </Link>
</Box>
  <Box
  className="left-center-feats"
  sx={{
    position: 'absolute',
    top: '30%',
    left: 'calc(1rem + 2vw)',
    transform: 'rotate(-90deg) translateY(-50%)',
    transformOrigin: 'left center',
    zIndex: 1,
  }}
>
  <Link
    href="/blog"
    underline="none"
    color="inherit"
    sx={{
      fontWeight: 'bold',
      fontSize: '1.2rem',
      
      color: 'black',
      '&:hover': { textDecoration: 'underline' },
    }}
  >
    Resume
  </Link>
</Box>
<Box
  className="right-center-resume"
  sx={{
    position: 'absolute',
    top: '50%',
    right: 'calc(1rem + 2vw)', // mirror of left
    transform: 'rotate(90deg) translateY(-50%)', // flipped rotation
    transformOrigin: 'right center',
    zIndex: 1,
  }}
>
  <Link
    href="/resume"
    underline="none"
    color="inherit"
    sx={{
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: 'black',
      '&:hover': { textDecoration: 'underline' },
    }}
  >
    Features
  </Link>
</Box>
    </div>
  );
};

export default CircularNavbar;
