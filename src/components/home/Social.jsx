import React from "react";
import {
  UilInstagram,
  UilGithubAlt,
  UilFacebookF,
  UilBloggerAlt,
} from "@iconscout/react-unicons"; // Import necessary icons
// Import your CSS file for styling

const Social = () => {
  return (
    <div className="home__social">
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
        href="https://webbloggerhtml.blogspot.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilBloggerAlt className="uil-icon" />
      </a>
    </div>
  );
};

export default Social;
