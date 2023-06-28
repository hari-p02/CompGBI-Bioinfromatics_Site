import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod1.css";
import { Link } from "react-router-dom";

const Mod1 = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/DKh7C-TeokU"
  );
  const [active, setActive] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
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

  const data = [
    {
      url: "https://www.youtube.com/embed/DKh7C-TeokU",
      title: "Installing Python",
      thumbnail: "https://i.ytimg.com/vi/DKh7C-TeokU/hqdefault.jpg",
      number: 1,
    },
    {
      url: "https://www.youtube.com/embed/OaCLFdPr5ZQ",
      title: "Basic Syntax",
      thumbnail: "https://i.ytimg.com/vi/OaCLFdPr5ZQ/hqdefault.jpg",
      number: 2,
    },
    {
      url: "https://www.youtube.com/embed/3Oc0DbhA-6Y",
      title: "Strings",
      thumbnail: "https://i.ytimg.com/vi/3Oc0DbhA-6Y/hqdefault.jpg",
      number: 3,
    },
    {
      url: "https://www.youtube.com/embed/b-W4_bgCYbU",
      title: "Lists",
      thumbnail: "https://i.ytimg.com/vi/b-W4_bgCYbU/hqdefault.jpg",
      number: 4,
    },
    {
      url: "https://www.youtube.com/embed/p2u1_uZr1r8",
      title: "Built-In Functions",
      thumbnail: "https://i.ytimg.com/vi/p2u1_uZr1r8/hqdefault.jpg",
      number: 5,
    },
    {
      url: "https://www.youtube.com/embed/5fw6Mo4J0Dk",
      title: "OOP in Python",
      thumbnail: "https://i.ytimg.com/vi/5fw6Mo4J0Dk/hqdefault.jpg",
      number: 6,
    },
    {
      url: "https://www.youtube.com/embed/-PC7Kje6R-4",
      title: "Control Flow",
      thumbnail: "https://i.ytimg.com/vi/-PC7Kje6R-4/hqdefault.jpg",
      number: 7,
    },
    {
      url: "https://www.youtube.com/embed/DysZI59lAlc",
      title: "Modules",
      thumbnail: "https://i.ytimg.com/vi/DysZI59lAlc/hqdefault.jpg",
      number: 8,
    },
    {
      url: "https://www.youtube.com/embed/cTw2KrXpcVc",
      title: "Packages",
      thumbnail: "https://i.ytimg.com/vi/cTw2KrXpcVc/hqdefault.jpg",
      number: 9,
    },
    {
      url: "https://www.youtube.com/embed/H-PW_vp2_x4",
      title: "Plotting",
      thumbnail: "https://i.ytimg.com/vi/H-PW_vp2_x4/hqdefault.jpg",
      number: 10,
    },
  ];

  return (
    <div className="mod1-back">
      <div className="mod1">
        <div className="card-mod2">
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
              Introduction to Python
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
                  <Link to="/">Previous Module!</Link>
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
                  <Link to="/modules/mod2">Next Module!</Link>
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
              {data.map((temp, index) => (
                <div
                  key={index}
                  class={"info " + (active[index] ? "active" : "")}
                  onClick={() => {
                    setVideoUrl(temp.url);
                    let updateactive = [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                    ];
                    updateactive[index] = true;
                    setActive(updateactive);
                    console.log(active[index]);
                  }}
                >
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
    </div>
  );
};

export default Mod1;
