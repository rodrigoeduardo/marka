"use client";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-8 sm:px-16 py-6 bg-[#EAFDFF] drop-shadow-lg">
      <Image
        src={"/assets/brand/marka-logo.png"}
        alt={"Marka Logo"}
        width={2297}
        height={835}
        className="h-auto w-[240px] max-sm:hidden"
      />

      <Image
        src={"/assets/brand/marka-logo-no-subtitle.png"}
        alt={"Marka Logo"}
        width={2297}
        height={642}
        className="h-auto w-[120px] sm:hidden"
      />

      <ul className="flex gap-x-4 text-2xl max-sm:text-lg">
        <li>
          <a href="#produtos">🛒 Produtos</a>
        </li>
        <li>
          <a href="#contato">✉️ Contato</a>
        </li>
      </ul>
    </nav>
  );
};
