'use client';
import React from 'react';
import SkillOutline from './IconSkills';
import { skills } from './IconSkills';
import { Fade } from 'react-awesome-reveal';
import { useTranslations } from 'next-intl';

export default function Skills() {
    const t = useTranslations('Skills');

    return (
        <section className="space-y-6 max-w-lg md:max-w-3xl mt-28 mb-16">
            <header className="text-center mb-20">
                <Fade>
                    <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">{t('h1')}</h1>
                </Fade>
                <p className="text-sm leading-relaxed mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('p')}</p>
            </header>
            <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-2 md:gap-4 lg:gap-5">
                {skills.map((skill) => (
                    <article key={skill.text} className="flex flex-col items-center">
                        <SkillOutline Icon={skill.icon} text={skill.text} />
                    </article>
                ))}
            </div>
        </section>
    );
}