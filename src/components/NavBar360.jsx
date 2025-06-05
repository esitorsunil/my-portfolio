import { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const CircularNavbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200); // 0.2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
    
    >
      {/* Top-left ES */}
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
          transform: visible ? 'translateY(0)' : 'translateY(-30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 1.2s ease',
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

      {/* Top-center Back Arrow (no transform) */}
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
        <Link>
          <ArrowBackIosNewIcon fontSize="medium" sx={{ cursor: 'pointer', color: 'black' }} />
        </Link>
      </Box>

      {/* Top-right Say Hi */}
      <Box
        className="top-right-hi"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.2rem',
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
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Say hi...
        </Link>
      </Box>

      {/* Bottom-center nav links */}
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
        <Link href="#about" underline="none" color="inherit" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>About</Link>
        <Link href="#myskills" underline="none" color="inherit" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Skills</Link>
      </Box>

      {/* Left vertical Resume */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: 'calc(1rem + 2vw)',
          transform: visible
            ? 'rotate(-90deg) translateY(-50%)'
            : 'rotate(-90deg) translateY(-80%)',
          transformOrigin: 'left center',
          opacity: visible ? 1 : 0,
          transition: 'all 1.2s ease',
          zIndex: 1,
        }}
      >
        <Link href="/resume" underline="none" color="inherit" sx={{ fontSize: '1.5rem', color: 'black', '&:hover': { textDecoration: 'underline' } }}>
          Resume
        </Link>
      </Box>

      {/* Left vertical Projects */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 'calc(1rem + 2vw)',
          transform: visible
            ? 'rotate(-90deg) translateY(-50%)'
            : 'rotate(-90deg) translateY(-80%)',
          transformOrigin: 'left center',
          opacity: visible ? 1 : 0,
          transition: 'all 1.2s ease',
          zIndex: 1,
        }}
      >
        <Link href="/blog" underline="none" color="inherit" sx={{ fontSize: '1.5rem', color: 'black', '&:hover': { textDecoration: 'underline' } }}>
          Projects
        </Link>
      </Box>

      {/* Right vertical Features */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 'calc(1rem + 2vw)',
          transform: visible
            ? 'rotate(90deg) translateY(-50%)'
            : 'rotate(90deg) translateY(-80%)',
          transformOrigin: 'right center',
          opacity: visible ? 1 : 0,
          transition: 'all 1.2s ease',
          zIndex: 1,
        }}
      >
        <Link href="/resume" underline="none" color="inherit" sx={{ fontSize: '1.5rem', color: 'black', '&:hover': { textDecoration: 'underline' } }}>
          Features
        </Link>
      </Box>

      {/* Bottom-left social icons */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          opacity: visible ? 1 : 0,
          transition: 'all 1.2s ease',
          zIndex: 1000,
          '@media (max-width: 600px)': {
            bottom: '1rem',
            left: '1rem',
          },
        }}
      >
        {[
          {
            href: 'https://www.linkedin.com/in/esitor-sunil-a82610284/',
            icon: <LinkedInIcon />,
            hoverColor: '#0A66C2',
          },
          {
            href: 'https://github.com/esitorsunil',
            icon: <GitHubIcon />,
            hoverColor: '#333',
          },
          {
            href: 'https://wa.me/919080549778?text=hi%20sunil%2C%20i%20love%20your%20work',
            icon: <img src="https://img.icons8.com/pastel-glyph/128/whatsapp--v2.png" alt="WhatsApp" style={{ width: 24, height: 24 }} />,
            hoverColor: '#1DA1F2',
          },
          {
            href: 'https://facebook.com/hareeshprogrammer',
            icon: <FacebookIcon />,
            hoverColor: '#1877F2',
          },
        ].map(({ href, icon, hoverColor }, i) => (
          <Link
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: 'inline-block' }}
          >
            <IconButton
              disableRipple
              sx={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transform: 'scale(1.1)',
                  color: hoverColor,
                },
                '@media (max-width: 600px)': {
                  padding: '6px',
                },
              }}
            >
              {icon}
            </IconButton>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default CircularNavbar;
