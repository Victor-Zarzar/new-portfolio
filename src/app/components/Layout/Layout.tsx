'use client';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    const contextClass = {
        success: 'bg-blue-600',
        error: 'bg-red-600',
        info: 'bg-gray-600',
        warning: 'bg-orange-400',
        default: 'bg-indigo-600',
        dark: 'bg-white-600 font-gray-300',
    };

    return (
        <>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <Navbar />
                {children}
                <ToastContainer
                    toastClassName={(context) =>
                        contextClass[context?.type || 'default'] +
                        ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
                    }
                    bodyClassName={() => 'text-sm font-white font-med block p-3'}
                    position="top-right"
                    autoClose={3000}
                />
                <Footer />
            </NextThemesProvider>
        </>
    );
}