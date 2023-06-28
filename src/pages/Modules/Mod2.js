import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod2.css";
import { Link } from "react-router-dom";

const Mod2 = () => {
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
    <div className="mod2">
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
            Sequence Analysis
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
                <Link to="/modules/mod1">Previous Module!</Link>
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
                <Link to="/modules/mod3">Next Module!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1>Module 2: Sequence Analysis</h1>
          <h2>Introduction</h2>
          <p>
            &emsp;&emsp; A particularly exciting area of genomics to teach right
            now is sequence analysis. Ever since the double helix structure of
            DNA was discovered in 1953, the ability to read the individual
            A,C,G, and T's of an organism's genome became possible. The first
            successful DNA sequencing technology was proposed in the mid 1970s,
            involving the laborious process of inputting every single nucleotide
            into the computer. Since then, researchers have continued to build
            upon the best available methods, leading to countless technological
            innovations and biological discoveries whose significance cannot be
            overstated.{" "}
          </p>
          <p className="text-image">
            <img alt="Cost Chart" src="/images/mod3imgs/first.png" />
          </p>
          <p>
            &emsp;&emsp;Until relatively recently, experiments involving
            sequencing data were either unattainable or impractical for most
            researchers. This fact is not from a lack of importance - many
            important problems in biology and medicine can only be solved
            through sequencing data - but because there have always been (and
            still are) several barriers to conducting DNA sequencing
            experiments. These barriers can be summarized as follows: available
            computing power, accessible databases, and the cost of sequencing
            itself.{" "}
          </p>
          <p>
            &emsp;&emsp;What makes sequence analysis so exciting right now is
            the exponential growth over the last decade in all three areas, and
            with few signs of slowing down. Studying DNA and RNA sequences has
            become accessible for researchers at all levels, and has even become
            commercially viable. At the time of writing this course, anyone with
            a laptop can run a sequencing experiment, though at a limited scale
            (as we will demonstrate). The goal of this module is for the reader
            to obtain a solid understanding of how genetic sequences are studied
            and provide hands-on experience through modern tools.
          </p>
          <h2>What is sequence analysis?</h2>
          <p>
            &emsp;&emsp;In biology, a sequence is any molecular structure with
            the following two properties: the structure is composed of many
            repeating monomers chained together, and those monomers are arranged
            in a particular order. These properties are enough to narrow what
            constitutes a sequence down to three categories: DNA, RNA, and
            proteins. A 'sequencing' method is designed to determine the order
            of monomers of a sequence in a readable format.
          </p>
          <h3>2.1 Why sequence?</h3>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/gAqbizvgoSE"
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
          <p>
            &emsp;&emsp;Before moving further, it's a good idea to brush up on
            some of the necessary background biology. Please watch the following
            video before continuing to the next section:
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=8kK2zwjRV0M">
              https://www.youtube.com/watch?v=8kK2zwjRV0M
            </a>
          </p>
          <h3>2.2 Next-generation sequencing</h3>
          <p>
            &emsp;&emsp;Rather delving into the full history of sequencing
            technologies and all the various methods that have been used over
            the years, it's important to discuss the approaches to sequencing
            used today. Next-generation sequencing (NGS) is sequencing
            technology based on mass parallelization - the reading of millions
            of fragments of DNA at the same time. Using NGS, the entire human
            genome can be sequenced in a single day. By contrast, the previous
            generation technology, Sanger sequencing, required over a decade to
            do the same. It is through NGS that has enabled the explosive growth
            in genomics discussed earlier in this section.
          </p>
          <p>
            &emsp;&emsp;NGS works in a fundamentally different way than previous
            technologies. First, a DNA sample is broken up into many small
            fragments, anywhere from 100-800 base-pairs. Then, 'adaptor'
            molecules are attached to the fragments, and the entire sample is
            washed across a medium that contains 'primers'. The primers pick up
            the DNA attached to the adaptors, and the DNA is replicated until
            the sequence forms a signal strong enough to be detected by a
            camera. Now we see where the 'massive parallelization' aspect of NGS
            comes from; all of the small fragments can be read at the same time,
            rather than reading each fragment sequentially. There's just one
            problem with this approach: by breaking the sequence into fragments,
            we've completely lost the ordering of these fragments. If you're
            thinking that seems like a big problem, you'd be right. However, the
            benefits of NGS platforms simply outweigh the challenges, and
            reconstructing the ordering of the fragments has become common
            practice in sequencing experiments. In the following section, we
            will discuss how researchers make sense of the millions of small DNA
            fragments at their disposal.
          </p>
          <h2>Alignment</h2>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/74pamST1gGQ"
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
          <p>
            &emsp;&emsp;Let's evaluate your alignment skills by playing the game
            using the link below! To play, try to find the best alignment by
            dragging one of the sequences left and right to add/remove gaps. For
            more instructions, watch the video at the bottom of the webpage.
            https://teacheng.illinois.edu/SequenceAlignment/
          </p>
          <h3>3.1 Human genome activity</h3>
          <p>
            &emsp;&emsp;To analyze sequences, researchers often compare those
            sequences to a reference genome, which is a standardized
            representation of a typical healthy genome for that organism.
            Essentially, the reference genome is used as a starting point to
            help researchers identify areas with significant changes.{" "}
          </p>
          <p>
            &emsp;&emsp;In this section, we will align fragments of human DNA to
            a well documented human reference genome. This is a very common step
            across a wide range of experiments in bioinformatics. It is
            important to note that in experiments involving alignment to a
            reference genome, the quality of the results are only as good as the
            quality of the reference. To that end, tremendous effort has been
            made to establish well-documented, gold-standard human reference
            genomes. Sequencing the entire human genome was a long and arduous
            process, but undoubtedly one of the greatest scientific achievements
            of our time. Before moving on with the activity, watch this short
            video on the history of the Human Genome Project.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=AhsIF-cmoQQ&ab_channel=TED-Ed">
              https://www.youtube.com/watch?v=AhsIF-cmoQQ&amp;ab_channel=TED-Ed
            </a>
          </p>
          <p>
            &emsp;&emsp;Now, let's get started with the activity! First, we need
            to get our hands on a snippet of human DNA. Nowadays, millions of
            sequencing reads are publicly available in national repositories
            such as the SRA.
          </p>
          <ol>
            <li>
              Navigate to the Short Read Archive (SRA) of the National Center
              for Biotechnology Information (
              <a href="https://www.ncbi.nlm.nih.gov/sra">
                https://www.ncbi.nlm.nih.gov/sra
              </a>
              ).
            </li>
            <li>
              In the search bar put 'homo sapien[Organism]', followed by any
              keywords of interest. For example, 'homo sapien[Organism] russia'.
            </li>
            <li>
              On the left-hand side, make sure to select the filters 'public'
              and 'DNA'.
            </li>
            <li>Click on any result of interest.</li>
            <li>
              Towards the bottom of the page, you should see a table called
              'Runs'. Click on one of the underlined run ids.
            </li>
            <li>
              Navigate to the reads tab. Here you should actually see some DNA
              sequences. If the page says 'No spots were found', go back and try
              another result, or try a different key word.
            </li>
            <li>
              Pick a random snippet of DNA. Clicking on the arrows or entering a
              number in the box will allow you to cycle through different
              segments.
            </li>
            <li>
              Once you've picked out a sequence or two, you can move on to the
              next section.
            </li>
          </ol>
          <p>
            &emsp;&emsp;At this point you should have a random snippet of human
            DNA, but with no knowledge of its properties or where it is located
            in the genome. Here's where we use an alignment tool!
          </p>
          <ol>
            <li>
              Navigate to the UCSC genome browser (http://genome.ucsc.edu/).
            </li>
            <li>
              In the toolbar, click on tools → BLAT. This is the alignment
              software.
            </li>
            <li>
              Let's understand some of the options here. The 'Genome' dropdown
              contains all of the organisms with an available reference genome.
              'Assembly' details what specific reference genome to use. You'll
              notice that for humans, there are quite a few. Currently, the most
              commonly used reference is hg38. The 'Query Type' details what
              type of sequence is being passed as input. In our case, we can
              keep all of these options as their defaults.
            </li>
            <li>
              Copy and paste the DNA snippet you picked out into the text box,
              and click submit.
            </li>
          </ol>
          <p>
            &emsp;&emsp;At this point you should see a big table detailing all
            locations in the reference genome where the snippet shows up. If
            your snippet doesn't have any matches, go back to the SRA and try a
            different sample or run. Now, let's interpret some of the results.
            The 'SCORE' column is some sort of alignment score similar to the
            game from earlier, and helps the program rank matches. 'QSIZE' is
            simply the length of the snippet, and should be the same value for
            each row. The leftmost 'START' and 'END' columns tells us if the
            entire sequence was found, or just part of it. For example, if START
            = 20, then the best match was found for the sequence starting at the
            20th character. 'IDENTITY' simply describes what percent of the
            sequence had a perfect match. The 'CHROM' column tells us which of
            the 23 chromosomes the sequence was found on, and the rightmost
            'START' and 'END' columns tell us at which specific nucleotides can
            it be found. Lastly, the 'STRAND' indicates what direction the
            sequence is aligned to (either 3'-5' or 5'-3').
          </p>
          <p>
            &emsp;&emsp;If you want to learn more about the properties of your
            snippet, click on the 'browser' link on any of the matches.{" "}
          </p>
          <h2>North American Wolf mini-project</h2>
          <p>
            &emsp;&emsp;The protection of endangered species is a complex and
            ongoing challenge, particularly when it comes to populations that
            are composed of admixed genomes. The Endangered Species Act (ESA) is
            a successful piece of legislation, but it lacks specific insight
            into hybrid and closely related species. In this activity, you will
            explore the case of North American wolf populations, where the issue
            of hybridization and protection under the ESA is particularly
            relevant.
          </p>
          <p>
            &emsp;&emsp;Wolves and coyotes are believed to have evolved from a
            common ancestor around 2 million years ago, and in North America,
            there is a wide variety of distinct wolf populations with varying
            sizes and ranges. The eastern wolf, inhabiting the Great Lakes
            region of the United States, is a newly recognized wolf species that
            has sparked debate over which populations can be classified as a
            separate species. Meanwhile, the red wolf from the southeastern
            United States was one of the first species protected under the ESA,
            despite admixture with coyotes.
          </p>
          <p>
            &emsp;&emsp;Your task in this activity is to analyze DNA sequencing
            data of various North American wolf species to gain insight into the
            relationships between these species and to justify whether or not
            ESA protection should be removed for other wolf-like species that
            share geographic regions with the eastern wolves and red wolves. By
            the end of this activity, you will have a deeper understanding of
            the challenges faced in conserving endangered species and the
            importance of molecular data in this effort.
          </p>
          <h2>Learn more</h2>
          <p>Text goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Mod2;
