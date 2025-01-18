'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ThemeProvider } from 'next-themes';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieConsentComponent from '../CookieConsent/CookieConsent';

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [hasConsented, setHasConsented] = useState(false);

    const contextClass = {
        success: 'bg-blue-600',
        error: 'bg-red-600',
        info: 'bg-gray-600',
        warning: 'bg-orange-400',
        default: 'bg-indigo-600',
        dark: 'bg-white-600 font-gray-300',
    };

    useEffect(() => {
        if (document.cookie.includes('cookieConsent=true')) {
            setHasConsented(true);
        }
    }, []);

    function handleAccept() {
        setHasConsented(true);
    }

    function handleDecline() {
        setHasConsented(false);
    }

    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Navbar />
                {children}
                <ToastContainer
                    toastClassName={(context) =>
                        contextClass[context?.type || 'default'] +
                        ' relative flex p-1 min-h-10 max-w-xs md:max-w-2xl mx-auto rounded-md justify-between overflow-hidden cursor-pointer'
                    }
                    className={() => 'text-sm font-white font-med block p-3'}
                    position="top-right"
                    autoClose={3000}
                />
                {hasConsented && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />}
                <CookieConsentComponent onAcceptCallback={handleAccept} onDeclineCallback={handleDecline} />
                <Footer />
            </ThemeProvider>
        </>
    );
}