import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './kak.css'

function App() {
const [pageMounted, setPageMounted] = useState(false)

useEffect(() => {
  if(!pageMounted){
    setPageMounted(true)
    doRetainerThing()
    doAddonThing()
  }
}, [pageMounted])

function doRetainerThing(){
    const cards = document.querySelectorAll('.retainer-card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Increase the blur of the hovered card
        this.style.backdropFilter = 'blur(10px)';
        this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';

  
        // Reset the blur of all other cards
        cards.forEach(otherCard => {
          if (otherCard !== this) {
            otherCard.style.backdropFilter = 'blur(0px)';
            otherCard.style.opacity = '0.5';
          }
        });
      });
  
      card.addEventListener('mouseleave', function() {
        // Reset the gradient and opacity when the mouse leaves the card
        this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
        cards.forEach(otherCard => {
          otherCard.style.opacity = '1';
        });
      });
    });
}

function doAddonThing(){
  const cards = document.querySelectorAll('.addons-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Increase the blur of the hovered card
      this.style.backdropFilter = 'blur(10px)';
      this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';


      // Reset the blur of all other cards
      cards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.style.backdropFilter = 'blur(0px)';
          otherCard.style.opacity = '0.5';
        }
      });
    });

    card.addEventListener('mouseleave', function() {
      // Reset the gradient and opacity when the mouse leaves the card
      this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
      cards.forEach(otherCard => {
        otherCard.style.opacity = '1';
      });
    });
  });
}

return <>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    {/* <a className="navbar-brand" href="#">Slatelight</a> */}
    <img style={{ width: 200 }} src="/imgs/Logo.png" alt="" />
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
      <form className="my-2 my-lg-0 float-right">
        <ul className="navbar-nav float-right text-right">
          <li className="nav-item pt-2">
            <a className="nav-links" href="#About">
              <b>About</b>
            </a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-links" href="#Contact">
              <b>Contact</b>
            </a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-links" href="#Services">
              <b>Services</b>
            </a>
          </li>
        </ul>
      </form>
    </div>
  </nav>
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
  {/* TODO */}
  {/* create me a new div that i can use as my bodu that floats ontop of my main body but is transparent and i can add content where i can also scroll down */}
  <div className="floating-content">
    <div className="container">
      <div className="row">
        <div className="col-sm-3" style={{ height: '200px' }}>
          <div className="retainer-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="retainer-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="retainer-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="retainer-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="col-sm-3" style={{ height: '200px' }}>
          <div className="addons-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="addons-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="addons-card">
            <h3>Title</h3>
            <h5>Subject</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>
    </div>
    {/* Add your content here */}
  </div>
</>

}

export default App
