import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarComp from './components/NavbarComp';
import MainPart from './components/MainPart';
import Facilities from './components/Facilities/Facilities';
import Slider from './components/slider/Slider';
import Team from './components/teamDoctor/Team';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App = () => {
  const [Theme, setTheme] = useState(false);
  return (
    <div  id="example-app" className={Theme ? "light p-4" : "dark p-4"}>
      <Container>
        <NavbarComp theme={Theme} setTheme={setTheme}/>
        <MainPart theme={Theme}/>
        <Facilities/>
        <Slider/>
        <Team/>
        <Subscribe/>
        <Footer/>
      </Container>
    </div>
  );
};

export default App;