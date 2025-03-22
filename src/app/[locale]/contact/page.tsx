'use client';

import ContactForm from '@/app/features/contact-form/contact-form';
import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <section className="col-span-4 mx-auto p-6">
            <Fade>
                <header className="text-center mt-20 md:mt-36">
                    <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">{t('h1')}</h1>
                </header>
            </Fade>

            <div className="mt-20 md:mt-28 mb-40 md:mb-36">
                <ContactForm />
            </div>
        </section>
    );
}
