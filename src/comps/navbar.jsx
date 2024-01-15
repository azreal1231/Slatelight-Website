import React, { useState } from 'react';

const NavBar = () => {
    // State to manage the collapse of the navbar
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // Function to toggle the navbar collapse state
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg my-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img style={{ maxHeight: '70px', maxWidth: '100%', height: 'auto' }} src="/imgs/Logo.png" alt="logo" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNav" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#about" onClick={() => setIsNavCollapsed(true)}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#references" onClick={() => setIsNavCollapsed(true)}>References</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#packages" onClick={() => setIsNavCollapsed(true)}>Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" aria-current="page" href="#partners" onClick={() => setIsNavCollapsed(true)}>Partners</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
