import React from 'react';
import Button from '../components/Button';
import './Home.css';
import CircularNavbar from '../components/NavBar360';

const Home = () => {
  return (
    <div className="home-container">
      <Button />
      <CircularNavbar />
    </div>
  );
};

export default Home;
