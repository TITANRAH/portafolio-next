"use client";
import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

function ButtonDownloadCV() {
  return (
    <Link
      download={"/curriculum.pdf"}
      href={"/curriculum.pdf"}
      target="_blank"
      className="py-3 px-2 flex justify-center rounded-xl border-2 text-center  border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white  font-bold"
    >
      <Download className="mr-2" size={20} /> DESCARGA CV
    </Link>
  );
}

export default ButtonDownloadCV;
