"use client";
import Image, { StaticImageData } from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import "swiper/css";
import "swiper/css/pagination"; // Importa los estilos de paginación
import avatar1 from "@/public/img/avatar-1.png";
import avatar2 from "@/public/img/avatar-2.jpeg";
import diego from "@/public/img/diego.jpeg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "@/components/helper/SectionHeader";

interface Reviews {
  avatar: StaticImageData;
  name: string;
  contact_number: string;
  email: string;
  job: string;
  review: string;
}

const reviewsData: Reviews[] = [
  {
    avatar: avatar1,
    name: "Gabriel Cortés",
    job: "CTO",
    contact_number: "+56 9 5789 1176",
    email: "gabriel.cortes@gmail.com",
    review:
      "Excelente profesional, muy comprometido con su trabajo, siempre dispuesto a ayudar y aportar soluciones. Un placer trabajar con él.",
  },
  {
    avatar: avatar2,
    name: "Mario Alvarez",
    job: "Tech Lead UI/UX",
    contact_number: "+56 9 9199 5000",
    email: "mario.alvarez@medismart.live",
    review:
      " Un profesional con una gran capacidad de trabajo y una actitud positiva que contagia a todo el equipo. Siempre dispuesto a aprender y enseñar con una mentalidad de equipo en todo momento.",
  },
  {
    avatar: diego,
    name: "Diego Tapia",
    job: "Ingeniero Mecánico",
    contact_number: "+56 9 9697 0451",
    email: "diegotapiamecanico@gmail.com",
    review:
      "Estamos trabajando un proyecto que necesito para mi establecimiento mecánico y hasta ahora ha sido muy paciente y comprometido con lo que necesito, recomendable y un gusto trabajar con el.",
  },
];

const Reviews = () => {
  return (
    <section className=" text-white " id="recomendaciones">
      <SectionHeader>Recomendaciones</SectionHeader>
      <div className="px-5 mt-20">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            // cuantos se veran segun medida
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="min-h-[350px]"
        >
          {reviewsData.map((r, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary cursor-pointer border-lime-400 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* imageavatar */}
                      <Image
                        className="rounded-full"
                        src={r.avatar}
                        alt="avatar"
                        width={70}
                        height={70}
                        priority
                      />
                      {/* name  */}
                      <div className="flex flex-col text-slate-100">
                        <CardTitle>{r.name}</CardTitle>
                        <p>{r.job}</p>
                        <p className="text-[12px] text-lime-400">
                          {r.contact_number}
                        </p>
                        <p className="text-[12px] text-lime-400">{r.email}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardDescription className="text-lg -skew-x-3 text-slate-100">
                    "{r.review}"
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
