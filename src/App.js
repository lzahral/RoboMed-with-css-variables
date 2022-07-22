import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import NavbarComp from "./components/NavbarComp";
import MainPart from "./components/MainPart";
import Facilities from "./components/Facilities/Facilities";
import Slider from "./components/slider/Slider";
import Team from "./components/teamDoctor/Team";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
   const [theme, setTheme] = useState(false);
   return (
      <div id="theme" className={theme ? "light p-4" : "dark p-4"}>
         <Container>
            <NavbarComp theme={theme} setTheme={setTheme} />
            <MainPart theme={theme} />
            <Facilities />
            <Slider />
            <Team />
            <Subscribe />
            <Footer />
         </Container>
      </div>
   );
};

export default App;
