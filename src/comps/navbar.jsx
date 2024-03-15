import React, { useState } from 'react';

const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const handleNavLinkClick = (anchorId) => {
        setIsNavCollapsed(true);
        // setTimeout(() => {
        //     const element = document.getElementById(anchorId);
        //     if (element) {
        //         // Navigate to the section
        //         window.location.hash = '#' + anchorId;
        //         // Adjust scroll position
        //         setTimeout(() => {
        //             window.scrollBy(0, -20); // Scroll up by 20px
        //         }, 100); // Delay to ensure the default navigation is complete
        //     }
        // }, 150);
    };

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
                            <a className="nav-link active text-white fs-5 text-center" href="#about" onClick={() => handleNavLinkClick('about')}>About</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" href="#references" onClick={() => handleNavLinkClick('references')}>References</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" href="#packages" onClick={() => handleNavLinkClick('packages')}>Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white fs-5 text-center" href="#partners" onClick={() => handleNavLinkClick('partners')}>Partners</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
