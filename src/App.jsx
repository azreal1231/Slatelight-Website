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
      updateStarPositions(starsRef.current);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    function handleMouseMove(e) {
      // Adjust star direction based on mouse position
      adjustStarDirection(starsRef.current, e.clientX, e.clientY);
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
        size: Math.random() * 2
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

      // Update star's y position to create falling effect
      star.y += star.size * 0.5; // Speed depends on size

      // Reset star position when it goes off screen
      if (star.y > window.innerHeight) {
        star.y = 0;
        star.x = Math.random() * window.innerWidth;
      }
    });
  }

  // Function to update star positions based on mouse position
  function updateStarPositions(stars, mouseX, mouseY) {
    // Update each star's position based on the mouse coordinates
    // This is where you would implement the logic to move stars based on mouse position
    // For example, you could adjust the x and y coordinates of each star here
  }

  return (
    <>
      <NavBar />
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
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
