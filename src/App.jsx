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
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    starsRef.current = createStars(200); // Create an array of stars

    let animationFrameId;

    // Update and draw stars
    const render = () => {
      drawStars(ctx, starsRef.current);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    function handleMouseMove(e) {
      // Adjust star direction based on mouse position
      adjustStarDirection(starsRef.current, e.clientX);
      drawStars(ctx, starsRef.current); // Redraw stars with new positions
    }
    
    

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // The empty dependency array ensures this runs once after initial render

  // Function to create an array of stars
  function createStars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.5, // Speed of falling
        velocityX: 0, // Horizontal velocity
        velocityY: 0 // Vertical velocity
      });
    }
    return stars;
  }
  

  // Function to draw stars on the canvas
  function drawStars(ctx, stars) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach(star => {
      ctx.fillStyle = '#FFF';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();
  
      // Update star's position
      star.x += star.velocityX;
      star.y += star.velocityY;
  
      // Reset star position when it goes off screen
      if (star.y > window.innerHeight) {
        star.y = 0;
        star.x = Math.random() * window.innerWidth;
      } else if (star.x < 0 || star.x > window.innerWidth) {
        star.x = Math.random() * window.innerWidth;
        star.y = 0;
      }
    });
  }
  

  // Function to adjust star direction based on mouse position
  function adjustStarDirection(stars, mouseX) {
    const windowWidth = window.innerWidth;
    // Interpolate the angle between 240 and 310 degrees based on mouse position
    const angleLeft = 240; // Angle when mouse is on the left
    const angleRight = 310; // Angle when mouse is on the right
    const angleRange = angleRight - angleLeft;
  
    // Calculate the normalized mouse position (0.0 - 1.0)
    const normalizedMouseX = mouseX / windowWidth;
  
    // Interpolate the angle based on the mouse position
    const angle = angleLeft + angleRange * normalizedMouseX;
  
    // Convert angle to radians for calculation
    const angleRadians = angle * (Math.PI / 180);
  
    stars.forEach(star => {
      // Update the velocity based on the angle
      star.velocityX = Math.cos(angleRadians) * star.speed;
      star.velocityY = Math.abs(Math.sin(angleRadians)) * star.speed;
    });
  }
  
  return (
    <>
      <NavBar />
      <div className="app-container">
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
        <div className="container">
          <AboutComp />
          <RetainersComp />
          <AddonsComp />
          <ReferencesComp />
          <PartnersComp />
          <DisclaimerComp />
        </div>
      </div>
    </>
  );
}

export default App;
