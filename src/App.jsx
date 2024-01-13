import { useState, useEffect } from 'react'
import './App.css'
import './kak.css'

function App() {
const [pageMounted, setPageMounted] = useState(false)

useEffect(() => {
  if(!pageMounted){
    setPageMounted(true)
    document.getElementById('stars').style.boxShadow = generateStars();
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



return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img style={{ width: 200 }} src="/imgs/Logo.png" alt="logo" height="70" className="d-inline-block align-text-top" />
      </a>
    </div>
  </nav>
  <div id="stars"></div>
</>

}

export default App
