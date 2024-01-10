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
      <div className="row mb-4">
        <div className="col-sm-6" style={{ height: '300px' }}>
          <div className="retainer-card">
            <h3>Sprint Tier</h3>
            <h5>20-Hour Retainer</h5>
            <p>
              Ideal for clients needing occasional support or small projects, 
              the Sprint Tier offers 20 hours of dedicated development time at a slightly reduced rate. 
              Perfect for quick fixes, minor updates, or a small project, 
              this tier provides a balance of value and flexibility for those with less intensive needs.
            </p>
          </div>
        </div>
        <div className="col-sm-6" style={{'height': '300px'}}>
          <div className="retainer-card">
            <h3>Standard Tier</h3>
            <h5>40-Hour Retainer</h5>
            <p>
              Designed for clients with regular development needs, 
              the Standard Tier provides 40 hours of development time per month. 
              This tier is perfect for ongoing maintenance, medium-sized projects, or more extensive updates. 
              With a more significant discount, clients can ensure their projects move forward with consistent, dedicated support.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6" style={{'height': '300px'}}>
          <div className="retainer-card">
            <h3>Marathon Tier</h3>
            <h5>100-Hour Retainer </h5>
            <p>
              The Marathon Tier is ideal for clients requiring extensive development work or full-scale projects. 
              Offering 100 hours of development time per month, 
              this package is perfect for large-scale developments, 
              comprehensive overhauls, or continuous collaboration on complex projects. With the most substantial discount, 
              it ensures clients receive maximal value for their investment.
            </p>
          </div>
        </div>
        <div className="col-sm-6" style={{'height': '300px'}}>
          <div className="retainer-card">
            <h3>Premier Tier</h3>
            <h5>100-Hour Retainer + 20 Free Hours & Quick Support </h5>
            <p>
              The Premier Tier is the ultimate package, 
              offering 120 hours of development time (100 hours + 20 bonus hours) with the commitment to a 2-hour response time. 
              This tier is tailored for clients who need extensive, high-priority development work coupled with the assurance of rapid response and additional hours at no extra cost. 
              It's perfect for critical projects, tight deadlines, or clients who value speed and volume, providing the highest level of service and commitment.
            </p>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="col-sm-3" style={{ height: '200px' }}>
          <div className="addons-card">
            <h3>Boost Tier</h3>
            <h5>5-Hour Add-On</h5>
            <p> Quick 5-hour boost for small tasks or final touches.</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="addons-card">
            <h3>Surge Tier</h3>
            <h5>10-Hour Add-On</h5>
            <p>10 extra hours for intermediate project extensions.</p>
          </div>
        </div>
        <div className="col-sm-3" style={{'height': '200px'}}>
          <div className="addons-card">
            <h3>Momentum Tier</h3>
            <h5>15-Hour Add-On </h5>
            <p>15-hour top-up for significant project expansions.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
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
    <div className="container test-white">
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
