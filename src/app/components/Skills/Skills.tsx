"use client"
import React from 'react';
import SkillOutline from './IconSkills';
import { skills } from './IconSkills';
import { Fade } from 'react-awesome-reveal';

export default function Skills() {
    return (
        <div className="space-y-1 max-w-lg md:max-w-3xl mt-28 mb-16">
            <div className="text-center mb-20">
                <Fade>
                    <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center">Skills</h1>
                </Fade>
                <p className="text-sm leading-relaxed mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter">Some of the technologies I use in my daily life</p>
                <div className="flex mt-6 justify-center">
                </div>
            </div>
            <div className="gap-3.5 p-4 sm:p-0 w-96 sm:w-full sm:gap-2 md:gap-4 lg:gap-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {skills.map((skill) => (
                    <SkillOutline
                        key={skill.text}
                        Icon={skill.icon}
                        text={skill.text}
                    />
                ))}
            </div>
        </div>
    )
}