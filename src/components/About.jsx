import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card group'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 group-hover:bg-[#1e1e1e] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110'
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
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#a1a1aa] text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Full Stack Engineer with 5+ years of hands-on experience building web applications, automation systems, and developer tools. My stack spans React, Node.js, Python, and modern databases — and I'm comfortable working across the entire pipeline from frontend interfaces to backend APIs and infrastructure. Right now, I'm deep in the FiveM and RedM ecosystem, designing custom game frameworks, multiplayer mechanics, and server architectures. But my background goes well beyond modding — I've built full-stack platforms, bots, cross-platform tools, and open-source projects used by developers worldwide. I focus on writing clean, performant code that ships and scales.
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
