import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod6.css";
import { Link } from "react-router-dom";

const Mod6 = () => {
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
    <div className="mod6">
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
            Applications of Bioinfromatics
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
                <Link to="/modules/mod5">Previous Module!</Link>
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
                <Link to="/modules/mod7">Next Module!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1>Module Outline</h1>
          <h2>Learning Objectives</h2>
          <ol>
            <li>Learn about the various applications of Bioinformatics.</li>
          </ol>
          <h1>Introduction</h1>
          <ul>
            <li>
              Bioinformatics can be applied in numerous sectors since it is such
              a vast field of study.
            </li>
            {/* <div className="text-video">
              <iframe
                src="https://www.youtube.com/embed/uSNc44V6GZQ"
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
          </ul>
          <h1>Bioinformatics in Medicine</h1>
          <p>
            https://aimst.edu.my/event-news/what-bioinformatics-how-used-medicine/
            Applications of bioinformatics in medicine,preventative medicine and
            gene therapy.
          </p>
          <h3>Drug Discovery</h3>
          <ul>
            <li>infectious diseases — COVID19, MonkeyPox</li>
            <li>
              developing cures using bioinformatics for a more rational and
              structure-based drug design
              <ul>
                <li>
                  successful and more reliable drug design process + reduced
                  time and cost of drug development
                </li>
                <li>
                  based on molecular modeling and simulation Personalized
                  Medicine
                </li>
              </ul>
            </li>
            <li>medicine to tailor each person’s genetic make-up</li>
            <li>
              can predict susceptibility to certain diseases, provide proper
              meds, and proper dosage
            </li>
            <li>
              bioinformatics analyzes data from genome sequencing/ microarray
              gene expression analysis in -search of mutations or gene variants
              that could affect drug response / can improve disease treatment
            </li>
          </ul>
          <h3>Preventive Medicine</h3>
          <ul>
            <li>
              medicine in populations/communities
              <ul>
                <li>
                  research methods in biostatistics, bioinformatics, and
                  epidemiology to understand patterns and causes of health and
                  disease
                </li>
                <li>can create programs to prevent diseases</li>
              </ul>
            </li>
            <li>
              identifying diseases at an early stage/ predicting disease is done
              through bioinformatics tools to analyze genomics, proteomics, and
              metabolomics data for possible disease biomarkers
            </li>
          </ul>
          <h3>Gene Therapy</h3>
          <ul>
            <li>
              method of replacing defective genes w a functional one in the
              cells of a patient
              https://leverageedu.com/blog/application-of-bioinformatics/
            </li>
          </ul>
          <h3>Antibiotic Resistance</h3>
          <ul>
            <li>
              <p>Antibiotics used to manage infectious diseases</p>
              <ul>
                <li>Emergence of resistant strains of bacteria</li>
                <li>
                  <strong>
                    <em>ACTIVITY</em>
                  </strong>
                  : reading —
                  https://pubs.rsc.org/en/content/articlelanding/2020/ra/d0ra01484b
                </li>
              </ul>
            </li>
          </ul>
          <h1>Cancer Research</h1>
          <h3>Gene Therapy</h3>
          <ul>
            <li>altering gene expression — as discussed above</li>
          </ul>
          <h3>Single Cell Sequencing</h3>
          <ul>
            <li>analyze changes &amp; patterns</li>
            <li>
              https://molecularneurodegeneration.biomedcentral.com/articles/10.1186/s13024-022-00517-z
            </li>
            <li>
              <strong>
                <em>ACTIVITY</em>
              </strong>
              : youtube video: https://www.youtube.com/watch?v=_irVsLyXe38
            </li>
          </ul>
          <h1>Climate</h1>
          <h3>Climate Change</h3>
          <ul>
            <li>
              Bioinformatics as a tool to counter climate change :
              https://www.sciencedirect.com/science/article/pii/B978012816483900013X
            </li>
            <li>
              Sequencing microbial genome of microbes that can reduce levels of
              carbon dioxide and other greenhouse gases
              <ul>
                <li>
                  https://www.semanticscholar.org/paper/Role-of-Bioinformatics-in-Climate-Change-Studies-Sinha/c03d803cacf3ab486f5e33e2cd70343ce06270d5
                </li>
              </ul>
            </li>
            <li>alternative energy sources</li>
            <li>waste clean-up</li>
            <li>
              biofuels: https://www.energy.gov/eere/bioenergy/biofuel-basics
            </li>
          </ul>
          <h3>Crop Improvement</h3>
          <ul>
            <li>
              https://pubmed.ncbi.nlm.nih.gov/26926905/#:~:text=Bioinformatics%2C
              when combined with genomics,production of climate ready crops.
            </li>
            <li>Accelerated production of climate ready crops</li>
            <li>maintains food security</li>
            <li>
              https://pubmed.ncbi.nlm.nih.gov/26926905/#:~:text=Bioinformatics%2C
              when combined with genomics,production of climate ready crops.
            </li>
            <li>pest control</li>
            <li>crop patterns</li>
          </ul>
          <h1>Biotechnology</h1>
          <h3>What is Biotechnology?</h3>
          <ul>
            <li>
              using scientific methods with organisms to produce new products or
              new forms of organisms
            </li>
          </ul>
          <h3>GMO vs. GEO</h3>
          <ul>
            <li>GMO — genetically modified organisms</li>
            <li>
              GEO — genetically enhanced organisms
              <ul>
                <li>both alter natural genetic material of the organism</li>
              </ul>
            </li>
          </ul>
          <h3>What are the Areas of Biotechnology?</h3>
          <ul>
            <li>organismic</li>
            <li>molecular</li>
          </ul>
          <h3>Important Figures</h3>
          <ul>
            <li>
              Rosalind Elsie Franklin
              <ul>
                <li>
                  research led to the discovery of the double helix structure of
                  DNA
                </li>
              </ul>
            </li>
            <li>
              James Watson and Francis Crick
              <ul>
                <li>discovered DNA</li>
              </ul>
            </li>
            <li>
              Mary-Claire King
              <ul>
                <li>mapped human genes for research of cancer treatments</li>
              </ul>
            </li>
          </ul>
          <h1>Gene Editing</h1>
          <p>
            https://www.bio.org/what-biotechnology - microbial genome - GMOs -
            stem cell therapy
          </p>
          <h3>CRISPr</h3>
          <p>
            https://crisprtx.com/gene-editing/crispr-cas9 -{" "}
            <strong>
              <em>ACTIVITY</em>
            </strong>
            : Podcast about CRISPr —
            https://radiolab.org/episodes/antibodies-part-1-crispr
          </p>
          <h1>Forensics Science</h1>
          <p>
            https://academic.oup.com/bib/article/8/2/117/221568
            https://www.fuuastjb.org/index.php/fuuastjb/article/download/21/21
          </p>
          <h3>DNA Markers</h3>
          <ul>
            <li>Short tandem repeats (STR)</li>
            <li>single nucleotide polymorphisms (SNPs)</li>
            <li>mitochondrial genome polymorphisms (mtDNA)</li>
          </ul>
          <h1>8. Activities</h1>
          <ul>
            <li>
              Youtube Video:
              https://www.youtube.com/watch?v=EpL8NZwWF-U&amp;t=99s
            </li>
            <li>
              Youtube Video:
              https://www.youtube.com/watch?v=ku1oxJq14AA&amp;list=PLRawchbmbd_jHpFb_Bl58ap6sFQWweRZ_&amp;index=3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mod6;
