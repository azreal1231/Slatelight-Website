import { useState, useEffect } from 'react'
import RetainersComp from './comps/retainers'
import AddonsComp from './comps/addons'
import DisclaimerComp from './comps/disclaimer'
import './App.css'
import './kak.css'

function App() {
const [pageMounted, setPageMounted] = useState(false)

useEffect(() => {
  if(!pageMounted){
    setPageMounted(true)
    document.getElementById('stars').style.boxShadow = generateStars();
    document.getElementById('starsBig').style.boxShadow = generateStarsBig();
  }
}, [pageMounted])

function generateStars() {
  let stars = '';
  for (let i = 0; i < 200; i++) { // Adjust number of stars as needed
      const x = Math.floor(Math.random() * window.innerWidth);
      const y1 = Math.floor(Math.random() * window.innerHeight);
      const y2 = y1 + window.innerHeight; // Second layer starts where the first ends
      const size = Math.random() * 2;
      stars += `${x}px ${y1}px ${size}px #FFF, `;
      stars += `${x}px ${y2}px ${size}px #FFF, `;
  }
  return stars.slice(0, -2);
}

function generateStarsBig() {
  let stars = '';
  for (let i = 0; i < 20; i++) { // Adjust number of stars as needed
      const x = Math.floor(Math.random() * window.innerWidth);
      const y1 = Math.floor(Math.random() * window.innerHeight);
      const y2 = y1 + window.innerHeight; // Second layer starts where the first ends
      const size = Math.random() * 5;
      stars += `${x}px ${y1}px ${size}px #FFF, `;
      stars += `${x}px ${y2}px ${size}px #FFF, `;
  }
  return stars.slice(0, -2);
}


return <>
<nav className="navbar navbar-expand-lg my-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img style={{ maxHeight: '70px', maxWidth: '100%', height: 'auto' }} src="/imgs/Logo.png" alt="logo" className="d-inline-block align-text-top" />
    </a>
  </div>
</nav>
  <div id="stars"></div>
  <div id="starsBig"></div>
  <div className="container">
    <RetainersComp/>
  </div>
  <div className="container">
    <AddonsComp/>
  </div>
  <div className="container">
    <DisclaimerComp/>
  </div>
</>

}

export default App
