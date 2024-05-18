import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button";

export default function NotFound404() {
    return (
        <div className='dark:bg-stone-900 dark:border-b dark:border-stone-600 mt-0 h-screen'>
            <section className="section">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mt-48 md:mt-52 md:mb-0">
                        <h1 className="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we couldn´t find this page.</p>
                        <Link href={'/'}>
                            <Button className="font-semibold px-2 md:px-6 py-3">Back to Homepage</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
