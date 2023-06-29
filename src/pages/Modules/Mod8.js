import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages_styles/module_styles/Mod8.css";
import { Link } from "react-router-dom";

const Mod8 = () => {
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
    <div className="mod8">
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
            Ethics in Bioinformatics
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
              <div className="last-mod">
                <Link to="/modules/mod7">Previous Module!</Link>
              </div>
            </div>
            <div className="end">At the End!!!</div>
          </div>
        </div>
        <div className="text-content">
          <h1>Module 8 Outline</h1>
          <h2>Learning Objectives</h2>
          <ol>
            <li>
              <p>
                To understand the ethical principles that bioinformaticians
                face.
              </p>
            </li>
            <li>
              <p>
                Understand the overlap of bioethics and computer ethics in
                bioinformatics.
              </p>
            </li>
          </ol>
          <h1>1. Introduction</h1>
          <h3>Medical Ethics of Hippocrates</h3>
          <ul>
            <li>
              Hippocrates is traditionally regarded as the father of medicine
            </li>
            <li>
              Hippocratic Oath: an oath of ethics that health professionals must
              oblige by in which ethical and professional medicinal practice is
              emphasized.
            </li>
            <li>
              Since the creation of the Hippocratic Oath in 400 BCE, new
              additions and updates have been added, and entirely new documents
              have been created in order to heed to societal shifts in ethics.
            </li>
            <li>
              As technology advances and humans change, ethical standards evolve
              with them.
            </li>
          </ul>
          <p className="text-image">
            <img
              alt="Hippocrates"
              style={{ width: "25%" }}
              src="/images/mod9imgs/first.png"
            />
          </p>
          <ul>
            <li>
              sources:
              https://link.springer.com/chapter/10.1007/978-90-481-3049-8_6#:~:text=He
              was of opinion%2C that,the glory of his profession.
            </li>
          </ul>
          <h3>Why is considering ethics in bioinformatics important?</h3>
          <p>
            According to the AMA Journal of Ethics, “although it is already
            clear that informatics is profoundly reshaping the health
            professions, we are only beginning to come to terms with the
            extraordinary risks and potential benefits of progress in the human
            genome sciences”
            (https://journalofethics.ama-assn.org/article/toward-striking-balance-bioinformatics/2001-03)
            - As the number of machine learning techniques and artificial
            intelligence applications in bioinformatics continues to increase,
            principles of artificial intelligence ethics become more important
            for bioinformaticians. -
            https://www.uib.no/en/ii/153859/ethics-bioinformatics -
            Bioinformatics entails the two powerful technologies of bioethics
            and computer ethics. It uses the power of information technology and
            biological processes to solve problems posed by biotechnology and
            biomedicine.
            (https://www.researchgate.net/publication/265046932_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_A_Convergence_between_Bioethics_A_Convergence_between_Bioethics_A_Convergen)
          </p>
          <h3>Bioethics</h3>
          <ul>
            <li>
              <strong>Bioethics</strong> is a discipline that applies abstract
              normative principles to particular biomedical contexts
              (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7950205/)
            </li>
            <li>
              The term was first coined by Sargent Shriver in 1970 out of need
              for philosophical reflection on the problems presented by modern
              medicine.
              <ul>
                <li>
                  (https://www.researchgate.net/publication/265046932_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_A_Convergence_between_Bioethics_A_Convergence_between_Bioethics_A_Convergen)
                </li>
              </ul>
            </li>
          </ul>
          <h4>Four primary principles of traditional bioethics:</h4>
          <ol>
            <li>
              <em>nonmaleficence</em> — there is a duty not to cause harm (Greek
              physician Hippocrates in 5th Century BCE)
            </li>
            <li>
              withhold information of uncertain significance or if no current
              treatment exists.
            </li>
            <li>
              <em>beneficence</em> — ethical desirability or ideal of
              benefitting people
            </li>
            <li>
              communicate all information regarding one’s diagnosis, prognosis,
              treatment, and general health.
            </li>
            <li>
              <em>justice</em> — fairness and equality
            </li>
            <li>laws against discrimination</li>
            <li>practice of disclosing conflicts of interest</li>
            <li>
              <em>autonomy</em> — ideal of respecting people’s choices regarding
              their own life and actions
            </li>
          </ol>
          <h3>Computer Ethics</h3>
          <p>
            According to James H. Moor, a renowned figure in the computer
            science field for his philosophical contributions, he states that
            computer ethics is a dynamic and complex field of study which
            considers relationships among facts, conceptualizations, policies,
            and values with regard to constantly changing computer technology.
            (https://www.researchgate.net/publication/265046932_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_A_Convergence_between_Bioethics_A_Convergence_between_Bioethics_A_Convergen)
            Moor also stated that the computer has had an impact on society like
            no other recent technology, and it impacts almost every sector of
            our lives. This requires us to rethink many of our policies, laws,
            and behaviors.
          </p>
          <h3>Computer Ethics</h3>
          <ul>
            <li>
              According to James H. Moor, a renowned figure in the computer
              science field for his philosophical contributions, he states that
              computer ethics is a dynamic and complex field of study which
              considers relationships among facts, conceptualizations, policies,
              and values with regard to constantly changing computer technology.
              (https://www.researchgate.net/publication/265046932_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_Ethics_of_Bioinformatics_A_Convergence_between_Bioethics_A_Convergence_between_Bioethics_A_Convergen)
            </li>
            <li>
              Moor also stated that the computer has had an impact on society
              like no other recent technology, and it impacts almost every
              sector of our lives.
              <ul>
                <li>
                  This requires us to rethink many of our policies, laws, and
                  behaviors.
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            The Computer Ethics Institute’s ten commandments of computer ethics:
          </h3>
          <ol>
            <li>
              <p>Thou shalt not use a computer to harm other people.</p>
            </li>
            <li>
              <p>Thou shalt not interfere with other people’s computer work.</p>
            </li>
            <li>
              <p>
                Thou shalt not snoop around in other people's computer files.
              </p>
            </li>
            <li>
              <p>Thou shalt not use a computer to steal.</p>
            </li>
            <li>
              <p>Thou shalt not use a computer to bear false witness.</p>
            </li>
            <li>
              <p>
                Thou shalt not copy or use proprietary software for which you
                have not paid.
              </p>
            </li>
            <li>
              <p>
                Thou shalt not use other people’s computer resources without
                authorization or proper compensation.
              </p>
            </li>
            <li>
              <p>
                Thou shalt not appropriate other people’s intellectual output.
              </p>
            </li>
            <li>
              <p>
                Thou shalt think about the social consequences of the program
                you are writing or the system you are designing.
              </p>
            </li>
            <li>
              <p>
                Thou shalt always use a computer in ways that ensure
                consideration and respect for your fellow humans.
              </p>
            </li>
            <li>
              <p>
                https://www.sciencedirect.com/topics/computer-science/computer-ethics
              </p>
            </li>
          </ol>
          <h1>2. Appropriate Uses &amp; Users</h1>
          <ul>
            <li>
              In terms of societal benefits, large genomic databases and
              datasets have valuable information to diagnose and treat diseases
              <ul>
                <li>
                  However, our genetic code carries sensitive information that
                  could be used for capitalistic gain in the pharmaceutical
                  industry and insurance agencies. Capitalist interests neglect
                  the proper treatments and diagnoses for all communities.
                </li>
              </ul>
            </li>
          </ul>
          <h3>Consent</h3>
          <ul>
            <li>
              Documenting patient data, but using that data to predict other
              future diseases
              <ul>
                <li>
                  Patients could experience heightened anxiety in regards to
                  future clinical manifestations that may or may not occur. This
                  additional information that doctors could discover with
                  bioinformatics could threaten a patient’s mental health if
                  they do not want to know such information.
                </li>
              </ul>
            </li>
          </ul>
          <h3>Replacing Professionals with Computers</h3>
          <p>
            <strong>
              <em>DISCUSSION ACTIVITY</em>
            </strong>
            : Although computer systems can improve patient care, is it
            appropriate to train a computer to perform tasks that a working
            professional does not have competence in? - Would it be appropriate
            to let a machine determine a patient’s treatment without a trained
            professional’s medical and scientific understanding?
          </p>
          <h2>3. Privacy &amp; Confidentiality</h2>
          <h3>Intro to privacy &amp; confidentiality</h3>
          <ul>
            <li>
              <p>
                If all of our genetic codes were stored in a bioinformatics
                database and if this database is breached by a hacker that broke
                through the firewall, then our genetic code could potentially
                fall into the hands of those with malicious intent.
              </p>
              <ul>
                <li>
                  Our genetic information defines the identity of our bodies and
                  our mental characteristics, so much more personal and
                  unchangeable information is on the line compared to something
                  like credit card theft.
                </li>
                <li>Thus, sharing genomic data must be done securely.</li>
              </ul>
            </li>
          </ul>
          <h3>Open Source Software</h3>
          <ul>
            <li>
              Open source software is code that is designed to be publicly
              accessibly. This allows anyone to view, modify, and distribute the
              code wherever they want. This relies on peer review and community
              production.
            </li>
            <li>
              However, this allows bioinformatics systems to be hacked more
              readily and it could display personal genetic information for the
              public.
            </li>
          </ul>
          <h3>Data Sharing</h3>
          <ul>
            <li>
              Companies that you share your genomic data with could share such
              information with third parties and not notify the individual of
              this, which is a privacy concern. Though this information may
              further research in diagnoses and treatments, knowing where your
              genomic data is being used could be a concern an individual may
              have.
            </li>
          </ul>
          <p>
            <strong>
              <em>ACTIVITY</em>
            </strong>
            - youtube video: https://www.youtube.com/watch?v=5QBFYw1gu5o
          </p>
          <p>
            <em>More readings:</em>-
            https://www.sciencedirect.com/science/article/pii/S1532046421001441
          </p>
          <h2>Activity</h2>
          <ul>
            <li>case study + discussion</li>
            <li>
              in forensics genome crime scene can mistake someone else for being
              at the scene due to genome reading error — how this can be
              problematic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mod8;
