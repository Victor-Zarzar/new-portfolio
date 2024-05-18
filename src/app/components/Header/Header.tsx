"use client"
import React from "react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <>
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Avatar className='w-40 h-40 md:w-72 md:h-72 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto mt-2'>
                        <AvatarImage src="profile.jpg" />
                        <AvatarFallback className="dark:bg-stone-900">VZ</AvatarFallback>
                    </Avatar>
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <Bounce>
                        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">Welcome to my portfolio,</h1>
                        <p className="text-lg mt-4 mb-6 md:text-2xl">
                            <span className="font-semibold text-gray-600">
                                I´am Front-End Developer🖖🏻
                            </span>
                        </p>
                    </Bounce>
                    <div className="container-button mx-auto space-x-1 flex">
                        <Link href={"https://github.com/Victor-Zarzar"} target="blank">
                            <Button className="px-2 md:px-4"> <FaGithub className="mr-1" /> Github</Button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/victorzarzar"} target="blank">
                            <Button className="px-2 md:px-4"> <FaLinkedin className="mr-1" /> Linkedin</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <HiArrowDown size={35} className="animate-bounce" />
            </div>
        </>
    )
}