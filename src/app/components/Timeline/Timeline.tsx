import React from "react";
import { Timeline } from 'rsuite';
import { Fade } from "react-awesome-reveal";
import { FaReact, FaBug } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

export default function TimelineComponent() {
  return (
    <>
      <div className='mx-auto mt-28 mb-28'>
        <Fade>
          <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">Experiences Tech & Education</h1>
        </Fade>
      </div>
      <div className="timeline flex justify-center items-center mt-8 mb-16">
        <Timeline endless className="custom-timeline max-w-3xl">
          <Timeline.Item dot={<FaReact className="pr-1" />} className="text-sm md:text-xl lg:text-2xl">
            <p>March 2023 - Present</p>
            <p>XLabs Security</p>
            <p>Front-End Developer - Front web and Flutter Mobile.</p>
            <p>São Leopoldo, RS, Brazil - Remote</p>
          </Timeline.Item>
          <Timeline.Item dot={<FaBug className="pr-1.5" />} className="text-sm md:text-xl lg:text-2xl">
            <p>December 2022 - March 2023</p>
            <p>Freelance</p>
            <p>QA Tester - Functional, Usability, Load, Localization, Accessibility, Regression.</p>
            <p>Novo Hamburgo, RS, Brazil - Remote</p>
          </Timeline.Item>
          <Timeline.Item dot={<IoIosSchool className="pr-1" />} className="text-sm md:text-xl lg:text-2xl">
            <p>Apr 2024 - Oct 2027 - Ampli SP</p>
            <p>Software Engineering</p>
          </Timeline.Item>
          <Timeline.Item dot={<IoIosSchool className="pr-1" />} className="text-sm md:text-xl lg:text-2xl">
            <p>Jul 2022 - Jul 2024 - Ampli SP</p>
            <p>Analysis and systems development</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  )
}
