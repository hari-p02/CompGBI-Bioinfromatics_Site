import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod3.css";
import { Link } from "react-router-dom";

const Mod3 = () => {
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
  return (
    <div className="mod3">
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
            RNA Sequencing
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
                <Link to="/modules/mod3">Previous Module!</Link>
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
                <Link to="/modules/mod5">Next Module!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1>Module 4: RNA-sequencing</h1>
          <h2>Overview</h2>
          <p>
            The general purpose of this module is to introduce high school
            students to the exciting world of RNA sequencing, a powerful
            technique used in molecular biology to study gene expression.
            Through this module, students will gain a fundamental understanding
            of RNA sequencing and its applications.
          </p>
          <h2>Learning Objectives</h2>
          <ol>
            <li>
              <p>Define RNA-sequencing.</p>
            </li>
            <li>
              <p>Understand RNA isolation methods.</p>
            </li>
            <li>
              <p>Understand the process of sequence alignment.</p>
            </li>
            <li>
              <p>Understand protein expression.</p>
            </li>
            <li>
              <p>
                Use statistical tests to determine changes in expression levels.
              </p>
            </li>
            <li>
              <p>
                Use the Burrows-Wheeler Aligner to map sequencing reads to a
                reference genome.
              </p>
            </li>
          </ol>
          <h2>Introduction to RNA Sequencing</h2>
          <p>
            &emsp;&emsp; What is RNA sequencing? RNA sequencing is a powerful
            technique that scientists use to explore the important information
            stored in RNA molecules. It helps them figure out what kinds of RNA
            are present in a sample and how much of each type there is. By
            looking at the sequence of RNA molecules, researchers can learn
            about how genes work, find new types of RNA, and understand how
            living things function at a tiny, molecular level. Watch the video
            below to dive into a brief introduction to RNA sequencing.
          </p>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/e6Ol20n2ur0"
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
          <h2>RNA Extraction</h2>
          <p>
            &emsp;&emsp;RNA extraction is a process that scientists use to
            obtain RNA molecules from cells. It is like extracting valuable
            genetic treasure from within a cell’s treasure chest. By carefully
            breaking open the cells and isolating the RNA, researchers can study
            its secrets and uncover important information about how genes are
            expressed and how cells function. It is a crucial step in many
            scientific studies, allowing us to unlock the mysteries of life’s
            blueprint, the RNA. The YouTube video below will teach you how to
            perform an RNA extraction.
          </p>
          {/* <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/IIpcwN7BWZg"
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
          </div> */}
          <h2>Applications</h2>
          <p>
            &emsp;&emsp;RNA sequencing has a lot of exciting applications that
            scientists use to understand more about living things. One of its
            important uses is studying gene expression, which we will be
            learning more about in a later video. By looking at the RNA
            molecules present in cells, scientists can figure out which genes
            are turned on or off, like switches controlling different functions
            in our bodies. RNA sequencing also helps in medical research.
            Scientists can compare RNA from healthy and diseased cells to
            understand what goes wrong in diseases. This can lead to the
            development of new treatments and personalized medicine approaches.
            To learn more about the exciting possibilities in biology and
            medicine that RNA sequencing opens the door to, watch the video
            below.
          </p>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/gjzWJu-2IQ0"
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
          <h2>Mapping Reads & Read Counts</h2>
          <p>
            &emsp;&emsp; In RNA sequencing, scientists take small pieces called
            “reads” from RNA molecules. They then match these reads to a
            reference genome or transcriptome to see which genes are active.
            Read counts show how many times a particular read appears, which
            helps scientists understand gene expression levels. Mapping reads
            and analyzing read counts help uncover how genes work and contribute
            to studying diseases. The following video will provide more
            explanation on mapping reads and read counts.
          </p>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/BCUBCWhTGII"
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
          <h2>Gene Expression</h2>
          <p>
            &emsp;&emsp;RNA sequencing helps scientists understand gene
            expression, which is how genes in our DNA are activated to make RNA
            molecules. By collecting and analyzing RNA molecules from cells,
            scientists can identify which genes are active. This knowledge is
            crucial for understanding how our bodies function, discovering
            disease-related changes, and developing new treatments. Learn more
            about gene expression in the video below.
          </p>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/vLltoyg_6KM"
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
          <h2>Protein Expression</h2>
          <p>
            &emsp;&emsp;RNA sequencing helps scientists study protein
            expression, which is how genes in our DNA make proteins, the
            building blocks of our bodies. By analyzing RNA molecules from
            cells, scientists can figure out which genes are active and
            producing RNA. This information is crucial for understanding how our
            bodies function and finding ways to treat diseases. RNA sequencing
            is an exciting tool that helps us explore the world of proteins and
            their important roles in our health. The video below will explore
            protein expression further.
          </p>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/KeZr8zasYlk"
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
          <h2>Activity</h2>
          <p>
            &emsp;&emsp;In the following activity, students will be introduced
            to the concept of the Burrows-Wheeler Alignment Algorithm and its
            application in DNA sequencing using Python programming. The
            Burrows-Wheeler Alignment Algorithm is a clever technique used in
            DNA and RNA sequencing to find where short sequences of DNA or RNA
            fit into a larger genome. It rearranges the genome’s characters in a
            special way and uses smart indexing to quickly match the sequences.
            By aligning the sequences to the genome, scientists can learn about
            genetic variations, important genes, and how genes work in different
            conditions or diseases. This algorithm helps us unlock important
            information about genes and their roles in biology and medicine.
            Access the Google Colaboratory notebook below to begin the activity.
          </p>
          <p>
            Burrows-Wheeler Alignment Activity:
            <a
              href="https://colab.research.google.com/github/hari-p02/compgbi-bioinformatics-notebooks/blob/master/RNA%20Programming%20BWA%20activity.ipynb"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Google Colab Notebook
            </a>
          </p>
          <h2>Learn More</h2>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/WKAUtJQ69n8"
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
          <ol>
            <li>
              <p>
                <a href="https://www.biosyn.com/faq/what-is-protein-expression.aspx#">
                  https://www.biosyn.com/faq/what-is-protein-expression.aspx#
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-protein-expression-systems.html#2">
                  https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-protein-expression-systems.html#2
                </a>
              </p>
            </li>
            <li>
              <p>
                {" "}
                <a href="https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/biological-interpretation-of-gene-expression-data-2/">
                  https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/biological-interpretation-of-gene-expression-data-2/
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://bio-bwa.sourceforge.net/">
                  https://bio-bwa.sourceforge.net/
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://bio-bwa.sourceforge.net/">
                  https://bio-bwa.sourceforge.net/
                </a>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Mod3;
