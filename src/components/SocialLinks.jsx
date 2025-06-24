import React from 'react';
import { Box, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { keyframes } from '@emotion/react';

const fadeInUpZoom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
  }
  50% {
    transform: translateY(0) scale(1.3);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const SocialLinks = ({ visible = true }) => {
  const icons = [
    {
      href: 'https://www.linkedin.com/in/esitor-sunil-a82610284/',
      icon: <LinkedInIcon />,
      hoverColor: '#333',
    },
    {
      href: 'https://github.com/esitorsunil',
      icon: <GitHubIcon />,
      hoverColor: '#333',
    },
    {
      href: 'https://wa.me/919080549778?text=hi%20sunil%2C%20i%20love%20your%20work',
      icon: (
        <img
          src="https://img.icons8.com/pastel-glyph/128/whatsapp--v2.png"
          alt="WhatsApp"
          style={{ width: 24, height: 24 }}
        />
      ),
      hoverColor: '#25D366',
    },
    {
      
  href: 'https://leetcode.com/u/sunil_esitor/', // update with your profile URL
  icon: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
      alt="LeetCode"
      style={{ width: 24, height: 24, color: "black" }}
    />
  ),
  hoverColor: '#FFA116',
},
    
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 1000,
        '@media (max-width: 600px)': {
          bottom: '1rem',
          left: '1rem',
        },
      }}
    >
      {icons.map(({ href, icon, hoverColor }, i) => (
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
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.3s ease',
              animation: visible
                ? `${fadeInUpZoom} 0.6s ease ${i * 0.2}s forwards`
                : 'none',
              '@media (max-width: 600px)': {
                padding: '6px',
              },
              '&:hover': {
                backgroundColor: '#f0f0f0',
                transform: 'scale(1.1)',
                color: hoverColor,
              },
            }}
          >
            {icon}
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};

export default SocialLinks;
