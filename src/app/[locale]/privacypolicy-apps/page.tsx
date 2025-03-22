'use client';

import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';

export default function PrivacyPolicyApps() {
    const t = useTranslations('PrivacyPolicyApps');

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
        <main className="py-10 px-4 mx-auto max-w-3xl">
            <section className="text-center mb-16">
                <Fade>
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6">{t('h1')}</h1>
                </Fade>
                <p className="text-lg md:text-xl font-semibold leading-relaxed">{t('p')}</p>
            </section>

            <section className="text-center mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{t('h2')}</h2>
                <ul className="list-disc list-inside mx-auto max-w-md">
                    <li className="mb-3">{t('app1')}</li>
                    <li className="mb-3">{t('app2')}</li>
                    <li className="mb-3">{t('app3')}</li>
                </ul>
            </section>

            {sections.map((section, index) => (
                <section key={index} className="text-center mt-10">
                    <p className="text-lg md:text-xl font-semibold leading-relaxed">{t(section)}</p>
                </section>
            ))}

            <section className="text-center mt-10">
                <ul className="list-disc list-inside mx-auto max-w-md">
                    <li className="mb-3">{t('email')}</li>
                    <li className="mb-20">{t('website')}</li>
                </ul>
            </section>
        </main>
    );
}
