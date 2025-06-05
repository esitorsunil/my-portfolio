
import { Box, Typography, IconButton, Grid, Chip, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import { useEffect, useState } from 'react';

const codingCards = Array.from({ length: 12 }).map((_, i) => ({
  title: `Card ${i + 1}`,
  href: 'https://example.com',
  tags: ['#demo', '#code', '#react'],
  note: 'Reusable, clean and beautiful.',
  bgColor: '#e0e0e0',
  img: `https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/download.png?alt=media&token=6a694785-b91b-435e-910e-aa73754e625e/400x200?sig=${i}`,
}));

const Features = () => {
    const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i > codingCards.length) {
        clearInterval(interval);
      } else {
        setVisibleCount(i);
      }
    }, 300); // 100ms delay per card

    return () => clearInterval(interval);
  }, []);
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
        top: 0, left: 0, right: 0,
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
  <path d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z" />
</svg>
      
      </Box>

      {/* Main content */}
      <Box sx={{
        pt: 10, px: 4, maxWidth: 1200, margin: 'auto',
        position: 'relative', zIndex: 2, color: '#000',
      }}>
        
  {/* Big fixed background text */}
  <Box
    component="h1"
    sx={{
      position: 'fixed',
      top: '0.1rem',
      left: '5rem',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: 'calc(5rem + 5vw)',
      zIndex: 0,
     
      fontWeight: 'bold',
      fontFamily: "'Dancing Script', cursive",
     
    }}
  >
    FEATURES
  </Box>
        <SocialLinks visible={true} />

        {/* Card Grid */}
        <Grid container spacing={8} sx={{ mt: 14, marginLeft: '130px' }}>
  {codingCards.map((card, i) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={6}
      xl={6}
      key={i}
      sx={{
        opacity: i < visibleCount ? 1 : 0,
        transform: i < visibleCount
          ? 'translateY(0) scale(1)'
          : 'translateY(20px) scale(0.8)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <Link
        href={card.href}
        target="_blank"
        underline="none"
        sx={{
          display: 'block',
          p: 2,
          borderRadius: 2,
          // Remove backgroundColor to keep transparent background
          // backgroundColor: card.bgColor,
          boxShadow: 2,
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.02)' },
        }}
      >
        <Box
          component="img"
          src={card.img}
          alt={card.title}
          sx={{
            width: '100%',
            height: 220,
            objectFit: 'cover',
            borderRadius: 1,
            mb: 1.5,
          }}
        />

        <Typography variant="h6" gutterBottom>
          {card.title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
          {card.tags.map((tag, j) => (
            <Chip key={j} label={tag} variant="outlined" size="small" />
          ))}
        </Box>

        <Typography variant="body2" color="text.secondary">
          {card.note}
        </Typography>
      </Link>
    </Grid>
  ))}
</Grid>

      </Box>
    </Box>
  );
};

export default Features;
