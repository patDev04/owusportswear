import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "../../Images/logo-black.svg";
// import pstudio from '../Images/pstudio.png';
import card from "../../Images/cards-payment.png";

function Footer() {
  return (
    <>
      <section>
        <footer className="footer">
          <section className="footer__con">
            <div className="footer__logo-container">
              <img src={logo} alt="owu-sportswear" className="footer__logo" />
              <span className="footer__company">
                OWU sportswear ltd
                <br />
                Lagos. Nigeria
              </span>
            </div>

            <div className="footer__section">
              <h2 className="footer__header">Online Shopping</h2>
              <ul className="footer__link-container">
                <li className="footer__items">
                  <Link className="footer__links" to="/">
                    Home
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    About
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Team Kit
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Jersey Gallery
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Sport Gist
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h2 className="footer__header">Support</h2>
              <ul className="footer__link-container">
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Privacy
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    customer service
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Terms & conditions
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Refund Policy
                  </Link>
                </li>
                <li className="footer__items">
                  <Link className="footer__links" to="about">
                    Cancellation & Return
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h2 className="footer__header">Follow Us</h2>
              <ul className="footer__link-container">
                <li className="footer__items">
                  <GrFacebookOption className="footer__icon" />
                  <Link className="footer__links" to="/">
                    Facebook
                  </Link>
                </li>
                <li className="footer__items">
                  <AiOutlineTwitter className="footer__icon" />
                  <Link className="footer__links" to="about">
                    Twitter
                  </Link>
                </li>
                <li className="footer__items">
                  <AiFillInstagram className="footer__icon" />
                  <Link className="footer__links" to="about">
                    Instagram
                  </Link>
                </li>
                <li className="footer__items">
                  <AiFillLinkedin className="footer__icon" />
                  <Link className="footer__links" to="about">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h2 className="footer__header">Contact Info</h2>
              <ul className="footer__link-container">
                <li className="footer__items">
                  <Link className="footer__links" to="/">
                    0800 123 2584
                  </Link>
                </li>
                <span className="footer__time">
                  Timings: 9 AM to 6 <br /> PM Available: Monday to Saturday{" "}
                  <br /> Off: Sundays & Holidays
                </span>
                <li className="footer__email">email@onusportswear.com</li>
                <img src={card} alt="cards" className="payment" />
              </ul>
            </div>
          </section>
        </footer>
      </section>
      <footer className="bottom-footer">
        <p>Copyright © 2023 OWU | All rights reserved.</p>
        <p>PatMayWebDev</p>
      </footer>
    </>
  );
}

export default Footer;
