import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod4.css";
import { Link } from "react-router-dom";

const Mod4 = () => {
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
    <div className="mod4">
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
            Genomic Variants
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
                <Link to="/modules/mod4">Previous Module!</Link>
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
                <Link to="/modules/mod6">Next Module!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1>Module 5: Genomic Variants</h1>
          <h2>Outline</h2>
          <p>
            &emsp;&emsp;This module will delve into the genetic differences of
            individuals and groups, how they are studied, and how they are
            detected in bioinformatics. The student will learn about the many
            different types of genomic variants, and how they manifest in
            populations and cancer.
          </p>
          <h2>Learning Objectives</h2>
          <ol>
            <li>
              Understand the basic principles of what genomic variants are.
            </li>
            <li>
              Be able to distinguish between healthy population variants and
              somatic cancer variants.
            </li>
            <li>
              Have a basic understanding of the different types of genomic
              variants and how they are defined.
            </li>
            <li>
              Become familiar with the bioinformatics pipeline for detecting
              genomic variants from sequencing data.
            </li>
          </ol>
          <h2>Introduction</h2>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/SKOOAKn6vYA"
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
          <h3>
            <strong>Genomic variants in populations</strong>
          </h3>
          <p>
            &emsp;&emsp;From archeological evidence, we know humans spread out
            across the globe over the course of thousands of years. The last
            main continent to be reached (besides Antarctica) was South America
            around 15,000 years ago, while some islands in the Pacific were
            settled relatively recently. How far and wide humans traveled was
            influenced by a number of changing factors, including the changes in
            climate, overpopulation and competing populations, and new
            technologies like the sail.
          </p>
          <p>
            &emsp;&emsp;In today’s world, we can reach virtually any region on
            the planet in at most a few days. But for most of human history, a
            mountain chain could have meant the end of the known world, with
            human populations on either side never knowing of each other’s
            existence. As a consequence, these populations become isolated, and
            independent evolution leads to genetic divergence. This is because
            while variants naturally arise in individuals spontaneously, they
            can also be inherited from previous generations. This means that a
            variant unique to a population is not necessarily present in every
            individual, only a fraction. This fraction is referred to as an
            allele frequency, or the rate of occurrence of a particular variant
            across a population.
          </p>
          <p className="text-image">
            <img alt="map" src="/images/mod5imgs/first.png" />
          </p>
          <p>
            &emsp;&emsp;Right now, you may be thinking of the pioneering work of
            Gregor Mendel and his punnet squares. Mendel studied the properties
            of inheritance for certain traits in peas. It turns out that
            studying genomic variants on the population level is an existing
            field called <em>population genetics</em>, and has existed long
            before bioinformatics came around. But, as is the case with many
            other fields, developments in bioinformatics and the field of
            genomics has fundamentally pushed our understanding of population
            genetics to new heights. Before continuing, it is important to make
            a distinction between studying genomic variants vs population
            genetics. Population genetics and genomic variants are closely
            related but distinct concepts. Population genetics is the study of
            the distribution and frequency of genetic variations within and
            among populations. This can include studying the inherited and
            spontaneous variations in the DNA sequence of a group of
            individuals, as well as the patterns of inheritance and transmission
            of these variations from one generation to the next. In contrast,
            genomic variants refer specifically to changes or alterations in an
            individual's DNA sequence, relative to a reference genome. This can
            include changes in the number of copies of a particular gene, or
            changes in the nucleotide sequence of a gene. While population
            genetics can provide insight into the genetic makeup of a group and
            the underlying causes of genetic disorders and other traits,
            studying genomic variants focuses specifically on individual-level
            changes in the DNA sequence. For example, where a population
            geneticist might measure the frequency of a certain trait among an
            isolated population, a bioinformatician would look at the DNA
            sequences of individuals from the population and identify genomic
            variants linked to that trait.
          </p>
          <p className="text-image">
            <img alt="mendel" src="/images/mod5imgs/second.png" />
          </p>
          <p>
            &emsp;&emsp;Despite these differences, advances in genomics have
            fundamentally changed our understanding of human traits. Studying
            the presence of genetic variants in populations, especially ones
            that have no phenotype (observable change), can help researchers
            track the migration and mixing of various populations throughout
            history. It can also help us understand the causes of certain
            traits; for example, we now know that eye color is determined by the
            combination of several genomic variants. The same is true of skin
            color, and all variants that control skin color originated in
            Africa.
          </p>
          <p>Check out this short documentary on the biology of skin color:</p>
          <p>
            <a href="https://www.youtube.com/watch?v=hFw8mMzH5YA&amp;ab_channel=biointeractive">
              https://www.youtube.com/watch?v=hFw8mMzH5YA&amp;ab_channel=biointeractive
            </a>
          </p>
          <h3>
            <strong>Genomic variants in cancer</strong>
          </h3>
          <p>
            &emsp;&emsp;While genomic variants can manifest in a wide variety of
            ways (as we will see in the next section), there are two fundamental
            types of variants: somatic and germline. Somatic variants occur from
            mutations in any non-reproductive cells, whereas germline variants
            occur in reproductive cells. Basically, germline variants are
            inherited, and somatic variants are not.
          </p>
          <p>
            &emsp;&emsp;Because somatic variants, by definition, do not occur in
            reproductive cells, they never become variants in a population.
            However, because cells still divide and replicate by copying their
            DNA to daughter cells, somatic variants have the potential to spread
            throughout the body. If a particular somatic variant inhibits some
            cellular function, this could be a serious problem! Luckily, our
            genomes have built-in mechanisms to stop this from happening in the
            form of several genes that repair DNA. But what if the somatic
            mutations affect the genes meant to repair DNA? What if other
            mutations pop up that inhibit the cell from initiating apoptosis, or
            cause changes in the way the cell regulates growth and the rate of
            division?
          </p>
          <p>
            &emsp;&emsp;This ‘perfect storm’ of acquiring the right somatic
            mutations is the unlikely process that ultimately leads to cancer.
            Certain variants are seemingly vital to cancer formation, whereas
            other variants may be required for a certain type of cancer only.
            For example, variants located on the p53 gene, a small region on the
            short arm of chromosome 17, are found in the genomes of nearly all
            cancer cells. Being the subject of many studies, we know that p53
            controls factors that contribute to both the rate of division and
            the inhibition of apoptosis.
          </p>
          <p>
            &emsp;&emsp;However, not all variants are made equal. Some somatic
            variants, though seen frequently across patients, are simply
            ‘passengers’ - they do not contribute to oncogenesis. On the other
            hand, driver variants lead to changes in cell functions typical of
            cancer. Furthermore, some driver variants are more significant to
            others - both in their effect on cellular function and on our
            ability to target them in treatment. As such, medical professionals
            usually use a four-tier system when categorizing somatic variants in
            cancer. Tier 1 corresponds to variants with strong clinical
            significance in terms of diagnosis, prognosis, or treatment.
          </p>
          <p>
            &emsp;&emsp;The field of bioinformatics, specifically cancer
            genomics, has revolutionized the way in which we treat and study
            cancer. It turns out that actually detecting variants in a person’s
            genome is far from an easy task. Detecting these tier 1 variants in
            patients, and even cataloging what they are in the first place, were
            made possible by advances in sequencing technology and variant
            detection. In fact, studying the genomic variations that occur in
            cancer has become integral cancer research as a whole.
          </p>
          <h2>Types of genomic variants</h2>
          <p>
            &emsp;&emsp;As mentioned previously, genomic variants can manifest
            in a variety of ways at all scales across the genome. In this
            section, we’ll discuss the different types of genomic variants and
            their properties. An important concept to keep in mind is that
            identifying variants in a DNA sequence requires comparing it to an
            established reference genome. This idea was discussed in module 3,
            but is extremely relevant for this topic as well. In population
            genetics, the reference sequence at a particular location in the
            genome is often called the ‘wild type’, and the variant sequence at
            the same location is called the ‘mutant’.
          </p>
          <p>
            &emsp;&emsp;Also, it is important to note that variants happen
            naturally all the time, but most are ineffectual or otherwise
            harmless. Some types of variants only rarely have implications for a
            person’s health or traits, whereas some rare variants are largely
            associated with cancer genomes.
          </p>
          <div className="text-video">
            <iframe
              src="https://www.youtube.com/embed/ixGa8KWhgjk"
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
            <strong>Cheat sheet</strong>
          </p>
          <p className="text-image">
            <img
              alt="Variant Calling Steps"
              src="/images/mod5imgs/Screen_Shot_2023-07-30_at_4.26.33_PM.png"
            />
          </p>
          <h2>Population genetics</h2>
          <p>
            &emsp;&emsp;While population genetics is an entire field on its own,
            we wanted to provide a bit more information on this subject for
            those interested. There exists tons of educational resources on this
            subject, so checkout this introductory video from CrashCourse:
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=WhFKPaRnTdQ">
              https://www.youtube.com/watch?v=WhFKPaRnTdQ
            </a>
          </p>
          <p>
            &emsp;&emsp;When you’re finished, click on the following link and
            complete the activity on genetic variation.
          </p>
          <p>
            <a href="https://www.genome.gov/25019961/online-education-kit-activity-1-genetic-variation-in-populations">
              https://www.genome.gov/25019961/online-education-kit-activity-1-genetic-variation-in-populations
            </a>
          </p>
          <h2>Detecting genomic variants</h2>
          <p>
            &emsp;&emsp;So let’s say we’re a cancer researcher studying
            recurring variants in breast cancer. We’ve just acquired sequencing
            data from a patient recently diagnosed and have already aligned it
            to the reference genome. At this point, detecting variants should be
            pretty straightforward - just scan the positions in the genome, and
            look at the differences. Simple, right?
          </p>
          <p>
            &emsp;&emsp;In theory, yes! Though the strategy may be simplifying a
            few processes, the basic idea remains the same. But as you may have
            guessed, there is indeed a catch. Though sequencing technology
            continues to improve, the data is unreliable. On top of that,
            detecting genomic variants is one of the last stops in a long
            experimental pipeline - there are so many places where something can
            go wrong! Sequencers sometimes misread base pairs, resulting in a
            false positive genomic variant. Certain areas of the genome may have
            been read more than others, which the researcher may mistakenly
            assume to be the result of copy number variations in that area. Some
            regions of the genome do not map well to the reference, while others
            map too well. You get the idea!
          </p>
          <p>
            &emsp;&emsp;Given these challenges, reliable variant detection
            remains an ongoing area of research. Methods to detect variants
            often combine computational, statistical, and analytical approaches
            to produce the most confident set of variants possible.
          </p>
          <h3>Variant calling vs genotyping</h3>
          <p>
            &emsp;&emsp;Let’s discuss two important terms. Variant detection is
            a broad term that encompasses a range of techniques used to identify
            differences in DNA sequences. Variant calling is a derivative of
            this; it describes more specific techniques used to identify and
            classify types of variants, such as SNPs, indels, ect. When doing
            variant calling, the researcher looks for evidence of a variant at a
            particular location in the genome.
          </p>
          <p>
            &emsp;&emsp;Genotyping describes a wider population-focused view. At
            that same location in the genome, genotyping describes all the
            different alleles at that location, and their relative frequencies.
            Variant callers will estimate the probability of observing a
            particular allele at the location.
          </p>
          <h3>Variant calling workflow</h3>
          <p>
            &emsp;&emsp;The following figure describes a typical variant calling
            workflow. One typically starts with raw sequencing reads, filters
            low quality reads out of the sample, and aligns to a reference
            genome. Aligned reads are then typically stored as special
            sequencing files, called SAM or BAM files. At this step, a genotype
            software is applied to the data to get a collection of variants. As
            standard practice, the variants themselves are stored in a special
            type of file called a VCF file.
          </p>
          <p className="text-image">
            <img
              alt="Screen Shot 2023-07-30 at 4.28.23 PM.png"
              src="/images/mod5imgs/Screen_Shot_2023-07-30_at_4.28.23_PM.png"
            />
          </p>
          <p>Some popular variant calling softwares include:</p>
          <ul>
            <li>Samtools</li>
            <li>GATK</li>
            <li>FreeBayes</li>
            <li>DiBayes</li>
          </ul>
          <p>
            In the programming activity at the end of this section, we will use
            variant calling software from the samtools package.
          </p>
          <h2>Cataloging variants</h2>
          <p>
            &emsp;&emsp;The last topic in this section features how we record
            and catalog variants for future use. As mentioned previously, there
            are millions of recorded variants in the genomes of healthy humans,
            many of which have important implications for diseases and
            predisposition to certain conditions.
          </p>
          <p>
            &emsp;&emsp;PopHumanVar is an interactive interface where users can
            explore specific genomic regions in humans. For variants of
            interest, it allows users to learn about their functional role and
            frequency across different populations. Click the following link:
          </p>
          <p>
            <a href="https://pophumanvar.uab.cat/#section_2">
              https://pophumanvar.uab.cat
            </a>
          </p>
          <p>
            &emsp;&emsp;If not navigated there directly, go to the tutorials and
            complete section 2. Here, you’ll focus on viewing a 1.15Mb variant
            on chromosome 2 containing the gene EDAR.
          </p>
          <h2>
            <strong>
              <em>*North American Wolf mini-project</em>
            </strong>
            *
          </h2>
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
              <em>*Variations in the human genome article:</em>
            </strong>
            *
          </h3>
          <p>
            <a href="https://www.genome.gov/dna-day/15-ways/human-genomic-variation">
              https://www.genome.gov/dna-day/15-ways/human-genomic-variation
            </a>
          </p>
          <h3>
            <strong>Most altered gene in cancer article:</strong>
          </h3>
          <p>
            <a href="https://www.nature.com/scitable/topicpage/p53-the-most-frequently-altered-gene-in-14192717/">
              https://www.nature.com/scitable/topicpage/p53-the-most-frequently-altered-gene-in-14192717/
            </a>
          </p>
          <h3>
            <strong>Types of genomic variants article:</strong>
          </h3>
          <p>
            <a href="https://www.genomicseducation.hee.nhs.uk/blog/various-types-of-variant-what-is-genomic-variation/">
              https://www.genomicseducation.hee.nhs.uk/blog/various-types-of-variant-what-is-genomic-variation/
            </a>
          </p>
          <h2>Citations</h2>
          <p>
            Lavebratt C, Sengul S.{" "}
            <em>
              Single Nucleotide Polymorphism (SNP) Allele Frequency Estimation
              in DNA Pools using Pyrosequencing.
            </em>{" "}
            Nat Protoc. 2006;1(6):2573-82.
          </p>
          <p>
            Cade, Lindsey.{" "}
            <em>Indel Finder: How The Python Version Of This Program Works</em>.
            HackBrightAcademy. 23 July 2013.
          </p>
          <p>
            Cardoso JGR, Andersen MR, Herrgård MJ and Sonnenschein N (2015)
            Analysis of genetic variation and potential applications in
            genome-scale metabolic modeling. Front. Bioeng. Biotechnol. 3:13.
            doi: 10.3389/fbioe.2015.00013
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mod4;
