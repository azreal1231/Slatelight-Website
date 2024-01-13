const PageHeader = () => {
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
</>
}

export default PageHeader