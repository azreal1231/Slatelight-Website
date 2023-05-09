import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    {/* <a class="navbar-brand" href="#">Slatelight</a> */}
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
  {/* Navbar */}
  {/* Full Page Intro */}
  <div
    className="view"
    style={{
      backgroundImage: "url(imgs/top_background.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
    {/* <div class="view" style="background-image: url(/static/index_page/img/stock-photo-web-or-application-development-business-and-technology-concept-programmer-man-software-developer-1157354179.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;"> */}
    {/* Mask & flexbox options*/}
    <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
      {/* Content */}
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">
            <b>“Websites promote you 24/7: No employee will do that.”</b>
          </h1>
          <p className="lead" style={{ fontSize: 30 }}>
            Paul Cookson
          </p>
        </div>
      </div>
    </div>
  </div>
  <section className="About  text-sm-center text-center pt-4" align="center">
    <a name="About" />
    <h2 style={{ color: "azure" }}>About</h2>
    <p className="text-sm-center">
      Slatelight | Web development is focused on providing new modern,
      <br />
      simple effective website's with the ability to make online
      <label style={{ textDecoration: "underline" }}>bookings/payments</label>
      for your bussiness.
      <br />
    </p>
  </section>
  <section className="About  text-sm-center text-center pb-3" align="center">
    <a name="Services" />
    <h2 style={{ color: "azure" }}>Services</h2>
    <div className="container">
      <div className="card-deck">
        <div
          className="card border border-secondary rounded"
          style={{ background: "transparent" }}
        >
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h5 className="card-title">Business Automation</h5>
            <p className="card-text"></p>
            <p className="text-info" style={{ fontSize: "medium" }}>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga eius quo porro corrupti eligendi. Laborum excepturi sint ad a veritatis molestias doloribus totam labore nulla quam aut, tempora iure! */}
            </p>
            <ul className="" align="left">
              <li>Customer relationship management 'CRM'</li>
              <li>Custom business management platforms</li>
              <li>Tracking and reporting</li>
              <li>Online Payments</li>
            </ul>
            <p />
            {/*                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>*/}
          </div>
        </div>
        <div
          className="card border border-secondary rounded"
          style={{ background: "transparent" }}
        >
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h5 className="card-title">Website's</h5>
            <p className="card-text text-info"></p>
            <p className="text-info" style={{ fontSize: "medium" }}>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga eius quo porro corrupti eligendi. Laborum excepturi sint ad a veritatis molestias doloribus totam labore nulla quam aut, tempora iure! */}
            </p>
            <ul align="left">
              <li>Website Design/Development</li>
              <li>Domain Registration/Management</li>
            </ul>
            <p />
            {/*                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>*/}
          </div>
        </div>
        <div
          className="card border border-secondary rounded"
          style={{ background: "transparent" }}
        >
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h5 className="card-title">Android</h5>
            <p className="text-info" style={{ fontSize: "medium" }}>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga eius quo porro corrupti eligendi. Laborum excepturi sint ad a veritatis molestias doloribus totam labore nulla quam aut, tempora iure! */}
            </p>
            <div align="center">
              <ul align="left">
                <li>Android For Business</li>
                <li>Custom Point Of Sale Apps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card-deck pt-4">
        <div
          className="card border border-secondary rounded"
          style={{ background: "transparent" }}
        >
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h5 className="card-title">Hosting</h5>
            {/* <p class="text-info" style="font-size: medium;">
            Having all your information on the cloud is very importent, Slatelight uses <a target="_blank" href="https://www.digitalocean.com/"><B>Digital Ocean</B></a>  for all our projects
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum, molestias animi minima iusto quae quasi tempore eaque eum, impedit sequi, nobis eligendi minus neque. Fugiat ipsum rem quisquam molestiae.
          </p> */}
            <ul align="left">
              <li>Website Hosting</li>
              <li>DataBase Hosting</li>
              <li>CRM Hosting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="parallax">
    {/*this will be that img that moves in the background*/}
    <div className="parallax-inner"></div>
  </section>
  <section className="Contact">
    <a name="Contact" />
    <h2 style={{ color: "azure" }}>Contact</h2>
    {/* <p>My Name <br class="break"> <a href="mailto:edwardjack91@gmail.com"> edwardjack91@gmail.com</a> */}
    <br className="break" />
    <p>
      <a style={{ color: "azure" }} href="tel:0764169752">
        27-76-416-9752
      </a>
      <br className="break" />
    </p>
    <p>
      <a style={{ color: "azure" }} href="mailto:info@slatelight.co.za">
        info@slatelight.co.za
      </a>
      {/*        `<p>12 Street Road <br class="break">Western Cape  <br class="break">Cape Town<br class="break"> 19000</p>*/}
    </p>
  </section>
  <div className="footer position-absolute w-100 pt-2">
    <p>©Slatelight.co.za 2K20</p>
  </div>
</>

  )
}

export default App
