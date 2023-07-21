import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod1.css";
import { Link } from "react-router-dom";

const Mod7 = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/tRYQE5hlCUU"
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
      url: "https://www.youtube.com/embed/tRYQE5hlCUU",
      title: "Introduction",
      thumbnail: "https://i.ytimg.com/vi/tRYQE5hlCUU/hqdefault.jpg",
      number: 1,
    },
    {
      url: "https://www.youtube.com/embed/GkbQTqnHuJE",
      title: "What is Artificial Intelligence?",
      thumbnail: "https://i.ytimg.com/vi/GkbQTqnHuJE/hqdefault.jpg",
      number: 2,
    },
    {
      url: "https://www.youtube.com/embed/NKwv4pFVIkg",
      title: "How does Aritifical Intelligence Learn?",
      thumbnail: "https://i.ytimg.com/vi/NKwv4pFVIkg/hqdefault.jpg",
      number: 3,
    },
    {
      url: "https://www.youtube.com/embed/13CiWzfUlOU",
      title: "Linear Regression",
      thumbnail: "https://i.ytimg.com/vi/13CiWzfUlOU/hqdefault.jpg",
      number: 4,
    },
    {
      url: "https://www.youtube.com/embed/a_IECAot7eo",
      title: "Linear Regression (Code)",
      thumbnail: "https://i.ytimg.com/vi/a_IECAot7eo/hqdefault.jpg",
      number: 5,
    },
    {
      url: "https://www.youtube.com/embed/3qHSOiLuuJg",
      title: "Data Formats",
      thumbnail: "https://i.ytimg.com/vi/3qHSOiLuuJg/hqdefault.jpg",
      number: 6,
    },
    {
      url: "https://www.youtube.com/embed/mpUP2FJiz1U",
      title: "KMeans Clustering",
      thumbnail: "https://i.ytimg.com/vi/mpUP2FJiz1U/hqdefault.jpg",
      number: 7,
    },
    {
      url: "https://www.youtube.com/embed/FtlrntOyLtY",
      title: "Mean Shift Clustering",
      thumbnail: "https://i.ytimg.com/vi/FtlrntOyLtY/hqdefault.jpg",
      number: 8,
    },
  ];

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
                  <Link to="/modules/mod7">Previous Module!</Link>
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
                  <Link to="/modules/mod9">Next Module!</Link>
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
              <div class="info-code">
                <div className="code-link">
                  <p className="collab">
                    <p>
                      Click
                      <a
                        href="https://colab.research.google.com/github/hari-p02/compgbi-bioinformatics-notebooks/blob/master/Bioinfromatics_Modules_Machine_Learning.ipynb"
                        rel="noreferrer"
                        target="_blank"
                      >
                        &nbsp;here&nbsp;
                      </a>
                      to access the Google
                    </p>{" "}
                    <p>Collab Notebook used in the videos!</p>
                    <p>
                      And
                      <a
                        href="https://drive.google.com/drive/u/1/folders/1srcIoid_URYX86jnCsxaISDDVYix4e5P"
                        rel="noreferrer"
                        target="_blank"
                      >
                        &nbsp;here&nbsp;
                      </a>
                      to access
                    </p>{" "}
                    <p>the activity!</p>
                  </p>
                </div>
              </div>
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
    </>
  );
};

export default Mod7;
