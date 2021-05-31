import React from 'react';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import Houses from '../Houses/Houses';
import Intro from '../Intro/Intro';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <Houses></Houses>
      <Facilities></Facilities>
      <Footer></Footer>
    </div>
  );
};

export default Home;
