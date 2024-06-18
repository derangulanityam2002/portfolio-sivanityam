import React from "react";
import "./scrollup.css";
import { UilArrowUp } from "@iconscout/react-unicons"; // Import the specific icon

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <UilArrowUp className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;
