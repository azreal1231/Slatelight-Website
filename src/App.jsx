import { useState, useEffect } from 'react';
import NavBar from './comps/navbar';
import AboutComp from './comps/about';
import RetainersComp from './comps/retainers';
import AddonsComp from './comps/addons';
import DisclaimerComp from './comps/disclaimer';
import ReferencesComp from './comps/references';
import PartnersComp from './comps/partners';
import './App.css';
import './kak.css';

function App() {
  const [pageMounted, setPageMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!pageMounted) {
      setPageMounted(true);
    }
  }, [pageMounted]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        document.getElementById('stars').style.boxShadow = generateStars();
        document.getElementById('starsBig').style.boxShadow = generateStarsBig();
      }
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = e.clientX - innerWidth / 2;
      const mouseY = e.clientY - innerHeight / 2;

      // Invert the direction of rotation. Change '-' to '+' and vice versa.
      const rotateDegX = -mouseY / innerHeight * 30; // Max 15 degrees rotation
      const rotateDegY = mouseX / innerWidth * 30; // Max 15 degrees rotation

      const stars = document.getElementById('stars');
      const starsBig = document.getElementById('starsBig');

      if (stars && starsBig) {
          stars.style.transform = `rotateX(${rotateDegX}deg) rotateY(${rotateDegY}deg)`;
          starsBig.style.transform = `rotateX(${rotateDegX}deg) rotateY(${rotateDegY}deg)`;
      }
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  window.addEventListener('mousemove', handleMouseMove);

  return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

  function generateStars() {
    let stars = '';
    for (let i = 0; i < 200; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y1 = Math.floor(Math.random() * window.innerHeight);
      const y2 = y1 + window.innerHeight;
      const size = Math.random() * 2;
      stars += `${x}px ${y1}px ${size}px #FFF, `;
      stars += `${x}px ${y2}px ${size}px #FFF, `;
    }
    return stars.slice(0, -2);
  }

  function generateStarsBig() {
    let stars = '';
    for (let i = 0; i < 20; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y1 = Math.floor(Math.random() * window.innerHeight);
      const y2 = y1 + window.innerHeight;
      const size = Math.random() * 5;
      stars += `${x}px ${y1}px ${size}px #FFF, `;
      stars += `${x}px ${y2}px ${size}px #FFF, `;
    }
    return stars.slice(0, -2);
  }

  return (
    <>
      <NavBar />
      {!isMobile && (
        <>
          <div id="stars"></div>
          <div id="starsBig"></div>
        </>
      )}
      <div className="container">
        <AboutComp />
      </div>
      <div className="container">
        <RetainersComp />
        <AddonsComp />
      </div>
      <div className="container">
        <ReferencesComp />
      </div>
      <div className="container">
        <PartnersComp />
      </div>
      <div className="container">
        <DisclaimerComp />
      </div>
    </>
  );
}

export default App;
