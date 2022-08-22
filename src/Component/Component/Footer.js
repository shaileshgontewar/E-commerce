import React from "react";

const Footer = () => {
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
            <img src="./images/Web/facebook.svg" alt="ff" />
            <img src="./images/Web/twitter.svg" alt="tt" />
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
            <p>About Us </p>
            <p>Privacy Policy</p>
            <p>Terms Conditions</p>
            <p>Infomation </p>
          </div>
          <div>
            <h3> Service</h3>
          </div>
          <div>
            <h3>Extra</h3>
          </div>
          <div>
            <h3>My Account</h3>
          </div>
          <div>
            <h3>Useful Links</h3>
          </div>
          <div>
            {" "}
            <h3>Our Offers</h3>
          </div>
        </div>
        <footer>All right reserved by ShaileshTech</footer>
      </div>
    </>
  );
};

export default Footer;
