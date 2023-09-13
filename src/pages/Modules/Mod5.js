import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod5.css";
import { Link } from "react-router-dom";

const Mod5 = () => {
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
    <div className="mod5">
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
            Evolution & Phylogenetics
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
          <h1>Module 6: Evolution and Phylogenetics</h1>
          <h2>Outline</h2>
          <p>
            &emsp;&emsp;This module will introduce the student to how evolution
            is studied in bioinformatics through the field of computational
            phylogenetics. From Darwin to the present, the student will gain an
            overview of the various principles and theories that drive the
            field.
          </p>
          <h2>Learning Objectives</h2>
          <ol>
            <li>
              Form the groundwork for studying evolution through evolutionary
              trees and why they are important to estimate in practice.
            </li>
            <li>
              Understand the main algorithms for reconstructing evolutionary
              trees using biological data and how trees are depicted differently
              depending on the evolutionary model.
            </li>
            <li>
              Be able to compute phylogenetic trees in practice with only basic
              coding abilities.
            </li>
          </ol>
          <h2>Introduction</h2>
          <p>
            &emsp;&emsp;From the Greek words ‘phylo’, meaning tribe, and
            ‘genetics’, meaning origin, the field of phylogenetics is the study
            of the evolutionary relationships among a group of biological
            entities. This field of study is particularly important in
            understanding the origins and relationships between different
            species, organisms, and even individual genes and DNA sequences.
          </p>
          <p>
            &emsp;&emsp;One of the key tools used in phylogenetics is the
            phylogenetic or evolutionary tree. You’re already familiar with
            evolutionary trees to some extent, but perhaps you did not know that
            reconstructing evolutionary trees is a core pillar of computational
            phylogenetics. Evolutionary trees are data structures used to
            describe the evolutionary relationships between different biological
            entities. These entities can take many forms, such as different
            species, organisms within species, individual genes and DNA
            sequences, and even entire microbial communities or cells. If two
            entities are grouped closely together on an evolutionary tree, that
            means they are more closely related compared to the other entities
            represented.
          </p>
          <p className="text-image">
            <img alt="Phylogenetic Tree" src="/images/mod6imgs/first.png" />
          </p>
          <p>
            &emsp;&emsp;So how do we determine how closely related two entities
            are? Let’s start with something familiar in comparing species. We
            can compare all the physical characteristics of each species and see
            to what degree those characteristics are shared. For example, both
            humans and chimpanzees have opposable thumbs, but bears do not,
            therefore humans and chimpanzees are more closely related than they
            are to bears.
          </p>
          <p>
            &emsp;&emsp;In this case, it’s fairly obvious that this line of
            thinking is correct. But will this always be the case? Short answer:
            no. One important distinction to make in phylogenetics is the
            difference between similarity and homology. Here, homology refers to
            the degree of shared ancestry. While significant similarity between
            two entities is often strong evidence for homology, this is not
            always the case. In some instances, two entities may appear similar
            due to mechanisms such as parallelism or convergent evolution, a
            phenomenon known as homoplasy. As an example, consider whales,
            dolphins, and other cetaceans. They have many features that would
            suggest they are far more closely related to fish than us - slick
            skin meant for living in water, and fins for moving around in it.
            And yet, based on sequence data, humans are more closely related to
            whales and dolphins than they are elephants.
          </p>
          <p>
            &emsp;&emsp;This leads to the fundamental challenge of
            phylogenetics: because evolutionary histories can never be known
            with certainty (since they happened in the past and cannot be
            observed directly), they must be estimated. This requires careful
            analysis of the available data and sophisticated computational
            methods to infer the most likely evolutionary relationships among
            different entities.
          </p>
          <h3>
            <strong>Why estimate evolutionary trees?</strong>
          </h3>
          <p>
            &emsp;&emsp;Many researchers are interested in the evolutionary
            origins of humans and other species for its own sake, but outside of
            simple curiosity, are there any practical reasons for estimating
            evolutionary trees? Of course! There are many reasons why estimating
            phylogenetic trees is important in biology and other fields. Some of
            the key reasons include:
          </p>
          <ul>
            <li>
              It is a foundational step for many biological studies, as
              understanding the evolutionary relationships between different
              species is crucial for understanding their biology and behavior,
              and a means of learning new things about them.
            </li>
            <li>
              Understanding the diversity of pathogen strains is helpful for
              developing vaccines and other treatments for infectious diseases.
              Evolutionary relationships help us estimate how fast viruses
              mutate, informing us on vaccination practices.
            </li>
            <li>
              Phylogenetic analysis is also used in epidemiology to study the
              spread of infectious diseases and the transmission of genetic
              disorders.
            </li>
            <li>
              Predicting the functions of genes is another important application
              for estimating evolutionary trees. Finding highly similar genes in
              closely related species gives us a head start at cracking the
              functional roles of different genes and their potential for use in
              medical treatments.
            </li>
            <li>
              Biodiversity and ecological studies also rely heavily on
              phylogenetic analysis, as it is used to understand the roles of
              various species in different ecosystems.
            </li>
          </ul>
          <p>
            &emsp;&emsp;So why does phylogenetics belong in bioinformatics? In
            the current age of big data, phylogenetic estimation is considered a
            computational problem. Simply put, phylogenetics has grown hand in
            hand with bioinformatics, and the process of estimating evolutionary
            trees is a complex statistical inference problem that requires the
            use of computational tools and techniques. Statistical inference is
            the process of making inferences about a group as a whole based on
            assumptions made by observing a sample of the data. These
            assumptions govern how we go about the estimation. As the complexity
            of our models of evolution increases, and as the size of the
            datasets we are analyzing grows, the computational challenges become
            more and more difficult to overcome. This is why phylogenetic
            estimation is considered a computational problem, and why
            bioinformatics is an essential field for advancing our understanding
            of evolutionary relationships.
          </p>
          <h2>Phylogenetic inference</h2>
          <p>
            &emsp;&emsp;The field of phylogenetics was born when Charles Darwin
            published his book "On the Origin of Species," in 1859. This
            pioneering work laid the foundations for how we study evolution to
            this day. Darwinian evolution is the process by which species evolve
            over time through a process of natural selection, and has come to
            dominate how we think about the underlying mechanisms that drive
            change.
          </p>
          <p>
            &emsp;&emsp;Since the time of Darwin, we have learned a great deal
            about the mechanisms of evolution and how different species are
            related to one another. However, our understanding of the
            evolutionary history of life on Earth is still incomplete, and there
            is much that we do not yet know.
          </p>
          <p>
            &emsp;&emsp;One of the ways that we attempt to capture the
            complexity of evolution is by constructing evolutionary trees. These
            trees are not definitive proof of what happened in the past, but
            rather they are hypotheses of what might have happened based on the
            available data and the assumptions we make about how species
            evolved. Unless the time machine is invented, they will forever be
            theories and not proven. In other words, evolutionary trees are
            simply one way of representing our current understanding of the
            evolutionary history of life on Earth. They are not definitive
            answers, but rather they are hypotheses that can be tested and
            refined as we learn more about the mechanisms of evolution and the
            relationships between different species. And this happens all the
            time!
          </p>
          <h3>
            <strong>Large Scale Phylogeny Estimation</strong>
          </h3>
          <p>
            &emsp;&emsp;With the wealth of biological data available to
            researchers, computational phylogenetics has become increasingly
            relevant. The pace at which computing resources grow cannot match
            the pace of the scale of datasets, so to compensate, better
            algorithms must be developed constantly. You have probably heard of
            the tree of life: the ultimate phylogenetic tree relating all life
            forms on Earth. In recent years, the Tree of Life (ToL) has
            continued to be shifted and refined in tremendous ways, almost
            entirely due to the introduction of sequencing data to the field.
            Recall the hierarchical taxonomy used to classify species: Kingdom,
            Phylum, Class, Order, ect… This system has likely changed since you
            learned about it last!
          </p>
          <p className="text-image">
            <img alt="taxonomy" src="/images/mod6imgs/second.png" />
          </p>
          <p>
            &emsp;&emsp;The most up to date ToL was built using DNA sequence
            data, morphological data, other types of biological data. The
            resulting tree relates all life forms, both past, present, and
            extinct, throughout time. In the following activity, you’re going to
            explore the tree of life.
          </p>
          <p>
            &emsp;&emsp;The following link will take you to a web project that
            allows users to explore the tree of life:{" "}
            <a href="http://tolweb.org/tree/phylogeny.html">
              http://tolweb.org/tree/phylogeny.html
            </a>
          </p>
          <p>
            &emsp;&emsp;Click on ‘Root of the Tree’. This is the starting point
            from which all life evolved. Explore the tree by clicking on the
            various descendant lineages. As a challenge, try to navigate to
            humans from the root by selecting the correct lineages.
          </p>
          <h3>Evolutionary models</h3>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/q0qUKG0NkJs"
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
          <h2>Molecular Phylogenetics</h2>
          <p>
            &emsp;&emsp;Molecular Phylogenetics is the branch of evolutionary
            biology that uses molecular data, such as DNA and protein sequences,
            to infer evolutionary relationships among species. It provides a
            powerful tool for understanding the history of life on earth and how
            different species are related to one another. By comparing the
            molecular data of different species, molecular phylogenetics helps
            us to reconstruct evolutionary trees that show the ancestry and
            relationships among species, and provides insights into how species
            evolved and diversified over time.
          </p>
          <p>
            &emsp;&emsp;As mentioned earlier, reconstructing phylogenetic trees
            is a computational problem when using molecular data. There are
            several categories of algorithms that are used for inferring
            phylogenetic trees. These are:
          </p>
          <ol>
            <li>
              <strong>Distance-based methods.</strong> These methods estimate
              the ‘evolutionary distance’ between each pair of entities, usually
              based on the number of molecular changes between the two. One
              example is the Hamming distance used in the sequence analysis
              activity. A drawback of distance-based methods is that they
              struggle to accurately quantify distant relationships.
            </li>
            <li>
              <strong>Maximum Parsimony.</strong> Suppose we have DNA sequences
              from two closely related species. Any differences can be explained
              by some number of mutations, or evolutionary events. Maximum
              Parsimony, or MP, is an approach that minimizes the number of
              evolutionary events required to explain the observed data.
              Basically, it searches for the shortest possible tree, referred to
              as the most parsimonious tree. The major downside of this approach
              is that it always assumes the fewest number of evolutionary
              events, and could therefore underestimate the true number.
            </li>
            <li>
              <strong>Maximum Likelihood.</strong> Imagine before looking at the
              data, you randomly guess what the phylogenetic tree looks like.
              Maximum Likelihood, or ML, computes the probability that the
              guessed tree is the correct one given the observed data. These
              methods are often used in conjunction with a tree-search
              algorithm, which generates a series of candidate trees and
              attempts to find the one with the highest probability. Using ML is
              useful in practice, but finding the absolute best tree is often
              computationally infeasible.
            </li>
            <li>
              <strong>Bayesian Inference.</strong> These methods combine
              observed data with expert information to generate a distribution
              of possible trees, with each tree having a probability of being
              the true evolutionary relationships. Then, the highest probability
              tree is selected. One challenge with Bayesian Inference methods is
              that they require high quality expert knowledge to be effective.
            </li>
          </ol>
          <p>
            &emsp;&emsp;This classification can be combined even further:
            categories 3 and 4 are probabilistic methods, whereas categories 1
            and 2 are combinatorial. As each approach comes with its own pros
            and cons, the first challenge of phylogenetic inference is selecting
            the best one.
          </p>
          <p>
            &emsp;&emsp;Now that you have a basic idea of inferring phylogenetic
            trees, let’s try it out in practice.
          </p>
          <h2>
            <strong>Computing phylogenetic trees coding activity</strong>
          </h2>
          <p>
            &emsp;&emsp;In this activity, your task will be to compute
            phylogenetic trees using various reconstruction algorithms on data
            derived form sequences. You will then apply these algorithms to
            study the evolutionary relationships between individuals of the
            common iceplant.
          </p>
          <p>
            <strong>
              Click here to access activity materials:{" "}
              <a href="https://drive.google.com/drive/u/1/folders/16ktFf9U7UrqevhuD4wAiLrauYcwnAI1t">
                https://drive.google.com/drive/u/1/folders/16ktFf9U7UrqevhuD4wAiLrauYcwnAI1t
              </a>
            </strong>
          </p>
          <h2>Learn more</h2>
          <h3>
            <strong>
              Intro to computational phylogenetics textbook pages:
            </strong>
          </h3>
          <p>
            <a href="https://www.cs.utexas.edu/~tandy/394C-2013-textbook.pdf">
              https://www.cs.utexas.edu/~tandy/394C-2013-textbook.pdf
            </a>
          </p>
          <h3>
            <strong>Building phylogenetic trees methods:</strong>
          </h3>
          <p>
            <a href="https://guava.physics.uiuc.edu/~nigel/courses/598BIO/498BIOonline-essays/hw2/files/hw2_li.pdf">
              https://guava.physics.uiuc.edu/~nigel/courses/598BIO/498BIOonline-essays/hw2/files/hw2_li.pdf
            </a>
          </p>
          <h3>
            <strong>
              Popular suite of computational tools for inferring phylogenies:
            </strong>
          </h3>
          <p>
            <a href="https://evolution.genetics.washington.edu/phylip.html">
              https://evolution.genetics.washington.edu/phylip.html
            </a>
          </p>
          <h2>Citations</h2>
          <p>
            Young, Scott. <em>Evolution by Natural Selection.</em> July, 2019.
            https://www.scotthyoung.com/blog/2019/07/02/natural-selection/
          </p>
          <p>
            Pennisi, Elizabeth. “First Comprehensive Tree of Life Shows How
            Related You Are to Millions of Species.”{" "}
            <a href="http://science.org/">Science.org</a>, Sept. 21AD,{" "}
            <a href="http://www.science.org/content/article/first-comprehensive-tree-life-shows-how-related-you-are-millions-species">
              www.science.org/content/article/first-comprehensive-tree-life-shows-how-related-you-are-millions-species
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mod5;
