import { useState, useEffect, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    starsRef.current = createStars(200);

    let animationFrameId;

    const render = () => {
      drawStars(ctx, starsRef.current);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    function handleMouseMove(e) {
      adjustStarDirection(starsRef.current, e.clientX);
      drawStars(ctx, starsRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  function createStars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.5,
        velocityX: 0,
        velocityY: 0
      });
    }
    return stars;
  }
  
  function drawStars(ctx, stars) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach(star => {
      ctx.fillStyle = '#FFF';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();

      star.x += star.velocityX;
      star.y += star.velocityY;

      if (star.y > window.innerHeight) {
        star.y = 0;
        star.x = Math.random() * window.innerWidth;
      } else if (star.x < 0 || star.x > window.innerWidth) {
        star.x = Math.random() * window.innerWidth;
        star.y = 0;
      }
    });
  }
  
  function adjustStarDirection(stars, mouseX) {
    const windowWidth = window.innerWidth;
    const angleLeft = 250;
    const angleRight = 290;
    const angleRange = angleRight - angleLeft;
  
    const normalizedMouseX = mouseX / windowWidth;
  
    const angle = angleLeft + angleRange * normalizedMouseX;
  
    const angleRadians = angle * (Math.PI / 180);
  
    stars.forEach(star => {
      star.velocityX = Math.cos(angleRadians) * star.speed;
      star.velocityY = Math.abs(Math.sin(angleRadians)) * star.speed;
    });
  }
  
  return (
    <div className="main-content">
      <NavBar />
      <div className="app-container">
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
        <div className="container">
          <AboutComp />
          <ReferencesComp />
          <RetainersComp />
          <AddonsComp />
          <PartnersComp />
          <DisclaimerComp />
        </div>
      </div>
    </div>
  );
}

export default App;
