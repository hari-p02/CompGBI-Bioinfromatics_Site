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
        <div className="text-content">
          <h1>Module 6: Applications of Bioinformatics</h1>
          <h2>Overview</h2>
          <p>
            The general purpose of this module is to introduce high school
            students to the fascinating world of bioinformatics and its
            wide-ranging applications in biology and medicine. Throughout this
            module, you will delve into the fundamental concepts, tools, and
            techniques used in bioinformatics and explore how they are applied
            to solve biological problems. Get ready for an exciting journey into
            the world of bioinformatics and its incredible applications!
          </p>
          <h2>Learning Objectives</h2>
          <p>By the end of this module, you should be able to:</p>
          <ol>
            <li>
              Understand the basics of bioinformatics and its significance in
              biology and medicine.
            </li>
            <li>
              Learn about the role of bioinformatics in personalized medicine
              and its impact on healthcare.
            </li>
            <li>
              Explore real-world examples of bioinformatics applications and
              understand their impact on society.
            </li>
          </ol>
          <h2>Introduction</h2>
          <p>
            Bioinformatics is a fascinating field that combines biology and
            computer science to analyze and interpret vast amounts of biological
            data. It helps scientists make sense of complex biological
            information using powerful computational tools and algorithms.
          </p>
          <p>
            In high school, you may have learned about DNA, genes, and how they
            determine our traits. Bioinformatics takes this knowledge to the
            next level by using computers to study and understand genetic
            information on a larger scale.
          </p>
          <p>
            It helps us understand the complexities of genetics, unravel the
            mysteries of proteins, and make significant discoveries in various
            areas of biology and medicine. This module will explore the
            different applications in the field.
          </p>
          <h2>1. Bioinformatics in Medicine</h2>
          <p>
            Bioinformatics in medicine involves using computational tools and
            techniques to analyze vast amounts of biological and medical data.
            It helps medical professionals uncover patterns, understand diseases
            at a molecular level, and develop tailored approaches to diagnosis
            and treatment.
          </p>
          <h3>Disease Research and Drug Discovery</h3>
          <p>
            Bioinformatics enables researchers to study diseases at a molecular
            level. By analyzing large-scale data, such as gene expression and
            protein interactions, bioinformatics helps identify disease
            mechanisms, discover potential drug targets, and design new drugs.
            It accelerates the drug discovery process, leading to more effective
            treatments.
          </p>
          <p>
            Here are some real-world examples of how bioinformatics has
            contributed to disease research and drug discovery:
          </p>
          <ul>
            <li>
              Cancer Genomics: Bioinformatics has helped scientists study the
              genetic changes in cancer cells. By analyzing large-scale genomic
              data from cancer patients, bioinformatics tools can identify
              genetic mutations that drive cancer development. This knowledge
              has led to development of targeted therapies, such as Herceptin
              for HER2-positive breast cancer, which specifically block the
              action of mutated genes.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="HER2 Positive Cancer"
              src="/images/appsofbio/image1.jpg"
            />
          </p>
          <p className="text-image-caption">HER2 Positive Cancer</p>
          <ul>
            <li>
              Pharmacogenomics: Bioinformatics is used to study how genetic
              variations impact drug responses in individuals. By analyzing
              genomic data and drug response information, scientists can
              identify genetic markers that influence how patients metabolize
              and respond to certain medications. This knowledge helps doctors
              personalize treatments, ensuring patients receive the most
              effective and safe medications for their specific genetic makeup.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Genetic Relationship between Genotype and Drug Response"
              src="/images/appsofbio/image2.png"
            />
          </p>
          <p className="text-image-caption">
            Genetic Relationship between Genotype and Drug Response
          </p>
          <ul>
            <li>
              Drug Target Identification: Bioinformatics plays a vital role in
              identifying potential drug targets. By analyzing biological data
              and protein interactions, scientists can pinpoint specific
              molecules or proteins that are involved in disease processes.
              Targeting these proteins with drugs can disrupt the disease
              mechanism and lead to the development of novel therapies. For
              example, bioinformatics identified specific proteins involved in
              HIV replication, leading to the development of antiretroviral
              drugs that have transformed HIV treatment.
            </li>
          </ul>
          <p className="text-image">
            <img alt="HIV Life Cycle" src="/images/appsofbio/image3.jpg" />
          </p>
          <p className="text-image-caption">HIV Life Cycle</p>
          <ul>
            <li>
              Vaccine Development: Bioinformatics contributes to vaccine
              development by analyzing genomic data from pathogens. By
              understanding the genetic makeup of viruses or bacteria,
              scientists can identify unique protein targets that can be used to
              develop vaccines. Bioinformatics helps in predicting the
              effectiveness of potential vaccines and designing strategies to
              combat infectious diseases.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Bioinformatics involvement in Vaccine Development"
              src="/images/appsofbio/image4.jpeg"
            />
          </p>
          <p className="text-image-caption">
            Bioinformatics involvement in Vaccine Development
          </p>
          <h3>Preventative Medicine</h3>
          <p>
            Preventative medicine in bioinformatics focuses on using advanced
            technology and data analysis to prevent diseases before they occur
            or catch them at an early stage. It combines biology, computer
            science, and data analysis to identify risk factors, personalize
            interventions, and promote overall health and well-being. Let's
            explore this concept in more detail:
          </p>
          <ul>
            <li>
              <p>
                Identifying Genetic Risks: Bioinformatics identifies disease
                risks by analyzing genetic information. By studying an
                individual's DNA, bioinformatics can uncover genetic variations
                associated with specific conditions. This knowledge allows
                people to take proactive measures, such as lifestyle changes or
                regular screenings, to prevent or detect the disease at an early
                stage.
              </p>
            </li>
            <li>
              <p>
                Personalized Medicine: Bioinformatics tailors healthcare
                interventions based on genetic and health data. By analyzing
                large-scale biological and clinical data, bioinformatics helps
                healthcare providers offer personalized recommendations,
                treatment plans, and preventative strategies that are specific
                to each person's unique characteristics.
              </p>
            </li>
            <li>
              <p>
                Lifestyle Recommendations: Bioinformatics provides personalized
                lifestyle advice for disease prevention. By combining genetic
                data, health information, and population-level data,
                bioinformatics helps identify factors such as nutrition,
                exercise, and sleep patterns that contribute to disease
                prevention.
              </p>
            </li>
            <li>
              <p>
                Predictive Analytics: Bioinformatics predicts disease risks and
                detects early warning signs. By analyzing health records,
                genetic information, and environmental data, bioinformatics can
                predict disease risks, detect early warning signs, and provide
                timely interventions. This allows for proactive management and
                prevention of diseases before they progress.
              </p>
            </li>
            <li>
              <p>
                Environmental Risk Assessment: Bioinformatics analyzes data to
                assess health risks from the environment. By analyzing data from
                sensors, satellites, and biological samples, bioinformatics
                identifies potential health risks related to air quality, water
                pollution, or infectious diseases. This information enables
                policymakers and individuals to take preventative measures and
                create healthier environments.
              </p>
            </li>
          </ul>
          <h2>2. Gene Therapy</h2>
          <p>
            Gene therapy is like a superhero treatment that uses the power of
            genes to fight diseases. It involves introducing or modifying
            specific genes in our cells to fix genetic defects or boost the
            body's natural defenses against diseases.
          </p>
          <p>
            We will explore a few real-world examples of gene therapy below.
          </p>
          <ul>
            <li>
              Treating Genetic Disorders: In diseases like cystic fibrosis or
              muscular dystrophy, scientists use gene therapy to deliver healthy
              copies of the defective genes into the patient's cells. This helps
              restore normal gene function and potentially improve symptoms.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Gene Therapy in Cystic Fibrosis"
              src="/images/appsofbio/image5.jpeg"
            />
          </p>
          <p className="text-image-caption">Gene Therapy in Cystic Fibrosis</p>
          <ul>
            <li>
              Inherited Eye Diseases: Gene therapy has shown promise in treating
              inherited eye diseases, such as Leber congenital amaurosis (LCA)
              and retinitis pigmentosa. By delivering healthy copies of the
              defective genes into the retinal cells, gene therapy aims to
              restore vision and slow down the progression of these conditions.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Gene Therapy in Leber Congenital Amaurosis (LCA)"
              src="/images/appsofbio/image6.png"
            />
          </p>
          <p className="text-image-caption">
            Gene Therapy in Leber Congenital Amaurosis (LCA)
          </p>
          <ul>
            <li>
              Neurological Disorders: Gene therapy is being investigated for
              various neurological disorders, including Parkinson's disease and
              Huntington's disease. Bioinformatics tools aid in understanding
              the underlying genetic causes of these conditions and designing
              targeted gene therapies to potentially slow down disease
              progression or alleviate symptoms.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Gene Therapy in Parkinson's Disease"
              src="/images/appsofbio/image7.jpg"
            />
          </p>
          <p className="text-image-caption">
            Gene Therapy in Parkinson's Disease
          </p>
          <p>
            <img
              alt="Gene Therapy in Huntington's Disease"
              src="/images/appsofbio/image8.jpeg"
            />
          </p>
          <p className="text-image-caption">
            Gene Therapy in Huntington's Disease
          </p>
          <h2>3. Antibiotic Resistance</h2>
          <p>
            Antibiotic resistance is like a battle between bacteria and
            antibiotics. When bacteria are exposed to antibiotics for a long
            time, they can become resistant, which means the drugs no longer
            work effectively against them. This happens because bacteria can
            change their genetic makeup to protect themselves from antibiotics.
          </p>
          <p>Here are some real-world examples of antibiotics resistance:</p>
          <ul>
            <li>
              Methicillin-Resistant Staphylococcus aureus (MRSA): MRSA is a type
              of bacteria that has developed resistance to methicillin and other
              common antibiotics. It can cause difficult-to-treat infections,
              especially in healthcare settings. Bioinformatics helps scientists
              study the genetic changes in MRSA, identify the resistance genes,
              and understand how they are transmitted among different strains.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Genetic Changes in MRSA"
              src="/images/appsofbio/image9.jpg"
            />
          </p>
          <p className="text-image-caption">Genetic Changes in MRSA</p>
          <ul>
            <li>
              Tuberculosis (TB) Drug Resistance: Mycobacterium tuberculosis, the
              bacterium that causes TB, has developed resistance to multiple
              drugs. Bioinformatics plays a crucial role in studying the genetic
              changes in TB bacteria, identifying drug resistance genes, and
              guiding the development of effective treatment regimens.
            </li>
          </ul>
          <p>
            The video below explores some tools developed by the CDC used to
            help guide control efforts of TB, enabling more efficient and prompt
            interventions:{" "}
            <a href="https://www.youtube.com/watch?v=c1JL3Gkshig">
              https://www.youtube.com/watch?v=c1JL3Gkshig
            </a>
          </p>
          <h2>4. Cancer Research</h2>
          <p>
            Cancer research in bioinformatics is like unraveling the mysteries
            of cancer using powerful computer tools. Scientists collect and
            analyze huge amounts of data about genes, proteins, and tumors to
            gain insights into how cancer develops and find better ways to treat
            it.
          </p>
          <p>
            Here are some real-world examples of cancer research in
            bioinformatics:
          </p>
          <ul>
            <li>
              <p>
                Genomic Analysis: Bioinformatics helps scientists study the
                genetic makeup of cancer cells. By analyzing the DNA and RNA
                sequences of tumors, bioinformatics tools can identify specific
                genetic changes that drive cancer growth. This knowledge helps
                researchers understand different types of cancer, discover new
                subtypes, and develop targeted treatments.
              </p>
            </li>
            <li>
              <p>
                Biomarker Discovery: Bioinformatics aids in the search for
                biomarkers, which are specific molecules or genetic signatures
                associated with cancer. By analyzing large datasets,
                bioinformatics helps identify unique biomarkers that can be used
                for early cancer detection, predicting treatment response, and
                monitoring disease progression.
              </p>
            </li>
            <li>
              <p>
                Personalized Medicine: Bioinformatics contributes to
                personalized cancer medicine by analyzing genetic information
                and clinical data. By understanding the unique genetic profile
                of a patient's tumor, bioinformatics helps identify targeted
                therapies that are most likely to be effective for that
                individual. This approach improves treatment outcomes and
                reduces side effects.
              </p>
            </li>
          </ul>
          <h2>5. Gene Editing</h2>
          <p>
            Gene editing in bioinformatics is like being a genetic engineer who
            can make precise changes to the blueprint of life, the DNA.
            Scientists use computer tools and cutting-edge techniques to edit
            genes, just like making targeted edits in a text document, to
            understand how genes work or improve living organisms.
          </p>
          <p>Here are some real-world examples of gene editing:</p>
          <ul>
            <li>
              CRISPR-Cas9: CRISPR-Cas9 is a revolutionary gene editing tool that
              uses bioinformatics to guide precise modifications in the DNA
              sequence. It acts like a molecular scissor that can cut DNA at
              specific locations, allowing scientists to add, remove, or replace
              specific genetic material. This technique has immense potential in
              treating genetic diseases, developing new therapies, and improving
              crop varieties.
            </li>
          </ul>
          <p>
            The video below shows the CRISPR-Cas9 method for genome editing:{" "}
            <a href="https://www.youtube.com/watch?v=2pp17E4E-O8">
              https://www.youtube.com/watch?v=2pp17E4E-O8
            </a>
          </p>
          <ul>
            <li>
              Human Gene Therapy: Gene editing holds promise for treating
              genetic diseases in humans. By using bioinformatics to identify
              the specific genetic defects causing a disease, scientists can
              design gene editing approaches to correct those defects. For
              example, in a disease like sickle cell anemia, researchers are
              exploring gene editing techniques to fix the faulty gene
              responsible for the condition, potentially providing a cure.
            </li>
          </ul>
          <p className="text-image">
            <img alt="Human Gene Therapy" src="/images/appsofbio/image10.png" />
          </p>
          <p className="text-image-caption">Human Gene Therapy</p>
          <ul>
            <li>
              Agricultural Applications: Gene editing can improve crop varieties
              and enhance agricultural sustainability. Scientists use
              bioinformatics to identify genes associated with desirable traits
              like disease resistance, higher yields, or better nutritional
              content. By applying gene editing techniques, they can modify
              these genes to improve crop performance and address agricultural
              challenges.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Gene Editing in Agriculture"
              src="/images/appsofbio/image11.png"
            />
          </p>
          <p className="text-image-caption">Gene Editing in Agriculture</p>
          <h2>Activity</h2>
          <p>
            Exploring a career in bioinformatics offers exciting prospects for
            financial success and a promising future. Whether through
            sought-after positions at leading companies or by establishing your
            own bioinformatics venture, there are diverse avenues to earn income
            and thrive in this field.
          </p>
          <p>
            The video below dives into the numerous opportunities available to
            generate wealth and build a rewarding career in bioinformatics.
          </p>
          <p>
            [https://www.youtube.com/watch?v=hgVjhU6CupM]
            (https://www.youtube.com/watch?v=hgVjhU6CupM)
          </p>
          <p>
            DISCUSSION: Can you envision yourself as a bioinformatics
            researcher, working on cutting-edge projects to advance our
            understanding of diseases, develop new treatments, or contribute to
            other scientific breakthroughs? Why or why not?
          </p>
          <h2>Learn More</h2>
          <ul>
            <li>
              <a href="https://aimst.edu.my/event-news/what-bioinformatics-how-used-medicine/#:~:text=Applications">
                https://aimst.edu.my/event-news/what-bioinformatics-how-used-medicine/#:~:text=Applications
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=_eHz6qzTCfc">
                https://www.youtube.com/watch?v=_eHz6qzTCfc
              </a>
            </li>
            <li>
              <a href="https://www.iberdrola.com/innovation/bioinformatics">
                https://www.iberdrola.com/innovation/bioinformatics
              </a>
            </li>
          </ul>
          <h3>Image References</h3>
          <ol>
            <li>
              <a href="https://www.verywellhealth.com/metastatic-her2-positive-breast-cancer-treatments-4149989">
                Metastatic HER2-Positive Breast Cancer Treatments - Verywell
                Health
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/figure/Genetic-and-or-epigenetic-regulation-of-genes-encoding-drug-metabolizing-enzymes-could_fig1_6927773">
                Genetic and/or Epigenetic Regulation of Genes Encoding
                Drug-Metabolizing Enzymes - ResearchGate
              </a>
            </li>
            <li>
              <a href="https://www.healthline.com/health/hiv-life-cycle">
                HIV Life Cycle - Healthline
              </a>
            </li>
            <li>
              <a href="https://www.mdpi.com/2673-7426/3/1/4">
                Gene Therapy for Inherited Retinal Diseases - MDPI
              </a>
            </li>
            <li>
              <a href="https://labs.icahn.mssm.edu/jianglab/research-topics/">
                Research Topics - Jiang Lab, Icahn School of Medicine at Mount
                Sinai
              </a>
            </li>
            <li>
              <a href="https://www.pennmedicine.org/news/news-releases/2021/april/gene-therapy-shows-promise-in-initial-trial-for-patients-with-childhood-blindness">
                Gene Therapy Shows Promise in Initial Trial for Patients with
                Childhood Blindness - Penn Medicine News
              </a>
            </li>
            <li>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168365918304115">
                Recent Advances in Gene Therapy for Hemophilia - ScienceDirect
              </a>
            </li>
            <li>
              <a href="https://www.healthdirect.gov.au/huntingtons-disease">
                Huntington's Disease - Healthdirect Australia
              </a>
            </li>
            <li>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969719310927">
                Gene Therapy for Duchenne Muscular Dystrophy - ScienceDirect
              </a>
            </li>
            <li>
              <a href="https://byjus.com/biology/gene-therapy/">
                Gene Therapy - Byju's Biology
              </a>
            </li>
            <li>
              <a href="https://biotechgo.org/training/jsep/el-basic?view=article&amp;id=146:lo9&amp;catid=38">
                Introduction to the Biology of Gene Therapy - BiotechGo
              </a>
            </li>
          </ol>
          <h3>Content References</h3>
          <p>
            <a href="https://leverageedu.com/blog/application-of-bioinformatics/">
              https://leverageedu.com/blog/application-of-bioinformatics/{" "}
            </a>
            <a href="https://www.sciencedirect.com/science/article/pii/B978012816483900013X">
              https://www.sciencedirect.com/science/article/pii/B978012816483900013X
            </a>
            <a href="https://www.nature.com/articles/s41598-021-01121-9">
              https://www.nature.com/articles/s41598-021-01121-9{" "}
            </a>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3385936/">
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3385936/{" "}
            </a>
            <a href="https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-020-02549-9">
              https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-020-02549-9{" "}
            </a>
            <a href="https://www.sciencedirect.com/science/article/pii/S2666388022000089">
              https://www.sciencedirect.com/science/article/pii/S2666388022000089{" "}
            </a>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6946304/">
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6946304/
            </a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/33851735/">
              https://pubmed.ncbi.nlm.nih.gov/33851735/{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mod6;
