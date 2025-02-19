import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Enchanté !</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Moi c'est <span className='text-[#FFD580]'>Nico</span>, <span className='text-[#FFD580]'>Développeur créatif</span> ! 
        Après avoir jonglé entre le développement <span className='text-[#FFD580]'>web </span> 
        et la <span className='text-[#FFD580]'>3D</span>, je me dirige maintenant vers la création d’<span className='text-[#FFD580]'>expériences
        immersives</span>, où chaque ligne de code façonne un monde à explorer !<br className='sm:block hidden' />

        Passionné par les technologies interactives, je transforme des idées en
        projets concrets, que ce soit à travers des sites web stylés, des expériences
        en <span className='text-[#FFD580]'>réalité virtuelle</span>, ou des <span className='text-[#FFD580]'>jeux</span> où l’amusement est toujours au centre.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
