import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SectionHeader(props: Props) {
  const { children } = props;
  return (
    // w-fit es el contenido osea que el ancho serasolo del contenido

    <h1 className="border-4  border-lime-400 bg-slate-950 w-fit text-center px-4 py-3 mx-auto text-lime-500 text-2xl sm:text-3xl -rotate-6 rounded-full hover:bg-lime-400 hover:border-lime-400 hover:text-slate-950 cursor-pointer">
      {children}
    </h1>
  );
}

export default SectionHeader;
