import {NavLink} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";
const Contact = () => {
    return (
      <>
      <div id="contact">
        <div className="footer-container">
        <div className="footer-border">
        <div className="footer-div">

        <div className="footer-part">
          <h2 className="footer-head">CARVILLA</h2>
          <div className="foot-desc">
           Thank you for visiting CakeZone! Enjoy our delightful treats and savor the sweetness. Until next time – see you again for more delicious moments!
           </div>
          </div>

          <div className="footer-link-div about-carvilla">
            <h4 className="footer-head small-head">ABOUT CARVILLA</h4>
            <div className="margin-list">
            <li className="footer-list">
            <Link exact activeClassName="active-page" className="foot-link" aria-current="page" to="#service" smooth>
            Our Services
            </Link>
            </li>
            <li className="footer-list">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/career">
            Career
            </NavLink>
            </li>
            <li className="footer-list">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/policy">
            Privacy Policy
            </NavLink>
            </li>
            <li className="footer-list">
            <Link exact activeClassName="active-page" className="foot-link" aria-current="page" to="#contact" smooth>
            Contact Us
            </Link>
            </li>
            </div>
          </div>

          <div className="footer-link-div top-brands">
            <h4 className="footer-head small-head">TOP BRANDS</h4>
            <div className="margin-list">
            <li className="footer-list">
            BMW
            </li>
            <li className="footer-list">
            Lamborghini
            </li>
            <li className="footer-list">
            Camaro
            </li>
            <li className="footer-list">
            Audi
            </li>
            <li className="footer-list">
            Ferrari
            </li>
            <li className="footer-list">
            Land Rover
            </li>
            </div>
          </div>

          <div className="footer-part newsletter-div">
            <h4 className="footer-head small-head">NEWSLETTER</h4>
            <div className="newsletter">
            Sign up for our newsletter to get the latest cake news and exclusive offers delivered straight to your inbox
            <div className="footer-input-div">
            <input type = "email" className="footer-input" placeholder="Your Email"/>
            <button type="button" className="footer-btn">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            </div>
            </div>
          </div>
          
        </div>
        </div>

        </div>
        </div>

        <div className="footer-end">
          <span>&copy; {new Date().getFullYear()} CARVILLA All Rights Reserved By Md. Ahatashamul Islam Mondol </span>
        </div>

        </>
    );
}
export default Contact;