import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface Props {
  showNavbar: boolean;
  closeNav: () => void;
}

function MobilNavbar(props: Props) {
  // recibimos el estado y la funcion para cerrar el menu lateral
  const { showNavbar, closeNav } = props;

  // si el estado es verdadero se abre el menu lateral trasladando el div a 0 si es falso se cierra trasladando el div a la izquierda
  const navOpen = showNavbar ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}

      {/* lo mismo esta clase  */}
      <div
        className={`${navOpen} transform transition-all fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>

      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:[60%] bg-[#0f0715] space-y-6 z-[1006]`}
      >
        {" "}
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p onClick={closeNav} className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
              {link.label}

            </p>
          </Link>
        ))}
        <CgClose
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 h-6 text-white"
          onClick={closeNav}
        />
      </div>
    </div>
  );
}

export default MobilNavbar;
