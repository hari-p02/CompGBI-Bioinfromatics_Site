import React, { useState, useEffect, useRef } from "react";
import "../styles/pages_styles/Home.css";
import development from "../images/development.png";
import dna from "../images/dna.png";
import evolution from "../images/evolution.png";
import cell from "../images/cell.png";
import choice from "../images/choice.png";
import Skills from "../componenets/Skills";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [development, dna, evolution, cell, choice];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeType, setFadeType] = useState("fade-in");
  const [isClicked, setIsClicked] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setIsClicked(!isClicked);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFadeType("fade-out");
  //     setTimeout(() => {
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       setFadeType("fade-in");
  //     }, 3000); // Adjust the delay to control the fade-out duration
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="front-intro">
        <div className="card-mod2 temp">
          {/* <div className="images">
            <div className="card">
              <div className={`card__content ${fadeType}`}>
                <img
                  src={images[currentImageIndex]}
                  alt="what you will learn"
                />
              </div>
            </div>
          </div> */}
          <div className="circles">
            <div className="c"></div>
            <div className="c"></div>
            <div className="c"></div>
          </div>

          <div className="browser">
            <div
              className="search-bar"
              ref={searchRef}
              onClick={handleSearchClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.89"
                height="7.887"
                viewBox="0 0 16.89 16.887"
              >
                <path
                  id="Fill"
                  d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z"
                  transform="translate(0.003 0)"
                ></path>
              </svg>
              Introduction Video
              <div
                className="dropdown"
                style={{ display: `${isClicked ? "block" : "none"}` }}
              >
                <div>
                  <Link to="/">Introduction Video</Link>
                </div>
                <div>
                  <Link to="/modules/mod1">Introduction to Python</Link>
                </div>
                <div>
                  <Link to="/modules/mod2">Introduction to R</Link>
                </div>
                <div>
                  <Link to="/modules/mod3">Sequence Analysis</Link>
                </div>
                <div>
                  <Link to="/modules/mod4">Introduction to RNA Sequencing</Link>
                </div>
                <div>
                  <Link to="/modules/mod5">Genomic Variants</Link>
                </div>
                <div>
                  <Link to="/modules/mod6">Evolution and Phylogenetics</Link>
                </div>
                <div>
                  <Link to="/modules/mod7">Applications of Bioinformatics</Link>
                </div>
                <div>
                  <Link to="/modules/mod8">
                    Machine Learning With Bioinformatics
                  </Link>
                </div>
                <div>
                  <Link to="/modules/mod9">Ethics in Bioinformatics</Link>
                </div>
              </div>
            </div>

            <div className="chevrons">
              <div className="prev-module">
                <svg
                  viewBox="0 0 20 20"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="20"
                  id="20"
                >
                  <path
                    transform="translate(6.25 3.75)"
                    d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z"
                    id="Fill"
                  ></path>
                </svg>
                <div>
                  <Link to="/modules">Modules!</Link>
                </div>
              </div>
              <div className="next-module">
                <svg
                  viewBox="0 0 20 20"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="20"
                  id="21"
                >
                  <path
                    transform="translate(6.625 3.75)"
                    d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z"
                    id="Fill"
                  ></path>
                </svg>
                <div>
                  <Link to="/modules/mod1">Next Module!</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-content">
            <div className="welcome">
              <h1>Welcome to the CompGBI Lab's Bioinformatics Course!!!</h1>
              <h3>
                <i>Discover the Power of Data-Driven Biology</i>
              </h3>
            </div>
            <div className="intro-video">
              <iframe
                src="https://www.youtube.com/embed/Nxko-cJNWY8"
                title="placeholder"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="video"
                style={{
                  borderRadius: "30px",
                  border: "none",
                  width: "75%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="expect">
        <h1>What You Will Learn</h1>
      </div>
      <Skills />
      <div className="expect">
        <h1>What To Expect!</h1>
      </div>
      <div className="expect">
        <p>
          <div>
            &emsp;&emsp;Throughout this course, you will embark on a captivating
            journey into the world of Bioinformatics. You will{" "}
            <span>
              delve deep into this fascinating field, acquiring essential skills
              such as analyzing RNA Sequencing data and comprehending genomic
              variations
            </span>
            , among many others.
          </div>
          <br></br>
          <div>
            &emsp;&emsp;Bioinformatics, at its core, combines the principles of
            biology, computer science, and statistics to tackle complex
            biological problems. In this course, you will gain a{" "}
            <span>
              comprehensive understanding of the fundamental concepts and
              methodologies
            </span>{" "}
            used in this interdisciplinary domain.
          </div>
          <br></br>
          <div>
            {" "}
            &emsp;&emsp;One of the key areas you will explore is{" "}
            <span>
              the analysis of RNA Sequencing (RNA-Seq) data. RNA-Seq has
              revolutionized our ability to study gene expression patterns and
              uncover valuable insights into cellular processes.
            </span>{" "}
            By delving into this subject, you will learn how to preprocess and
            normalize raw RNA-Seq data, perform quality control checks, and
            identify differentially expressed genes. Through{" "}
            <span>
              hands-on exercises and practical examples, you will develop the
              skills necessary
            </span>{" "}
            to extract meaningful information from large-scale transcriptomic
            datasets.{" "}
          </div>{" "}
          <br></br>
          <div>
            &emsp;&emsp;Additionally, you will dive into the realm of genomic
            variations.{" "}
            <span>
              Genomes are inherently diverse, and understanding the genetic
              differences between individuals and species is crucial for various
              applications, from medical research to evolutionary studies.
            </span>{" "}
            Throughout the course, you will explore techniques for identifying
            and characterizing genomic variations, such as single nucleotide
            polymorphisms (SNPs), insertions and deletions (indels), and
            structural variations. You will learn how to analyze genomic data
            and interpret the implications of these variations in the context of
            human health and disease.{" "}
          </div>
          <br></br>
          <div>
            &emsp;&emsp;Moreover, this course will expose you to a multitude of
            other captivating topics within the field of Bioinformatics.{" "}
            <span>
              You will explore the principles of sequence alignment,
              phylogenetics, protein structure prediction, and functional
              annotation of genes. These skills will equip you with a
              well-rounded foundation
            </span>{" "}
            to tackle diverse biological questions and contribute to
            cutting-edge research in the field.
          </div>
          <br></br>
          <div>
            {" "}
            Through a combination of{" "}
            <span>
              lectures, practical exercises, and interactive discussions,
            </span>{" "}
            this course aims to empower you with the knowledge and tools
            necessary to navigate the intricate landscape of Bioinformatics. By
            the end of the course, you will be equipped with a skill set that
            will enable you to confidently analyze biological data, unravel the
            mysteries of life encoded in genomes, and make meaningful
            contributions to the ever-expanding field of Bioinformatics.{" "}
          </div>
          <br></br>
          &emsp;&emsp;Join us on this exhilarating educational journey and
          unlock the boundless possibilities that Bioinformatics has to offer!
        </p>
      </div>
      <Link
        className="goto-mods"
        to="/modules"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
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
      </Link>
    </div>
  );
};

export default Home;
