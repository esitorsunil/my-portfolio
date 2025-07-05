import { Box, Typography, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import { useEffect, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = document.body.scrollHeight); 

    const isMobile = window.innerWidth < 600;
    const numPoints = isMobile ? 50 : 120; 
    const distanceThreshold = 160;
    const points = [];
    const mouse = { x: null, y: null };

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000';

      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < numPoints; i++) {
        for (let j = i + 1; j < numPoints; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < distanceThreshold) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 0, 0, ${1 - dist / distanceThreshold})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const m = mouse;
        if (m.x !== null && m.y !== null) {
          const a = points[i];
          const dx = m.x - a.x;
          const dy = m.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < distanceThreshold) {
            a.vx += dx * 0.002;
            a.vy += dy * 0.002;
          }
        }
      }

      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.body.scrollHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageWrapper>
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflowY: 'auto',
        color: '#000',
        fontFamily: 'Ubuntu Mono, monospace',
        backgroundColor: "rgb(252, 246, 244)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

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
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            color: '#000',
          }}
        >
          ES
        </Typography>
         <Box
    component="h1"
    sx={{
      position: 'fixed',
      bottom: '-4rem',
      right: '36rem',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: 'calc(3rem + 3vw)',
      zIndex: 0,
     
      fontWeight: 'bold',
      fontFamily: "'Dancing Script', cursive",
     
    }}
  >
    SKILLS
  </Box>
        <SocialLinks visible={true} />

        <IconButton component={RouterLink} to="/" sx={{ color: 'black' }}>
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
    mt: 10,
    px: 2,
    maxHeight: {
      xs: 'calc(100vh - 100px)', 
      md: 'none',
    },
    overflowY: {
      xs: 'auto',
      md: 'visible',
    },
  }}
>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 20,
      flexWrap: 'wrap',
      fontFamily: '"Ubuntu Mono", monospace',
    }}
  >
  <Box
    sx={{
      border: '2px solid rgb(0, 0, 0)',
      color: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(252, 246, 244, 0.25)',
      padding: '2rem',
      width: {
      xs: '58vw',   
      sm: '80vw',   
      md: '30vw',   
    },
    height: {
      xs: 'auto',  
      sm: 'auto',
      md: '65vh',  
    },
      zIndex: 3,
      lineHeight: 1.5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
      <Box component="svg" width={40} height={40} fill="currentColor" viewBox="0 0 640 512">
        <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
       
      </Box>
      <Typography variant="h6" fontWeight="bold" sx={{
        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
      }}>
        Frontend Developer
      </Typography>
    </Box>

    <Typography sx={{ fontSize: 'calc(0.5em + 0.9vw)', fontFamily: '"Ubuntu Mono", monospace', paddingTop: "25px" }}>
      I enjoy writing clean code and creating useful products.
    </Typography>

    <Box sx={{ fontSize: 'calc(0.5em + 1vw)', fontFamily: '"Ubuntu Mono", monospace', paddingTop: "25px" }}>
   <Typography
      sx={{
        fontSize: { xs: '0.80rem', sm: '1rem', md: 'calc(0.4em + 0.6vw)' },
        mb: 0,
      }}
    >
      <strong>I LIKE TO CODE IN</strong>
    </Typography>
  <Typography sx={{ fontSize: 'inherit', fontFamily: '"Ubuntu Mono", monospace', mt: 0,  paddingLeft: '1.5rem' }}>
    React.js, JavaScript, HTML5, CSS, Tailwind CSS, Redux Toolkit, Bootstrap, Jest
  </Typography>
</Box>

    <Box
  sx={{
    fontSize: 'calc(0.5em + 1vw)',
    fontFamily: '"Ubuntu Mono", monospace',
    paddingTop: '25px'
  }}
>
  <Typography
    sx={{
        fontSize: { xs: '0.95rem', sm: '0.90rem', md: 'calc(0.5em + 0.8vw)' },
        mb: 0,
      }}
    >
    <strong>Tools</strong>
  </Typography>
  <ul style={{ marginTop: 0, paddingLeft: '2.5rem', fontFamily: '"Ubuntu Mono", monospace' }}>
    <li>Git & GitHub</li>
    <li>Jest</li>
    <li>Redux DevTools</li>
    <li>Chrome DevTools</li>
  </ul>
</Box>

  </Box>

  <Box
    sx={{
      border: '2px solid rgb(0, 0, 0)',
      color: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(252, 246, 244, 0.25)',
      padding: '2rem',
      width: {
      xs: '55vw',   
      sm: '80vw',   
      md: '30vw',   
    },
    height: {
      xs: 'auto',   
      sm: 'auto',
      md: '65vh',   
    },
      zIndex: 3,
      lineHeight: 1.5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '"Ubuntu Mono", monospace',
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
      <Box component="svg" width={40} height={40} fill="currentColor" viewBox="0 0 640 512">
        <path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
      </Box>
      <Typography variant="h6" fontWeight="bold" sx={{
        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
      }}>
        Backend Developer
      </Typography>
    </Box>

    <Typography sx={{ fontSize: 'calc(0.5em + 1vw)', fontFamily: '"Ubuntu Mono", monospace',  paddingTop: "15px" }}>
      It's fun for me to bring new concepts to life. I consider myself fortunate to be a Fullstack developer because my work has a direct impact on the user's life.
    </Typography>

   <Box sx={{ fontSize: 'calc(0.5em + 1vw)', fontFamily: '"Ubuntu Mono", monospace', paddingTop: "25px" }}>
   <Typography
      sx={{
        fontSize: { xs: '0.95rem', sm: '1rem', md: 'calc(0.5em + 0.8vw)' },
        mb: 0,
      }}
    >
      <strong>Skills</strong>
    </Typography>
  <Typography sx={{ fontSize: 'inherit', fontFamily: '"Ubuntu Mono", monospace', mt: 0,  paddingLeft: '1.5rem' }}>
    NodeJS, ExpressJS, MongoDB, Mongoose
  </Typography>
</Box>

    <Box sx={{ fontSize: 'calc(0.5em + 1vw)', fontFamily: '"Ubuntu Mono", monospace', paddingTop: "25px" }}>
   <Typography
      sx={{
        fontSize: { xs: '0.95rem', sm: '1rem', md: 'calc(0.5em + 0.8vw)' },
        mb: 0,
      }}
    >
      <strong>Tools</strong>
    </Typography>
  <Typography sx={{ fontSize: 'inherit', fontFamily: '"Ubuntu Mono", monospace', mt: 0,  paddingLeft: '1.5rem' }}>
    Postman, AWS, Mongo Compass, Nginx etc.,
  </Typography>
</Box>
  </Box>
</Box>
</Box>

    </Box>
    </PageWrapper>
  );
};

export default Skills;
