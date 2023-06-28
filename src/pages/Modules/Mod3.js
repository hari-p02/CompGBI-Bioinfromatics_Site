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
                <Link to="/modules/mod2">Previous Module!</Link>
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
                <Link to="/modules/mod4">Next Module!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1>Module Outline</h1>
          <p>Learning Objectives</p>
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
          <h1>Introduction to RNA Sequencing</h1>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/wiL-pdMdB4w"
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
          <h2>What is RNA-sequencing?</h2>
          <ul>
            <li>
              DNA extraction methods cannot be directly applied to RNA because
              RNA is structurally very different (
              <a href="https://www.labome.com/method/RNA-Extraction.html">
                https://www.labome.com/method/RNA-Extraction.html
              </a>
              )
            </li>
            <li>
              RNA sequencing is a technique that can examine the quantity and
              sequences of RNA in a sample using next-generation
            </li>
          </ul>
          <p className="text-image">
            <img alt="chart" src="/images/mod4imgs/first.png" />
          </p>
          <h2>How does it work?</h2>
          <h3>1) RNA Extraction</h3>
          <ul>
            <li>
              method: using organic solvents/chaotropic agents (
              <a href="https://www.labome.com/method/RNA-Extraction.html">
                https://www.labome.com/method/RNA-Extraction.html
              </a>
              )
            </li>
          </ul>
          <p className="text-image">
            <img alt="protocol" src="/images/mod4imgs/second.png" />
          </p>
          <ul>
            <li>PCR (polymerase chain reaction)</li>
            <li>enzymatic assays</li>
            <li>TRIzol method</li>
            <li>
              many diff strategies, but all share 3 aims: (
              <a href="https://www.frontiersin.org/articles/10.3389/fmicb.2015.00476/full">
                https://www.frontiersin.org/articles/10.3389/fmicb.2015.00476/full
              </a>
              )
              <ul>
                <li>
                  comprehensive lysis of cells and extraction of intracellular
                  nucleic acids into aqueous solution
                </li>
                <li>
                  the removal of non-nucleic acid organic and inorganic
                  molecules from resultant aqueous extracts
                </li>
                <li>
                  the minimization of nucleic acid losses throughout this
                  purification process
                </li>
              </ul>
            </li>
          </ul>
          <h1>Mapping reads &amp; read counts</h1>
          <ul>
            <li>
              read sequences are usually stored in compressed (gzipped) FASTQ
              files
            </li>
            <li>reads = short DNA fragments — typically 150 bp in length</li>
          </ul>
          <h3>With Alignment</h3>
          <ul>
            <li>
              read sequences aligned to reference genome and counted into
              annotated genes
            </li>
            <li>
              can align reads with HISAT2 — fast and sensitive alignment program
              for mapping sequencing reads
              <ul>
                <li>https://daehwankimlab.github.io/hisat2/</li>
              </ul>
            </li>
            <li>
              alignment generates a BAM file with mapped reads
              <ul>
                <li>
                  BAM file consists of chromosome names &amp; lengths, and
                  alignment section
                </li>
                <li>each file contains read alignments for each sample</li>
              </ul>
            </li>
            <li>finds where each read comes from in the genome</li>
            <li>alternative mappers: STAR, Subread</li>
          </ul>
          <h3>Without Alignment</h3>
          <ul>
            <li>
              unmapped reads = reads that map nowhere on the reference genome
            </li>
            <li>
              these are dumped in a separate bin to analyze easily and
              separately from mapped reads
            </li>
          </ul>
          <h3>Data Analysis</h3>
          <h3>1) Read Quantification</h3>
          <ul>
            <li>counting the number of reads that align to each gene</li>
          </ul>
          <h3>2) Differential Gene Expression Analysis</h3>
          <ul>
            <li>will learn more about this later in this module</li>
          </ul>
          <h3>Normalizing &amp; Transforming Read Counts</h3>
          <ul>
            <li>aligned reads (BAMs) can be converted to counts</li>
          </ul>
          <h3>ACTIVITY</h3>
          <ul>
            <li>
              youtube video:{" "}
              <a href="https://www.youtube.com/watch?v=jA8RI4u_hd8">
                https://www.youtube.com/watch?v=jA8RI4u_hd8
              </a>
            </li>
          </ul>
          <h1>Gene Expression</h1>
          <h2>Differential Gene Expression (DGE)</h2>
          <ul>
            <li>most common application of RNA-sequencing data</li>
            <li>determines which genes are expressed in a cell</li>
            <li>
              tools in R (have a toy data set)
              <ul>
                <li>
                  early tools w simple statistical analysis (T test)
                  <ul>
                    <li>find a simple package</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            <a href="https://www.nature.com/scitable/topicpage/gene-expression-14121669/">
              https://www.nature.com/scitable/topicpage/gene-expression-14121669/
            </a>
          </p>
          <h1>Protein Expression</h1>
          <h2>What is Protein Expression?</h2>
          <ul>
            <li>
              definition: refers to the production of proteins by cells.
              <ul>
                <li>
                  In cancer applications, protein expression can give
                  information about a specific type of cancer, the best
                  treatment to use, and how effective the treatment is
                </li>
                <li>
                  Source:
                  <a href="https://www.cancer.gov/publications/dictionaries/cancer-terms/def/protein-expression">
                    https://www.cancer.gov/publications/dictionaries/cancer-terms/def/protein-expression
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <h2>Transcription &amp; Translation</h2>
          <ul>
            <li>
              <p>3 steps to transcription:</p>
              <ol>
                <li>
                  <p>Initiation</p>
                </li>
                <li>
                  <p>Elongation</p>
                </li>
                <li>
                  <p>Termination</p>
                </li>
              </ol>
            </li>
            <li>
              <p>translation: requires tRNA, mRNA</p>
            </li>
            <li>
              <p>post translation modification</p>
            </li>
          </ul>
          <h2>Recombinant Protein Expression Methods</h2>
          <ul>
            <li>
              strategies: transfecting cells with a DNA vector that contains the
              template and then culturing the cells so that they transcribe and
              translate the desired protein
            </li>
          </ul>
          <p className="text-image">
            <img alt="expression methods" src="/images/mod4imgs/third.png" />
          </p>
          <h2>Mammalian Protein Expression</h2>
          <ul>
            <li>
              mammalian proteins can be used to produce antibodies, complex
              proteins, and proteins for use in functional cell-based assays
            </li>
          </ul>
          <h2>
            <em>FURTHER READINGS</em>:
          </h2>
          <ul>
            <li>
              <a href="https://www.biosyn.com/faq/what-is-protein-expression.aspx#!">
                https://www.biosyn.com/faq/what-is-protein-expression.aspx#!
              </a>
            </li>
            <li>
              <a href="https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-protein-expression-systems.html#2">
                https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-protein-expression-systems.html#2
              </a>
            </li>
          </ul>
          <h1>Differential Expression Analysis</h1>
          <h2>What is Differential Expression Analysis?</h2>
          <ul>
            <li>
              Performing statistical analysis on normalized read count data
              <ul>
                <li>determines changes in expression levels</li>
              </ul>
            </li>
            <li>
              EX: use this to decide, for a given gene, if an observed
              difference in read is significant
              <ul>
                <li>
                  greater than it should be due to natural random variation
                </li>
              </ul>
            </li>
          </ul>
          <h2>Methods</h2>
          <ol>
            <li>
              Negative Binomial (NB) distributions
              <ul>
                <li>edgeR</li>
                <li>DESeq</li>
              </ul>
            </li>
            <li>
              Bayesian Approaches based on NB model
              <ul>
                <li>baySeq</li>
                <li>EBSeq</li>
              </ul>
            </li>
          </ol>
          <h2>Visualizing &amp; Interpreting data</h2>
          <ul>
            <li>
              heatmaps
              <ul>
                <li>
                  can be combined with clustering methods — groups genes/samples
                  based on similarity of gene expression pattern
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-image">
            <img alt="heatmap" src="/images/mod4imgs/fourth.png" />
          </p>
          <ul>
            <li>
              <a href="https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/biological-interpretation-of-gene-expression-data-2/">
                https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/biological-interpretation-of-gene-expression-data-2/
              </a>
            </li>
          </ul>
          <h2>ACTIVITY</h2>
          <ul>
            <li>perform quality control on count data</li>
            <li>
              Use DESeq2 to obtain a list of significantly differentially
              expressed genes
            </li>
            <li>
              visualize expression patterns of differentially expressed genes
            </li>
            <li>
              perform functional analysis on gene lists with R-based tools
            </li>
            <li>
              <a href="https://hbctraining.github.io/DGE_workshop/lessons/04_DGE_DESeq2_analysis.html">
                https://hbctraining.github.io/DGE_workshop/lessons/04_DGE_DESeq2_analysis.html
              </a>
            </li>
          </ul>
          <h1>Activity</h1>
          <ul>
            <li>
              differential expression analysis
              <ul>
                <li>
                  basic statistical analysis
                  <ul>
                    <li>basic T tests</li>
                    <li>nearest neighbor classification</li>
                    <li>regression analysis</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h2>Map sequencing reads to a reference genome</h2>
          <ul>
            <li>
              Burrows-Wheeler Aligner (
              <a href="https://bio-bwa.sourceforge.net/">
                https://bio-bwa.sourceforge.net/
              </a>
              )
            </li>
            <li>
              <a href="https://genomics.sschmeier.com/ngs-mapping/">
                https://genomics.sschmeier.com/ngs-mapping/
              </a>
            </li>
          </ul>
          <h2>Statistical Tests</h2>
          <ul>
            <li>
              Likelihood Ratio Test (LRT) :
              <a href="https://hbctraining.github.io/DGE_workshop/lessons/08_DGE_LRT.html">
                https://hbctraining.github.io/DGE_workshop/lessons/08_DGE_LRT.html
              </a>
              <ul>
                <li>
                  LRT is used to identify any genes that show change in
                  expression across the different levels
                </li>
              </ul>
            </li>
          </ul>
          <h1>REFERENCES</h1>
          <ul>
            <li>
              <p>
                https://www.technologynetworks.com/genomics/articles/rna-seq-basics-applications-and-protocol-299461
              </p>
            </li>
            <li>
              <p>
                https://hbctraining.github.io/Intro-to-rnaseq-hpc-salmon/lessons/Intro-to-RNAseq.html
              </p>
            </li>
            <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4863231/</li>
            <li>https://hbctraining.github.io/Intro-to-R-with-DGE/</li>
            <li>https://www.ncbi.nlm.nih.gov/books/NBK550334/</li>
            <li>
              https://training.galaxyproject.org/training-material/topics/transcriptomics/tutorials/rna-seq-reads-to-counts/tutorial.html
            </li>
            <li>
              https://thesequencingcenter.com/knowledge-base/what-are-unmapped-reads/
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mod3;
