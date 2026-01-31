import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full group border border-transparent hover:border-[#f97316]/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300'
      >
        <div className='relative w-full h-[290px] overflow-hidden rounded-2xl'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-black/50 backdrop-blur-sm border border-white/10 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/70 transition-colors'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 cursor-pointer' onClick={() => window.open(link, "_blank")}>
          <h3 className='text-white font-bold text-[24px] group-hover:text-[#f97316] transition-colors duration-300'>{name}</h3>
          <p className='mt-2 text-[#a1a1aa] text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 cursor-pointer' onClick={() => window.open(link, "_blank")}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p

          className='mt-3 text-[#a1a1aa] text-[17px] max-w-3xl leading-[30px]'
        >
          These projects reflect real-world problem solving across automation,
          full-stack development, and API integration. Each one includes a brief
          overview and links to source code — some with live demos. They showcase
          my ability to ship working software with different technologies and
          architectural approaches.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
