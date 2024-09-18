"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import ButtonDownloadCV from "./ButtonDownloadCV";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
  openNav: () => void;
}

function Navbar(props: Props) {
  const [navBg, setNavBg] = useState<boolean>();

  useEffect(() => {
    const handler = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 90) {
          setNavBg(true);
        }
        if (window.scrollY < 90) {
          setNavBg(false);
        }
      }
      
    );
  };
  
  window.addEventListener("scroll", handler);
  return () => {
    window.removeEventListener("scroll", handler);
  };

  }, []);

  const { openNav } = props;
  return (
    <div
      className={`fixed ${
        navBg ? "bg-slate-950 fade-in " : "fixed"
      } h-[10vh] z-[10]  transition-all duration-200 w-full `}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[90%] mx-auto">
        <Image
          src="/img/titan-dev.gif"
          alt="logo"
          width={160}
          height={180}
          className="h-[17vh]"
        />

        <div className=" justify-end items-center space-x-8 hidden lg:flex ">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">{link.label}</p>
            </Link>
          ))}
          <ButtonDownloadCV />
        </div>
        <HiBars3BottomRight
          className="text-white flex lg:hidden"
          size={40}
          onClick={openNav}
        />
      </div>
    </div>
  );
}

export default Navbar;
