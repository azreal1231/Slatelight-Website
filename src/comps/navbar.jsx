const NavBar = () => {
return <>
<nav className="navbar navbar-expand-lg my-navbar">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img style={{ maxHeight: '70px', maxWidth: '100%', height: 'auto' }} src="/imgs/Logo.png" alt="logo" className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#packages">Packages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#about">References</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#packages">Partners</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</>
}

export default NavBar