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
      title: "Sequence Analysis",
      duration: "70",
      highlight: "#FFE066",
      bgkfrom: "#ff85ec",
      bkgto: "#84ff98",
      ref: "mod2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum.",
    },
    {
      moduleNum: "3",
      title: "RNA Programming",
      duration: "75",
      highlight: "#F25F5C",
      bgkfrom: "#ebadb6",
      bkgto: "#aceae1",
      ref: "mod3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum.",
    },
    {
      moduleNum: "4",
      title: "Genomic Variants",
      duration: "80",
      highlight: "#ECB0E1",
      bgkfrom: "#ED6B86",
      bkgto: "#FAB3A9",
      ref: "mod4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum.",
    },
    {
      moduleNum: "5",
      title: "Evolution & Phylogenetics",
      duration: "70",
      highlight: "#DE6C83",
      bgkfrom: "#EC0B43",
      bkgto: "#7AE7C7",
      ref: "mod5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum.",
    },
    {
      moduleNum: "6",
      title: "Bioinformatics Applications",
      duration: "50",
      highlight: "#74D3AE",
      bgkfrom: "#678D58",
      bkgto: "#44FFD2",
      ref: "mod6",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum.",
    },
    {
      moduleNum: "7",
      title: "Machine Learning with Bioinformatics",
      duration: "90",
      highlight: "#2CF6B3",
      bgkfrom: "#9197AE",
      bkgto: "#DD0426",
      ref: "mod7",
      desc: "Machine Learning is a complicated topic that involves heavy understand on Mathematics and Statistics. However the purpose of this module isn’t to bore you with all those details but rather <span>to help you visualize/conceptualize how various ML algorithms work.</span> This module is especially <span>focused on clustering algorithms and how to use them for cell image segmentation and analysis gene expression data!</span>",
    },
    {
      moduleNum: "8",
      title: "Bioinformatics Ethics",
      duration: "40",
      highlight: "#C6D8FF",
      bgkfrom: "#D90368",
      bkgto: "#9046CF",
      ref: "mod8",
      desc: "By this point you will have lot a of amazing techniques you can use to understand Bioinformatics data, but <span>how exactly should you go about that? How do to respect data privacy? What are some of the consequences if you don’t?</span> This module is to help you understand the field of Bioinformatics from an ethical perspective, different from what you have been doing so far!",
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
