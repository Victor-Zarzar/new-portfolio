"use client"
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function About() {
    return (
        <div className="rounded-lg p-6">
            <Fade>
                <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">About Me</h1>
            </Fade>
            <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                My first contact with programming was in 2009, using SQL-SERVER 2000 & My SQL technologies, creating, restoring and editing databases, and creating sites in PHP. Always looking to improve my knowledge daily, Im not afraid of the unknown, I try to evolve every day, new challenges are welcome. I love learning about new technologies and solving problems. In love with coffee, my vinyl records & Rock n Roll 🤘🏻.
            </p>
            <div className="timeline">

            </div>
            <div className="rounded-lg p-6 mt-4">
                <Fade>
                    <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-4">Languagem</h1>
                </Fade>
                <div className="flex">
                    <div className="flex items-center mx-auto mt-10">
                        <Image
                            src="/us.png"
                            alt="us"
                            width={20}
                            height={20}
                            priority
                            className='h-3 w-3 md:w-7 md:h-7 mr-1'
                        />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">English - Basic Tech</span>
                    </div>
                </div>
                <div className="flex mb-20">
                    <div className="flex items-center mx-auto mt-5">
                        <Image
                            src="/br.png"
                            alt="br"
                            width={20}
                            height={20}
                            priority
                            className='h-3 w-3 md:w-7 md:h-7 mr-1'
                        />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">PT-BR - Native Speaker</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
