"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

import Image from "next/image";

import titandev from "@/public/img/titandev2.jpg";
import SectionHeader from "@/components/helper/SectionHeader";
import Link from "next/link";

// info
interface InfoData {
  icon: JSX.Element;
  text: string;
  download: string;
}

interface CertificadosData {
  icon: JSX.Element;
  text: string;
  download: string;
}

const infoData: InfoData[] = [
  {
    icon: <GraduationCap size={20} />,
    text: "Soporte informático",
    download: "/titulo_icel.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Analista de Sistema",
    download: "/titulo_esucomex.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: " Bootcamp Desafío Latam",
    download: "/titulo_desafio_latam.png",
  },
];

// certificados
const certificados: CertificadosData[] = [
  {
    icon: <GraduationCap size={20} />,
    text: "Angular 14",
    download: "/certificado_angular_14.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Certificado de enseñanza media",
    download: "/certificado_enseñanza_media.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Udemy Angular y Node",
    download: "/certificado_udemy_node_angular.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Diplomado análisis y programación",
    download: "/diplomado_analisis_programacion.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Diplomado en base de datos Sql",
    download: "/diplomado_base_datos.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Diplomado en desarrollo de app's empresariales",
    download: "/diplomado_desarrollo_app_empresariales.pdf",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Diplomado en programación de software",
    download: "/diplomado_programacion_software.pdf",
  },
];

export default function Download() {
  // creo una funcion general para cualquiera de los arreglos
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  getData(infoData, "titulos");

  // console.log('entro al console',getData(qualificationData, 'experience' ));

  return (
    <section className=" py-12 xl:py-24 xl:max-w-[1380px]  " id="download">
      <div className="container mx-auto">
        <SectionHeader>Download</SectionHeader>
      </div>
      <div className="flex flex-row justify-between xl:flex-row mt-20 w-[95%] md:w-2/3 m-auto gap-5">
        {/* image */}
        <div className="hidden xl:flex flex-1 justify-center items-center">
          <Image
            src={titandev}
            width={1000}
            height={1000}
            alt="titandev2"
            className="object-cover object-center h-[500px] w-96 rounded-xl"
          />
        </div>

        <div className="flex w-full justify-center xl:flex-1 text-white">
          <Tabs defaultValue="titulos">
            <TabsList className="w-full grid grid-cols-2 xl:grid-cols-2 xl:max-w-[520px] xl:border border-lime-500 border-2 bg-slate-950">
              <TabsTrigger className="w-full text-lime-400 " value="titulos" inlist={infoData} >
                Descarga títulos
              </TabsTrigger>
              <TabsTrigger
                className=" w-full text-lime-400 "
                value="certificados"
              >
                Descarga certificados
              </TabsTrigger>
            </TabsList>

            {/* tabs content */}

            <div className="text-lg mx-5 mt-12 xl:mt-8 w-4/5">
              <TabsContent value="titulos">
                <div className="text-center xl:text-left">
                  {/* icons */}
                  <div className="grid xl:grid-cols-1 gap-4 mb-12 mt-10">
                    {infoData.map((i, index) => {
                      return (
                        <Link
                          href={i.download}
                          download={i.download}
                          target="_blank"
                          key={index}
                        >
                          <div
                            key={index}
                            className="flex items-start gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-lime-400 hover:text-lime-600">{i.icon}</div>
                            <div className="hover:text-lime-600">{i.text}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="certificados">
                {/* icons */}
                <div className="grid xl:grid-cols-1 gap-4 mb-12 mt-10">
                  {certificados.map((i, index) => {
                    return (
                      <Link
                        href={i.download}
                        download={i.download}
                        target="_blank"
                        key={index}

                      >
                        <div
                          key={index}
                          className="flex items-start gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-lime-400">{i.icon}</div>
                          <div className="hover:text-lime-500">{i.text}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
