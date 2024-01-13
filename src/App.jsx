import { useState, useEffect } from 'react'
import { retainers, addons } from './utils/constants'
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
            otherCard.style.opacity = '0.3';
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
          otherCard.style.opacity = '0.3';
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
    <button className="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
      aria-expanded="false" aria-label="Toggle navigation"
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
      <div className="row mb-4">
        {retainers.map((_x, _index) => 
          <div className="col-sm-6" key={_index} style={{'height': '300px'}}>
            <div className="retainer-card">
              <h3>{_x['title']}</h3>
              <h5>{_x['sub_title']} | <span>{_x['amount']}</span></h5>
              <p>{_x['description']}</p>
            </div>
          </div>
        )}
      </div>
      <div className="row d-flex justify-content-center" style={{marginTop: '100px'}}>
      {addons.map((_x, _index) => 
        <div className="col-sm-3" key={_index} style={{ height: '200px' }}>
          <div className="addons-card">
            <h3>{_x['title']}</h3>
            <h5>{_x['sub_title']} | <span>{_x['amount']}</span></h5>
            <p>{_x['description']}</p>
          </div>
        </div>
      )}
      </div>
    </div>
    <div className="container" style={{marginTop: '100px'}}>
      <section>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-8">
            <p className='text-white'>
              Please note that all retainer and add-on hour tiers cover a range of services including development work, support, and meetings. 
              The hours purchased within any tier are cumulative and account for the total time spent on all project-related activities, 
              encompassing coding, troubleshooting, as well as consultation and strategy meetings. 
              We strive to use this time efficiently to maximize the value and progress of your project. 
              It is our policy to maintain transparency and open communication about the allocation of hours to ensure mutual understanding and satisfaction. 
              For any specific questions or concerns about how hours are allocated, please feel free to contact us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</>

}

export default App
