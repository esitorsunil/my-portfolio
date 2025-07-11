import { Box, Typography, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import { useEffect, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 150;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        delta: Math.random() * 0.02 + 0.005,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.delta *= -1;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        background: 'black',
      }}
    />
  );
};

const About = () => {
  return (
    <PageWrapper>
       <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
    
    {/* Fixed Fullscreen Background Layer */}
    <Box sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'black', 
      zIndex: -2 
    }} />
    
    <Box sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1 
    }}>
        <StarfieldBackground />
        </Box>

        
    {/* Scrollable Content Layer */}
    <Box
      sx={{
        position: 'relative',
        overflowY: 'auto',
        height: '100vh',
        width: '100vw',
        color: '#fff',
        fontFamily: 'Ubuntu Mono, monospace',
      }}
    >

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0); }
            }

            @keyframes slideInFromBottomRight {
              0% {
                opacity: 0;
                transform: translate(100px, 100px);
              }
              100% {
                opacity: 1;
                transform: translate(0, 0);
              }
            }
          `}
        </style>

        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 64,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.9rem',
              fontFamily: "'Dancing Script', cursive",
              textShadow: '1px 1px 3px rgba(255,255,255,0.2)',
              color: '#fff',
            }}
          >
            ES
          </Typography>
          

          <IconButton component={RouterLink} to="/" sx={{ p: 0, borderRadius: '50%' }}>
            <Box
              component="img"
              src="https://img.icons8.com/ios/50/circled-left-2.png"
              alt="Back"
              width={40}
              height={40}
              marginTop={2}
              sx={{
                boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                transform: 'scale(1.05)',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.08)',
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
        <Box
          sx={{
            pt: 10,
            px: 4,
            maxWidth: 1200,
            margin: 'auto',
            position: 'relative',
            zIndex: 2,
            color: '#fff',
            marginBottom: '100px',
          }}
        >
          <Box
            component="h1"
            sx={{
              position: 'fixed',
              top: '0.1rem',
              left: '5rem',
              color: 'rgba(252, 246, 244, 0.2)',
              fontSize: 'calc(3rem + 3vw)',
              zIndex: 1,
              fontWeight: 'bold',
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            ABOUT
          </Box>

          <SocialLinks visible={true} />

          <Box
            sx={{
              border: '2px solid rgb(252, 246, 244)',
              color: 'rgb(252, 246, 244)',
              padding: { xs: '1rem', sm: '2rem' },                // smaller padding on mobile
              width: '45vw' ,                  // wider on mobile
              height: { xs: 'auto', sm: '60vh' }, 
              zIndex: 3,
              lineHeight: 1.5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: {
                xs: '0.8rem',              // Mobile (xs) - smaller font
                sm: 'calc(0.5rem + 1vw)',   // Tablet and above (sm and up)
              },
              backdropFilter: 'blur(4px)',
              position: 'absolute',
              left: 'calc(1rem + 5vw)',
              top: '10rem',
              fontStyle: 'italic',
              fontFamily: '"Ubuntu Mono", monospace',
              opacity: 0,
              animation: 'slideInFromBottomRight 1s ease-out forwards',
              animationDelay: '0.8s',
              marginBottom: '10px',
            }}
          >
            I'm a Front-End Developer Intern at Pranathi Software Services, passionate about crafting
            clean, responsive, and interactive web interfaces. I specialize in React, Redux,
            JavaScript, and CSS.
            <br />
            <br />
            I’m also deeply interested in backend development using Node.js, Express, and MongoDB. I
            enjoy designing robust APIs and working on full-stack features that bring ideas to life
            end-to-end.
            <br />
            <br />
            Always learning, I enjoy exploring frameworks, refining performance, and crafting clean,
            efficient solutions with collaborative teams.
          </Box>

          <Box
            component="img"
            src="https://hareesh.web.app/static/media/spaceman.dafa57a8.png"
            alt="Spaceman"
            sx={{
              position: 'absolute',
              top: {
                xs: '5rem',
                md: '7rem',
              },
              right: {
                xs: 'auto',
                md: 'calc(0.5rem + 5vw)',
              },
              left: {
                xs: 'calc(85% - 30px)',
                md: 'calc(85% - 10px)',
              },
              width: {
                xs: '100px',
                md: '300px',
              },
              height: 'auto',
              zIndex: 3,
              animation: `
                slideInFromBottomRight 1s ease-out forwards 1.2s,
                float 2s ease-in-out infinite
              `,
              opacity: 0,
            }}
          />
        </Box>
      </Box>
      </Box>
    </PageWrapper>
  );
};

export default About;
