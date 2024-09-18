"use client";

import { aboutInfo } from "@/app/data/data";
import SectionHeader from "@/components/helper/SectionHeader";
import {
  BookCheck,
  BookOpenCheck,
  Eye,
  SquareDashedBottomCode,
  UserCog,

} from "lucide-react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useModal } from "../shared/modal/provider";
import ShowCategory from "../shared/ShowCategory";

function About() {
  const modal = useModal();


  function showModalCategorie(categoryEntrie: string) {
    return modal?.show(<ShowCategory category={categoryEntrie} />);
  }
  return (
    <div className=" pb-16" id="acerca-de">
      <SectionHeader>Acerca de mi</SectionHeader>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-white/90">
            {aboutInfo.description}
          </p>

          <div className="mt-8 ">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-7 bg-black-950 flex flex-col items-center justify-center">
                <FaCheck className="text-lime-500" />
              </div>

              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-7 bg-black-950 flex flex-col items-center justify-center">
                <FaCheck className="text-lime-500" />
              </div>

              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-7 bg-black-950 flex flex-col items-center justify-center">
                <FaCheck className="text-lime-500" />
              </div>

              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                FullStack Development
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <div className="flex flex-col justify-center items-center" >
            <BookCheck className="text-lime-400 w-16 h-16" />

            <p className="mt-3 font-bold test-xl text-white text-center">
              {aboutInfo.cursos}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Cursos realizados
            </p>

            <div className="flex flex-row gap-2 cursor-pointer" onClick={()=>showModalCategorie('courses')}>
              <Eye className="text-lime-400 animation" />
              <p className="hidden md:block text-lime-400">Ver en detalle</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <SquareDashedBottomCode className="text-lime-400 w-16 h-16" />

            <p className="mt-3 font-bold test-xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Años de experiencia
            </p>
            <div className="flex flex-row gap-2 cursor-pointer" onClick={()=>showModalCategorie('years')}>
              <Eye className=" text-lime-400 animation" />
              <p className="hidden md:block text-lime-400">Ver en detalle</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <UserCog className="text-lime-400 w-16 h-16" />

            <p className="mt-3 font-bold test-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Proyectos liderados
            </p>
            <div className="flex flex-row gap-2 cursor-pointer" onClick={()=>showModalCategorie('lead-project')}>
              <Eye className="text-lime-400 animation" />
              <p className="hidden md:block text-lime-400">Ver en detalle</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BookOpenCheck className="text-lime-400 w-16 h-16" />

            <p className="mt-3 font-bold test-xl text-white text-center">
              {aboutInfo.studies}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Formación
            </p>
            <div className="flex flex-row gap-2 cursor-pointer" onClick={()=>showModalCategorie('studies')}>
              <Eye className="text-lime-400 animation" />
              <p className="hidden md:block text-lime-400">Ver en detalle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
