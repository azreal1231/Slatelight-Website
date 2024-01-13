import { useState, useEffect } from 'react'
import './App.css'
import './kak.css'

function App() {
const [pageMounted, setPageMounted] = useState(false)

useEffect(() => {
  if(!pageMounted){
    setPageMounted(true)
    document.getElementById('stars').style.boxShadow = generateStars();
    // doRetainerThing()
    // doAddonThing()
  }
}, [pageMounted])

function generateStars() {
  let stars = '';
  for (let i = 0; i < 100; i++) {  
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.random() * 2;
      stars += `${x}px ${y}px ${size}px #FFF, `;
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
