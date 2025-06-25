import { useEffect } from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'KryptoGiffy',
    description: 'A blockchain platform for sending crypto transactions using Ethereum testnets.',
    image: 'https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fkryptogiffy.jpg?alt=media&token=b642f131-cdda-4378-9d2b-7f8770b1e671',
    tags: ['#Ropsten', '#Goerli', '#Ethereum', '#Web 3.0'],
    liveLink: 'https://kryptogiffy.web.app/',
    githubLink: 'https://github.com/hareesh-r/KryptoGiffy',
  },
  {
    title: 'Netflix GPT',
    description: 'AI-powered Netflix interface with real-time movie recommendations and TMDB + OpenAI APIs.',
    image: 'https://via.placeholder.com/300x180?text=Netflix+GPT',
    tags: ['#OpenAI', '#TMDB', '#Firebase', '#React'],
    liveLink: 'https://netflix-gpt-demo.web.app/',
    githubLink: 'https://github.com/yourname/netflix-gpt',
  },
  {
    title: 'Travel Advisor',
    description: 'Search hotels, restaurants, and attractions with real-time weather and maps.',
    image: 'https://via.placeholder.com/300x180?text=Travel+Advisor',
    tags: ['#RapidAPI', '#Google Maps', '#React', '#Weather'],
    liveLink: 'https://travel-advisor-demo.web.app/',
    githubLink: 'https://github.com/yourname/travel-advisor',
  },
  {
    title: 'Recipe Finder',
    description: 'Search and view recipes by ingredients using TheMealDB API.',
    image: 'https://via.placeholder.com/300x180?text=Recipe+App',
    tags: ['#React', '#TheMealDB', '#API', '#Search'],
    liveLink: 'https://recipe-app-demo.web.app/',
    githubLink: 'https://github.com/yourname/recipe-app',
  },
  {
    title: 'Ride Booking App',
    description: 'Uber-like app to book rides, track location, and manage timesheets.',
    image: 'https://via.placeholder.com/300x180?text=Ride+Booking',
    tags: ['#React', '#Leaflet', '#Redux', '#Tracking'],
    liveLink: 'https://ride-app-demo.web.app/',
    githubLink: 'https://github.com/yourname/ride-app',
  },
  {
    title: 'Task Manager',
    description: 'Full-featured task management app with filter, sort, and starred tasks.',
    image: 'https://via.placeholder.com/300x180?text=Task+Manager',
    tags: ['#React', '#Redux', '#LocalStorage', '#Todo'],
    liveLink: 'https://task-manager-demo.web.app/',
    githubLink: 'https://github.com/yourname/task-manager',
  },
];

const Project = () => {
  useEffect(() => {
    const slider = document.getElementById('grab-scroll');
    const svgBox = document.getElementById('rotate-svg');
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleLeaveUp = () => {
      isDown = false;
      slider.classList.remove('active');
      if (svgBox) svgBox.style.transform = 'rotate(0deg)';
    };

    const handleMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;

      if (svgBox) svgBox.style.transform = 'rotate(180deg)';
    };

    slider.addEventListener('mousedown', handleDown);
    slider.addEventListener('mouseleave', handleLeaveUp);
    slider.addEventListener('mouseup', handleLeaveUp);
    slider.addEventListener('mousemove', handleMove);

    return () => {
      slider.removeEventListener('mousedown', handleDown);
      slider.removeEventListener('mouseleave', handleLeaveUp);
      slider.removeEventListener('mouseup', handleLeaveUp);
      slider.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <Box sx={{ height: '100vh', width: '100vw', position: 'relative', overflowY: 'auto', color: '#fff' }}>
      <Box sx={{ position: 'fixed', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'black', zIndex: 1 }} />

      <Box sx={{ position: 'fixed', top: 15, left: 20, right: 0, height: 64, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
        <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', fontSize: '1.9rem', fontFamily: "'Dancing Script', cursive", textShadow: '1px 1px 3px white', color: 'white' }}>
          ES
        </Typography>
        <IconButton component={RouterLink} to="/" sx={{ color: 'white' }}>
          <Box component="img" src="https://img.icons8.com/ios-filled/50/ffffff/circled-left-2.png" alt="Back" width={50} height={50} sx={{ transition: 'all 0.3s ease', '&:hover': { boxShadow: '0px 4px 12px rgb(243, 238, 238)', borderRadius: '50%', transform: 'scale(1.05)' } }} />
        </IconButton>
      </Box>

      <Box sx={{ pt: 10, px: 4, maxWidth: 1800, margin: '0', position: 'relative', zIndex: 2, color: '#000' }}>
        <Box component="h1" sx={{ position: 'fixed', top: '0.1rem', left: '6rem', color: 'rgba(252, 246, 244, 0.2)', fontSize: 'calc(3rem + 3vw)', zIndex: 0, fontWeight: 'bold', fontFamily: "'Dancing Script', cursive" }}>
          WORK
        </Box>

        <SocialLinks visible={true} />

        {/* Horizontal scroll */}
        <ul className="items jKLUHq" id="grab-scroll">
          {projects.map((proj, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <li className="boOfnS">
                    <Typography variant="h6" fontWeight="bold">{proj.title}</Typography>
                    <Typography variant="body2">{proj.description}</Typography>
                  </li>
                </div>
                <div className="flip-card-back">
                  <li className="boOfnS" style={{ backgroundColor: 'black', border: '1px solid white', color: 'white' }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{
                        width: '100%',
                        height: '50%',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        borderBottom: '2px solid white'
                      }}
                    />
                    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {proj.tags.map((tag, i) => (
                        <Typography
                          key={i}
                          sx={{
                            marginRight: "0.5rem",
                            fontSize: 'calc(0.6em + 0.3vw)',
                            paddingTop: "8px",
                            color: 'white',
                          }}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                      <Link
                        href={proj.liveLink}
                        target="_blank"
                        underline="none"
                        sx={{
                          color: 'rgba(0, 0, 0, 0.8) !important',
                          backgroundColor: '#fcf6f4 !important',
                          textDecoration: 'none',
                          padding: '.5rem calc(2rem + 2vw)',
                          borderRadius: '0 0 0 50px',
                          fontSize: 'calc(1em + .5vw)',
                          fontWeight: 500,
                        }}
                      >
                        Visit
                      </Link>
                      <Link href={proj.githubLink} target="_blank">
                        <GitHubIcon sx={{ fill: '#fcf6f4', fontSize: '2.2rem' }} />
                      </Link>
                    </Box>
                  </li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </Box>

      {/* Rotating SVG Path Icon */}
      <Box
        id="rotate-svg"
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 5,
          transform: 'rotate(0deg)',
          transition: 'transform 0.6s ease',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FCF6F4"
            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248
              248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32
              32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96
              96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248
              64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32
              14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Project;
