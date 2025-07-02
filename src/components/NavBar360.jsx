import { useEffect, useState } from 'react';
import { Box, Typography, Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const CircularNavbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div>
      <Box
        className="top-left-logo"
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'default',
          color: '#333',
          mt: 1,
          
          '@media (max-width: 600px)': {
            top: 10,
            left: 10,
          },
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
    fontSize: '1.2rem',
    color: '#333',
    mt: 2,
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      top: 10,
    },
  }}
>
  <Link href="#" underline="none">
    <Box
      component="img"
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
  </Link>
</Box>

      <Box
  className="top-right-hi"
  sx={{
    position: 'absolute',
    top: 20,
    right: 30,
    display: 'flex',
    alignItems: 'center',
    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
    color: '#333',
    mt: 2,
    transform: visible ? 'translateY(0)' : 'translateY(-30px)',
    opacity: visible ? 1 : 0,
    transition: 'all 1.2s ease',
    '@media (max-width: 600px)': {
      top: 10,
      right: 10,
    },
  }}
>
  <Link
    href="mailto:sunil.esitor@gmail.com"
    underline="none"
    color="inherit"
    sx={{
      display: 'inline-flex',      
      alignItems: 'center',
      gap: 0.5,
      fontWeight: 'bold',
      transition: 'transform 0.3s ease',
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.2)', 
      },
    }}
  >
    Say hi..
  </Link>
</Box>


      <Box
  className="bottom-center-links"
  sx={{
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: visible
      ? 'translateX(-50%) translateY(0)'
      : 'translateX(-50%) translateY(40px)',
    opacity: visible ? 1 : 0,
    transition: 'all 1.2s ease',
    display: 'flex',
    gap: 30,
    fontSize: '1.5rem',
    color: '#333',
    '@media (max-width: 600px)': {
      gap: 16,
      fontSize: '1.2rem',
    },
  }}
>
  <Link
    to="/about"
    component={RouterLink}
    underline="none"
    color="inherit"
    sx={{
      color: 'black',
      textDecoration: 'none',
      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
      transition: 'transform 0.3s ease, color 0.3s ease', // smooth transition
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.2)',  // zoom on hover
      },
    }}
  >
    About
  </Link>

  <Link
    to="/skills"
    component={RouterLink}
    underline="none"
    color="inherit"
    sx={{
      color: 'black',
      textDecoration: 'none',
      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
      transition: 'transform 0.3s ease, color 0.3s ease', // smooth transition
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.2)',  // zoom on hover
      },
    }}
  >
    Skills
  </Link>
</Box>

     <Box
  sx={{
    position: 'absolute',
    top: '30%',
    left: 'calc(1.7rem + 2vw)',
    transform: visible
      ? 'rotate(-90deg) translateY(-50%)'
      : 'rotate(-90deg) translateY(-80%)',
    transformOrigin: 'left center',
    opacity: visible ? 1 : 0,
    transition: 'all 1.2s ease',
    zIndex: 1,
  }}
>
  <Link
    href="/Sunil.pdf"
    target="_blank"
    rel="noopener noreferrer"
    underline="none"
    color="inherit"
    
    sx={{
      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
      color: 'black',
      
      display: 'inline-block', 
      transition: 'transform 0.3s ease, color 0.3s ease',
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.2)',
      },
    }}
  >
    Resume
  </Link>
</Box>
   <Box
  sx={{
    position: 'absolute',
    top: '50%',
    left: 'calc(1.7rem + 2vw)',
    transform: visible
      ? 'rotate(-90deg) translateY(-50%)'
      : 'rotate(-90deg) translateY(-80%)',
    transformOrigin: 'left center',
    opacity: visible ? 1 : 0,
    transition: 'all 1.2s ease',
    zIndex: 1,
  }}
>
  <Box
    sx={{
      display: 'inline-block',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    }}
  >
    <Link
      to="/projects"
      component={RouterLink}
      underline="none"
      color="inherit"
      sx={{
        color: 'black',
        textDecoration: 'none',
        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }
      }}
    >
      Projects
    </Link>
  </Box>
</Box>

     <Box
  sx={{
    position: 'absolute',
    top: '50%',
    right: 'calc(1.7rem + 2vw)',
    transform: visible
      ? 'rotate(90deg) translateY(-50%)'
      : 'rotate(90deg) translateY(-80%)',
    transformOrigin: 'right center',
    opacity: visible ? 1 : 0,
    transition: 'all 1.2s ease',
    zIndex: 1,
  }}
>
  <Box
    sx={{
      display: 'inline-block',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    }}
  >
    <Link
      to="/features"
      component={RouterLink}
      underline="none"
      color="inherit"
      sx={{
        color: 'black',
        textDecoration: 'none',
        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }
      }}
    >
      Feat
    </Link>
  </Box>
</Box>

     <SocialLinks visible={true} />
    </div>
  );
};

export default CircularNavbar;
