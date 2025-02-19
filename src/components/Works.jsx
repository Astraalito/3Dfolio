import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, type, image, linkTo }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full bg-tertiary rounded-2xl"
    >
      {/* Partie Image */}
      <div className={`md:h-[400px] w-full ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Partie Description */}
      <div className={`p-6 md:p-10 w-full text-white ${index % 1 === 0 ? "md:order-1" : "md:order-2"}`}>
        <h3 className="text-[32px] font-bold">{name}</h3>
        <p className="sm:text-[12px] text-[12px] text-secondary uppercase tracking-wider">{type}</p>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        <a href={linkTo} target="_blank">
          <p className="text-[#FFD580] mt-4 font-bold text-[18px]">En savoir plus &gt;</p>
        </a>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mes projets</p>
        <h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Cette section présente mes compétences et expériences à travers des exemples concrets.
          Chaque projet est décrit brièvement, avec des démonstrations ou liens vers leur site.
          Découvrez comment je donne vie à des idées avec créativité et passion !
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
