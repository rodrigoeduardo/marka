import { cn } from "@/utils/tailwindUtils";
import Image from "next/image";

export const Home = () => {
  return (
    <section
      className={cn(
        "w-full h-[500px] flex max-sm:flex-col items-center justify-center",
        "bg-gradient-to-b from-[#E6F4F1] to-transparent"
      )}
    >
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
    </section>
  );
};
