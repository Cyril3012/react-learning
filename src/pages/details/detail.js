import React from "react";

import "./detail.css";
import Resume from "../../assert/Resume.pdf";
import Cyril from "../../assert/Cyril.jpg";
import { BsLinkedin } from "react-icons/bs";
import Personal from "./personal";

const Details = (props) => {
  console.log(props);
  return (
    <div>
      <header>Creating a Portfolio</header>
      <body>
        <div id="container">
          <div id="me">
            <h3>I am</h3>
            <h1>
              <a href="/detais/ff">{props.name}</a>
            </h1>
          </div>
          <div id="cyril">
            <img src={Cyril} alt="cyril" />
          </div>
        </div>

        <button id="download">
          <a href={Resume} download>
            Download CV
          </a>
        </button>
        <a
          id="lk"
          href="https://www.linkedin.com/in/cyrilchandru3012/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <Personal />
      </body>
    </div>
  );
};

export default Details;
