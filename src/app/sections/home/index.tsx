import { cn } from "@/utils/tailwindUtils";
import Image from "next/image";

export const Home = () => {
  return (
    <section
      className={cn(
        "w-full bg-gradient-to-b from-[#E6F4F1] to-transparent",
        "flex flex-col items-center justify-center pt-24"
      )}
    >
      <div className="flex max-sm:flex-col items-center justify-center">
        <h1 className="text-center max-sm:text-6xl text-8xl">
          Artefatos
          <br />
          Escolares
        </h1>

        <Image
          src={"/assets/brand/professora-filled.png"}
          alt="Professora Marka"
          width={563}
          height={771}
          className="w-[200px]"
        />
      </div>

      <p className="text-center text-2xl">
        Encontre nossos produtos nos melhores atacados!
      </p>

      <div className="flex gap-x-10 mt-4">
        <a
          href="https://www.casanorte.com.br/?sp=109287"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src={"/assets/images/casa-norte.png"}
            alt=""
            width={96}
            height={35}
            className="bg-[#3498db] p-2 rounded-md h-[48px] w-auto"
          />
        </a>

        <Image
          src={"/assets/images/iskisita.png"}
          alt=""
          width={3001}
          height={719}
          className="bg-[#3498db] p-2 rounded-md h-[48px] w-auto"
        />
      </div>
    </section>
  );
};
