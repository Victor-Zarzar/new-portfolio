"use client"
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from "next/link"
import { NavItem } from "@/app/types/main"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { useTheme } from "next-themes";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "about",
    },
    {
      label: "Projects",
      link: "projects",
    },
    {
      label: "Contact",
      link: "contact",
    },
  ]

  return (
    <div className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <div className="container flex items-center space-x-2">
              <h2 className="text-2xl font-bold">Victor Zarzar</h2>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 z-50 bg-opacity-90 ${navbar ? "block" : "hidden"
              }`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-3 lg:space-x-6 md:space-y-0 text-center">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className={
                      "block lg:inline-block hover:text-neutral-500cursor-pointer"
                    }
                    onClick={() => setNavbar(!navbar)}>
                    {item.label}
                  </Link>
                )
              })}
               {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="p-2 rounded-xl">
                  <RiSunLine size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="p-2 rounded-xl">
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
