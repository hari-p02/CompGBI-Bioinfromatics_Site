import React from "react";
import "../styles/pages_styles/Modules.css";
import ModuleCard from "../componenets/ModuleCard";
const Modules = () => {
  const mods = [
    {
      moduleNum: "1",
      title: "Introduction to Python",
      duration: "80",
      highlight: "#71A9F7",
      bgkfrom: "#2B86C5",
      bkgto: "#FF3CAC",
      ref: "mod1",
      desc: "In this module you will learn the <span>fundamentals of programming in Python!</span> So do not worry if you have never coded before. We will go from the basics such as how you <span>use python as a calculator to more complicated topics such as Object oriented programming.</span> Many bioinformatics libraries are written in Python. So understanding it will help you immensely in your journey! Furthermore, all the coding activities are in Python!",
    },
    {
      moduleNum: "2",
      title: "Introduction to R",
      duration: "80",
      highlight: "#F7A072",
      bgkfrom: "#B5E2FA",
      bkgto: "#F9F7F3",
      ref: "mod2",
      desc: "Offers a deep dive into the world of data analysis and visualization. Beginning with the fundamentals, <span>students will grasp the R language syntax, establishing a solid foundation.</span> The course unfolds to cover <span>data structures and data manipulation techniques, ensuring learners harness the full power of R.</span> Visualization techniques using popular packages will empower students to present data meaningfully.",
    },
    {
      moduleNum: "3",
      title: "Sequence Analysis",
      duration: "70",
      highlight: "#FFE066",
      bgkfrom: "#ff85ec",
      bkgto: "#84ff98",
      ref: "mod3",
      desc: "Module 3 delves into the fascinating journey of genomic sequencing technologies, <span>tracing its evolution from its inception in the mid-1970s to its current state-of-the-art methods.</span> A significant portion is dedicated <span>to hands-on activities, emphasizing the pivotal computational task of sequence alignment.</span> By the end of this module, learners will be adept in aligning genetic sequences using modern tools, paving the way for meaningful biological insights and discoveries.",
    },
    {
      moduleNum: "4",
      title: "RNA Programming",
      duration: "75",
      highlight: "#F25F5C",
      bgkfrom: "#ebadb6",
      bkgto: "#aceae1",
      ref: "mod4",
      desc: "RNA-sequencing allows scientists to analyze RNA types and quantities in samples, providing insights into gene function. RNA extraction is a crucial step in this process. The module explores <span>RNA sequencing applications, including understanding gene and protein expression and using the Burrows-Wheeler Aligner with Python</span> for efficient DNA sequencing.",
    },
    {
      moduleNum: "5",
      title: "Genomic Variants",
      duration: "80",
      highlight: "#ECB0E1",
      bgkfrom: "#ED6B86",
      bkgto: "#FAB3A9",
      ref: "mod5",
      desc: "Explore genomic variants, detailing genetic variations in humans and their analysis via bioinformatics. It discusses <span>how genetic divergence in humans results from factors like isolation, leading to diverse allele frequencies.</span> The module differentiates between somatic and germline variants, noting somatic's role in cancer. It also highlights bioinformatics <span>tools for variant detection</span> and the significance of comparing DNA to reference genomes.",
    },
    {
      moduleNum: "6",
      title: "Evolution & Phylogenetics",
      duration: "70",
      highlight: "#DE6C83",
      bgkfrom: "#EC0B43",
      bkgto: "#7AE7C7",
      ref: "mod6",
      desc: "Dive into computational phylogenetics, tracing from Darwin's theories to current bioinformatics. Students will explore the <span>phylogenetic tree's role in deciphering evolutionary relationships, discern true homologies, and grasp the practicality of tree estimation in various studies, including epidemiology.</span> The module also delves into computational techniques and principles in phylogenetics, supplemented by interactive resources for a comprehensive understanding.",
    },
    {
      moduleNum: "7",
      title: "Bioinformatics Applications",
      duration: "50",
      highlight: "#74D3AE",
      bgkfrom: "#678D58",
      bkgto: "#44FFD2",
      ref: "mod7",
      desc: "Module 7 delves into bioinformatics, highlighting its critical applications in medicine and biology. By merging biology with computer science, bioinformatics utilizes computational tools for in-depth biological data analysis. The module covers its <span>impact on personalized medicine, disease research, gene therapy, and more, offering students a comprehensive view through real-world examples</span> like CRISPR-Cas9 gene editing and cancer genetics.",
    },
    {
      moduleNum: "8",
      title: "Machine Learning with Bioinformatics",
      duration: "90",
      highlight: "#2CF6B3",
      bgkfrom: "#9197AE",
      bkgto: "#DD0426",
      ref: "mod8",
      desc: "Machine Learning is a complicated topic that involves heavy understand on Mathematics and Statistics. However the purpose of this module isn’t to bore you with all those details but rather <span>to help you visualize/conceptualize how various ML algorithms work.</span> This module is especially <span>focused on clustering algorithms and how to use them for cell image segmentation and analysis gene expression data!</span>",
    },
    {
      moduleNum: "9",
      title: "Bioinformatics Ethics",
      duration: "40",
      highlight: "#C6D8FF",
      bgkfrom: "#D90368",
      bkgto: "#9046CF",
      ref: "mod9",
      desc: "By this point you will have lot a of amazing techniques you can use to understand Bioinformatics data, but <span>how exactly should you go about that? How do to respect data privacy? What are some of the consequences if you don’t?</span> This module is to help you understand the field of Bioinformatics from an ethical perspective, different from what you have been doing so far! In doing so you gain a <span>broader understanding of the field impacts society as a whole.</span>",
    },
  ];
  return (
    <div className="all-mods">
      {mods.map((mod) => (
        <ModuleCard
          moduleNum={mod.moduleNum}
          title={mod.title}
          duration={mod.duration}
          highlight={mod.highlight}
          bgkfrom={mod.bgkfrom}
          bkgto={mod.bkgto}
          topg={mod.ref}
          desc={mod.desc}
        />
      ))}
    </div>
  );
};

export default Modules;
