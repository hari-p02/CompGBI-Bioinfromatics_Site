import React, { useEffect, useState } from "react";
import "../styles/pages_styles/Home.css";
import development from "../images/development.png";
import dna from "../images/dna.png";
import evolution from "../images/evolution.png";
import cell from "../images/cell.png";
import choice from "../images/choice.png";
import Skills from "../componenets/Skills";

const Home = () => {
  const images = [development, dna, evolution, cell, choice];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeType, setFadeType] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeType("fade-out");
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeType("fade-in");
      }, 3000); // Adjust the delay to control the fade-out duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="front-intro">
        <div className="front-card">
          <div className="images">
            <div className="card">
              <div className={`card__content ${fadeType}`}>
                <img
                  src={images[currentImageIndex]}
                  alt="what you will learn"
                />
              </div>
            </div>
          </div>
          <div className="intro-content">
            <div>
              <h1>Welcome to the CompGBI Lab's Bioinformatics Course!!!</h1>
              <i>Discover the Power of Data-Driven Biology</i>
            </div>
          </div>
        </div>
      </div>
      <div className="expect">
        <h2>What You Will Learn</h2>
      </div>
      <Skills />
      <div className="expect">
        <h2>What To Expect!</h2>
      </div>
      <div className="expect">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="highlight">
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>{" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint{" "}
          <span className="highlight">
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          </span>{" "}
          mollit anim id est laborum.
        </p>
      </div>
      <div className="goto-mods">
        <button class="button">
          <svg
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="26px"
          >
            <path
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              fill="currentColor"
            ></path>
          </svg>
          Go To Modules
        </button>
      </div>
    </div>
  );
};

export default Home;
