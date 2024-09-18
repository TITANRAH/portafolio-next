"use client";

import { entries } from "@/app/data/data";
import { EntrieAboutInterface } from "@/interfaces/entries.about.interface";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useModal } from "./modal/provider";
import Link from "next/link";

interface Props {
  category: string;
}

function ShowCategory(props: Props) {
  const { category } = props;
  const modal = useModal();
  const [data, setData] = useState<EntrieAboutInterface[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    function selectedEntries() {
      if (category) {
        switch (category) {
          case "courses":
            setTitle("Algunos de los cursos que he realizado");
            break;
          case "years":
            setTitle("Parte de mi experiencia en estos 3+ años...");
            break;
          case "lead-project":
            setTitle("Algunos de los proyectos que he liderado son");
            break;
          case "studies":
            setTitle(
              "Las estudios mas importantes que he realizado son..."
            );
            break;
        }
        setData(entries.filter((entrie) => entrie.category === category));
      }
    }
    selectedEntries();
  }, [category]);

  return (
    <div className="bg-slate-100 w-[90vw] sm:w-1/2 max-h-200px md:max-h-[80vh] overflow-x-scroll p-3 rounded-xl fade-in">
      <X className="ml-auto cursor-pointer" onClick={modal?.hide} />
      <div className="my-5 ">
        <p className="text-10xl text-black underline font-bold my-5">
          {title.toUpperCase()}
        </p>
        <ul>
          {data.map((e) => (
            <li key={e.id} className="gap-2 list-decimal ml-6">
              {" "}
              <Link href={`#${e.id}`} className="underline text-lime-700">
                {" "}
                {e.title}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
      {data.map((e, index) => (
        <div key={e.id} className="flex flex-col items-start mb-10 gap-3">
          <div className="flex flex-row items-center gap-2" id={e.id}>
            <h1>{(index + 1).toString()})</h1>
            <h1 className="underline font-bold"> {e.title}</h1>
          </div>

          <p className="text-[14px] text-justify"> {e.description} {
            e.href && (
            <Link href={e.href} target="_blank" className="underline texst-indigo-500 font-bold hover:text-indigo-800">
                Visitar
            </Link>
            )
            } </p>

          {e.images.map((i, index) => (
            <>
              {!e.href ? (
                <Image
                  className="w-full "
                  key={index}
                  src={i}
                  alt="img"
                  width={600}
                  height={600}
                />
              ) : (
                <Link href={e.href!} target="_blank">
                  <Image
                    className="w-full "
                    key={index}
                    src={i}
                    alt="img"
                    width={600}
                    height={600}
                  />
                </Link>
              )}
            </>
          ))}
        </div>
      ))}

      <div className="col-span-1"></div>
    </div>
  );
}

export default ShowCategory;
