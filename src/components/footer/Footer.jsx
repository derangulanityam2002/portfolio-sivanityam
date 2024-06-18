import React from "react";
import "./footer.css";
import {
  UilInstagram,
  UilGithubAlt,
  UilFacebookF,
  UilBloggerAlt,
} from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pawnesh Kumar</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/sivanityam3/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilInstagram className="uil-icon" />
          </a>

          <a
            href="https://github.com/derangulanityam2002"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilGithubAlt className="uil-icon" />
          </a>

          <a
            href="https://www.facebook.com/nitya.raja.18/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilFacebookF className="uil-icon" />
          </a>

          <a
            href=""
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilBloggerAlt className="uil-icon" />
          </a>
        </div>
        <span className="footer__copy">
          &#169;Sivanityam.All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
