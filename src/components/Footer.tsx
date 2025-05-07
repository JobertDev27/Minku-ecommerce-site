import { Link } from "react-router";

import fb from "../images/facebook.webp";
import x from "../images/twitter.webp";
import mail from "../images/email.webp";
import insta from "../images/instagram.webp";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-title">
          <h1>Minku</h1>
        </div>
        <div className="footer-nav">
          <div className="menu-footer">
            <b>Menu</b>
            <Link to="/">Home</Link>
            <Link to="/Store">Store</Link>
            <Link to="/Cart">Cart</Link>
          </div>
          <div className="category-footer">
            <b>Categories</b>
            <p>Clothing</p>
            <p>Bags</p>
            <p>Jewelry</p>
            <p>Cosmetics</p>
          </div>
        </div>
        <div className="footer-contact">
          <p>Phone: +123 456 789</p>
          <p>Email: Minkusupport@minku.store</p>
          <div className="socials">
            <img src={fb} alt="" />
            <img src={x} alt="" />
            <img src={mail} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
      <div className="creator-footer">
        <p>POWERED BY: DUMMYJSON API</p>
        <p>COPYRIGHT @2025</p>
        <p>DESIGNED BY: JOBERTDEV27</p>
      </div>
    </footer>
  );
}
