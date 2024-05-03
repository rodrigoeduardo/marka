import Image from "next/image";
import { FaSquareEnvelope, FaSquareWhatsapp } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section id="contato" className="max-w-[1280px] w-full">
      <header className="mb-8 ml-2">
        <h1 className="text-6xl max-sm:text-4xl font-bold">Contato</h1>
      </header>

      <div className="flex max-md:flex-col justify-around items-center gap-8 px-8">
        <div>
          <h3 className="text-4xl">Herculano Barbalho</h3>
          <h4 className="text-2xl">Diretor Comercial</h4>

          <div className="flex items-center gap-4 mt-2">
            <FaSquareEnvelope size={40} color="#eb1a40" />
            <a
              href="mailto:marka.artef.escolar@hotmail.com"
              className="text-3xl max-sm:text-xl"
            >
              marka.artef.escolar@hotmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaSquareWhatsapp size={40} color="#25d366" />
            <a href="tel:+5584988114200" className="text-3xl max-sm:text-xl">
              (84) 98811-4200
            </a>
          </div>
        </div>

        <div>
          <Image
            src={"/assets/brand/marka-logo.png"}
            alt={"Marka Logo"}
            width={2297}
            height={835}
            className="h-auto w-[440px]"
          />
        </div>
      </div>
    </section>
  );
};
