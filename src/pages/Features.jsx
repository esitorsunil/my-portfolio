
import { Box, Typography, IconButton, Grid, Chip, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const codingCards = [
   {
    title: 'The Complete JavaScript Course',
    href: 'https://www.tcsion.com/courses/development-island/the-complete-javascript-course-build-a-professional-project/',
    tags: ['#js', '#tcs', '#core'],
    note: 'May 30, 2024',
    bgColor: '#e0e0e0',
    img: '/assests/images/txs.png',
  },
  {
    title: 'PSS - ReactJS Intern',
    href: 'https://www.pranathiss.com/',
    tags: ['#ReactJS', '#Bootstrap', '#Openai', '#Redux Toolkit'],
    note: 'Worked on Real world projects and Collaborated using BigBasket by using conventional commits',
    bgColor: '#e0e0e0',
    img: 'https://www.pranathiss.com/static/assets/images/pranathiss-logo.webp',
  },
  {
    title: 'AI POWERED NETFLIX REPLICA APP',
    href: 'https://www.cait.net/',
    tags: ['#research', '#openai', '#postfix'],
    note: 'Prepared a research paper and delivered a presentation at International Conference on 2025.',
    bgColor: '#e0e0e0',
    img: '/assests/images/banner2.jpg',
  },
   {
    title: 'Core JavaScript',
    href: 'https://github.com/esitorsunil/namastejavascript',
    tags: ['#debounce', '#promise', '#async'],
    note: 'Core Concepts in JS including the tricky ones like Closures, Event loop, Promise, etc.,',
    bgColor: '#e0e0e0',
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png',
  },
  {
    title: 'React and Redux Toolkit',
    href: 'https://namastedev.com/sunil.esitor/certificates/namaste-react',
    tags: ['#openai', '#codesplitting', '#customhooks'],
    note: 'NamasteDev.com Certification.',
    bgColor: '#e0e0e0',
    img: 'https://do6gp1uxl3luu.cloudfront.net/course_certificates/namaste_react_certificate.webp',
  },

  {
    title: ' The Complete Full-Stack Bootcamp',
    href: 'https://www.udemy.com/certificate/UC-edaf396f-2a8b-442c-bfba-a7f17a216fbf/',
    tags: ['#mern', '#javascript', '#react'],
    note: 'Udemy Certification - May 20, 2023.',
    bgColor: '#e0e0e0',
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-edaf396f-2a8b-442c-bfba-a7f17a216fbf.jpg?v=1684581313000',
  },
  {
    title: 'MCA - Computer Applications',
    href: 'https://hicas.ac.in/',
    tags: ['#java', '#javascript', '#python', '#dbms', '#cloud'],
    note: 'Graduated with CGPA of 8.5/10 - 2023 to 2025',
    bgColor: '#e0e0e0',
    img: 'https://gyaanarth.com/wp-content/uploads/2021/09/HICAS-Logo-1024x1024.jpg',
  },
  
 
  {
    title: 'Accent Technosoft - ReactJS Intern',
    href: 'https://www.accenttechnosoft.com/',
    tags: ['#js', '#css', '#react'],
    note: 'Worked as a Frontend Developer Netlify, Github and SEO Optimization.',
    bgColor: '#e0e0e0',
    img: 'https://www.accenttechnosoft.com/images/logo_old.png',
  },
  
  
  
    {
    title: 'Responsive Web Design',
    href: 'https://www.freecodecamp.org/certification/fcca6592d20-67bf-447a-89b2-359ebb20d0de/responsive-web-design',
    tags: ['#css', '#300hours', '#freecodecamp'],
    note: 'Developer certification on Dec 15, 2023.',
    bgColor: '#e0e0e0',
    img: 'https://th.bing.com/th/id/OIP.x4z_ZICDjkXYB7A2ee0UNAHaDH?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Git Training',
    href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI3NTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl81MDQ2MzAyXzE3MTMwOTUwOTIucG5nIiwidXNlcm5hbWUiOiJFU0lUT1IgU1VOSUwgTSBBIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_5046302_1713095092.png&_branch_match_id=1011647527857613791&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1jerSk%2FzMDEL9fVMsq8rSk1LLSrKzEuPTyrKLy9OLbJ1TUlPBQAAYS7lOwAAAA%3D%3D',
    tags: ['#git', '#github', '#simplilearn'],
    note: 'Apr 14, 2024',
    bgColor: '#e0e0e0',
    img: 'https://certificates.simplicdn.net/share/thumb_5046302_1713095092.png',
  },
 
];


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
    }, 600); 

    return () => clearInterval(interval);
  }, []);
  return (
    <PageWrapper direction="right">
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
        <Grid container spacing={8} sx={{ mt: 14 }} justifyContent="center">
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
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <Link
    href={card.href}
    target="_blank"
    underline="none"
    sx={{
      width: {
        xs: '100%',   // Full width (but with margin) on mobile
        sm: 320,
        md: 400
      },
      height: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      p: 2,
      borderRadius: 1,
      transition: 'transform 0.3s ease',
      '&:hover': { transform: 'scale(1.02)' },
      overflow: 'hidden',
      border: '1px solid black',
    }}
  >
    <Box
      component="img"
      src={card.img}
      alt={card.title}
      sx={{
        width: '100%',
        height: 200,
        objectFit: 'contain',
        backgroundColor: '#f8f8f8',
        borderRadius: 1,
        mb: 1.5,
      }}
    />

    <Typography
      variant="h6"
      gutterBottom
      sx={{
        color: '#000',
        px: 1,
        borderRadius: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      
        fontSize: {
          xs: '0.8rem',   // smaller title on mobile
          sm: '1.1rem',
          md: '1.2rem',
        },
      }}
    >
      {card.title}
    </Typography>

    <Divider sx={{ my: 1, borderColor: '#000' }} />

    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        mb: 2,
      
       // ✅ center tags on mobile
      }}
    >
      {card.tags.map((tag, j) => (
        <Chip key={j} label={tag} variant="outlined" size="small" />
      ))}
    </Box>

    <Typography
      variant="body2"
      color="#000"
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
    
        fontSize: {
          xs: '0.8rem', // ✅ smaller description on mobile
          sm: '0.9rem',
          md: '1rem',
        },
      }}
    >
      {card.note}
    </Typography>
  </Link>
</Grid>

  
  ))}
</Grid>


      </Box>
    </Box>
    </PageWrapper>
  );
};

export default Features;
