'use client';
import Header from '../components/Header/Header';
import Skills from '../components/Skills/Skills';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
            <Skills />
        </main>
    );
}
