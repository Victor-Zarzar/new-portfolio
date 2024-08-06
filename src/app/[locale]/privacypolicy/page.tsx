'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
    const t = useTranslations('PrivacyPolicy');

    const sections = [
        'service',
        'informationcollected',
        'infocollected',
        'localization',
        'providerservice',
        'security',
        'securitydescription',
        'childrensprivacy',
        'childrensprivacydescription',
        'changestothisprivacypolicy',
        'changesdescription',
        'contactme',
        'contactmedescription',
        'contactinformation',
    ];

    return (
        <div>
            <div className="h1 p-6">
                <Fade>
                    <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                        {t('h1')}
                    </h1>
                </Fade>
            </div>
            <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                {t('p')}
            </p>
            <div className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                {t('h2')}
            </div>
            <div className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                <ul>
                    <li className="mb-3">{t('app1')}</li>
                    <li className="mb-3">{t('app2')}</li>
                </ul>
            </div>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10"
                >
                    <p>{t(section)}</p>
                </div>
            ))}
            <div className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                <ul>
                    <li className="mb-3">{t('email')}</li>
                    <li className="mb-20">{t('website')}</li>
                </ul>
            </div>
        </div>
    );
}