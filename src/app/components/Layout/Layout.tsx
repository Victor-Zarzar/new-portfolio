import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import 'rsuite/dist/rsuite-no-reset.min.css';

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <Navbar />
                {children}
                <Footer />
            </NextThemesProvider>
        </>
    );
}