import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { link } from "../assets";

type ExperienceTypes = {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  points: string[];
  link: string;
  date: string;
};
const ExperienceCard = ({ experience }: { experience: ExperienceTypes }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.icon && (
            <img
              src={experience.icon}
              alt={experience.title}
              className='w-[60%] h-[60%] object-contain rounded-full'
            />
          )}
        </div>
      }>
      <div>
        <a href={experience.link} className='flex' target='_blank'>
          <span className='text-white text-[24px] font-bold'>
            {experience.title}
          </span>
          <img
            src={link}
            alt='menu'
            className='w-[20px] h-[20px] mt-1 ml-1 hover:scale-125 transition ease-in-out delay-150'
          />
        </a>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}>
          {experience.companyName}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
