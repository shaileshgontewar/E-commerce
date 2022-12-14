import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  return (
    <>
      <div className="footer-container">
        <div className="column-f1">
          <div>
            <h3>ISHOP</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
            <span className="icon">
              <FaTwitter className="twitter" />
              <FaInstagramSquare className="instagram" />
              <BsFacebook className="facebook" />
            </span>
          </div>
          <div>
            <h3>Contect Us</h3>
            <p>
              Shop: Address Nagpur iShop: address @building 124 Call us now:
              0123-456-789 Email: support@whatever.com
            </p>
          </div>
        </div>
        <div className="column-f2">
          <div>
            <h3> Information</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
              <li>Infomation </li>
            </ul>
          </div>
          <div>
            <h3> Service</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
              <li>Infomation </li>
            </ul>
          </div>
          <div>
            <h3>Extra</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
              <li>Infomation </li>
            </ul>
          </div>
          <div>
            <h3>My Account</h3>
            <span className="icons">
              <BsFacebook className="facebook" />
            </span>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
              <li>Infomation </li>
            </ul>
          </div>
          <div>
            {" "}
            <h3>Our Offers</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
              <li>Infomation </li>
            </ul>
          </div>
        </div>
        <footer>
          <div>copyright &copy; {today.getFullYear()} shaileshTech</div>
          <span className="icon">
            <FaTwitter className="twitter" />
            <FaInstagramSquare className="instagram" />
            <BsFacebook className="facebook" />
          </span>
        </footer>
      </div>
    </>
  );
};

export default Footer;
