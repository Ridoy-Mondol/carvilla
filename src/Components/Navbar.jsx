import {HashLink as Link} from "react-router-hash-link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [position, setPosition] = useState (0);
  const [isTop, setIsTop] = useState(true);
  const [showNav, setShowNav] = useState (false);

  useEffect(() => {
    const handleScroll = () => {
      const curPosition = window.pageYOffset;
      setPosition(curPosition);
      setIsTop(curPosition === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showNavbar = () => {
    setShowNav (!showNav);
  }
  return (
    <nav className={`nav-div ${isTop ? '' : 'scrolled'}`} >
      <div className="mobile-bar">
      <i class={`fa-solid ${showNav ? "fa-xmark" : "fa-bars"}`} onClick={showNavbar}></i>
      </div>
       <div>
       <Link exact activeClassName="active-page" className="nav-brand" aria-current="page" to="#home" smooth>CARVILLA</Link>
       </div>
       <div className={`link-div ${showNav ? "" : "hideMobile"}`}>
       <Link exact activeClassName="active-page" className="link home-link" aria-current="page" to="#home" smooth={{ duration: 3000 }}
       >Home</Link>
       <Link exact activeClassName="active-page" className="link" aria-current="page" to="#service" smooth={{ duration: 3000 }}
       >Service</Link>
       <Link exact activeClassName="active-page" className="link" aria-current="page" to="#featured-car" 
       smooth={{ duration: 3000 }}
       >Featured Cars</Link>
       <Link exact activeClassName="active-page" className="link" aria-current="page" to="#new-car" smooth={{ duration: 3000 }}
       >New Cars</Link>
       <Link exact activeClassName="active-page" className="link" aria-current="page" to="#testimonial" smooth={{ duration: 3000 }}
       >Testimonial</Link>
       <Link exact activeClassName="active-page" className="link" aria-current="page" to="#brand" smooth={{ duration: 3000 }}
       >Brands</Link>
       <Link exact activeClassName="active-page" className="link" aria-current="page" to="#contact" smooth={{ duration: 3000 }}
       >Contact</Link>
       </div>
    </nav>
  )
}

export default Navbar
