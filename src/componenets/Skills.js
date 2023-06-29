import React from "react";
import "../styles/componenet_styles/Skills.css";
import mod2 from "../images/mod2.png";
import mod3 from "../images/mod3.png";
import mod4 from "../images/mod4.png";
import mod5 from "../images/mod5.png";
import mod6 from "../images/mod6.png";
import mod7 from "../images/mod7.png";
import mod8 from "../images/mod8.png";
import mod9 from "../images/mod9.png";

const Skills = () => {
  return (
    <div className="parent-skills-container">
      <div className="skills-container">
        <div className="card-container">
          <img src={mod2} alt="" />
          <div className="description">
            <h3>Coding in Python</h3>
            <p>Dont worry if you do not know any Python!</p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod3} alt="" />
          <div className="description">
            <h3>Analyzing Seqeunces</h3>
            <p>How can we work with large DNA-seq data?</p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod4} alt="" />
          <div className="description">
            <h3>RNA Seqeuncing</h3>
            <p>RNA is Crucial for DNA Expression!</p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod5} alt="" />
          <div className="description">
            <h3>Working with DNA Variation</h3>
            <p>
              How does one DNA base pair completely alter traits from human to
              human?
            </p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod6} alt="" />
          <div className="description">
            <h3>Understanding Phylogenetic Trees</h3>
            <p>Lets Work With Evolution!</p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod7} alt="" />
          <div className="description">
            <h3>Machine Learning w/ Bioinfrmatics</h3>
            <p>Clustering Applications!</p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod8} alt="" />
          <div className="description">
            <h3>Applications of Bioinformatics</h3>
            <p>There is so much you can do!</p>
          </div>
        </div>
        <div className="card-container">
          <img src={mod9} alt="" />
          <div className="description">
            <h3>Bioinformatic Ethics</h3>
            <p>Gotta follow the rules...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
