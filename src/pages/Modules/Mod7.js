import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod1.css";
import { Link } from "react-router-dom";

const Mod7 = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/DKh7C-TeokU"
  );
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

  const data = [];

  return (
    <>
      <div className="mod1">
        <div className="card-mod1">
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
              Machine Learning With Bioinformatics
              <div
                className="dropdown"
                style={{ display: `${isClicked ? "block" : "none"}` }}
              >
                <div>
                  <Link to="/modules/mod1">Introduction to Python</Link>
                </div>
                <div>
                  <Link to="/modules/mod2">Sequence Analysis</Link>
                </div>
                <div>
                  <Link to="/modules/mod3">Introduction to RNA Sequencing</Link>
                </div>
                <div>
                  <Link to="/modules/mod4">Genomic Variants</Link>
                </div>
                <div>
                  <Link to="/modules/mod5">Evolution and Phylogenetics</Link>
                </div>
                <div>
                  <Link to="/modules/mod6">Applications of Bioinformatics</Link>
                </div>
                <div>
                  <Link to="/modules/mod7">
                    Machine Learning With Bioinformatics
                  </Link>
                </div>
                <div>
                  <Link to="/modules/mod8">Ethics in Bioinformatics</Link>
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
                  <Link to="/modules/mod6">Previous Module!</Link>
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
                  <Link to="/modules/mod8">Next Module!</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="video-player">
            <iframe
              src={videoUrl}
              title="placeholder"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="video"
              style={{ borderRadius: "5px", border: "none", width: "100%" }}
            ></iframe>
            <div className="players">
              {data.map((temp) => (
                <div class="info" onClick={() => setVideoUrl(temp.url)}>
                  <div className="num">{temp.number}</div>
                  <img src={temp.thumbnail} alt="Video Thumbnail" />
                  <div>
                    <div className="title">{temp.title}</div>
                    <div className="account">CompGBI Lab</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="collab">
        Click{" "}
        <a href="https://www.google.com/" rel="noreferrer" target="_blank">
          &nbsp;here&nbsp;
        </a>{" "}
        to access the Google Collab Notebook used in the videos!
      </p>
    </>
  );
};

export default Mod7;
