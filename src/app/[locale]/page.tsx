'use client';

import Skills from '../entities/skills/Skills';
import Header from '../widgets/header/header-layout';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
            <Skills />
        </main>
    );
}
