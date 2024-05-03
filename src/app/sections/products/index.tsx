import { PRODUCTS, ProductType, Unit } from "@/domain/products";
import Image from "next/image";

const LIMPADORES = PRODUCTS.filter(
  (product) => product.type === ProductType.LIMPADOR_QUADRO_BCO
);

const TINTAS = PRODUCTS.filter(
  (product) => product.type === ProductType.TINTA_MARCADOR_QUADRO_BCO
).sort((a, b) => {
  const aVolume = a.quantity * (a.unit === Unit.LITER ? 1000 : 1);
  const bVolume = b.quantity * (b.unit === Unit.LITER ? 1000 : 1);

  return aVolume - bVolume;
});

export const Products = () => {
  return (
    <section id="produtos" className="max-w-[1280px] w-full">
      <header className="mb-8 ml-4">
        <h1 className="text-6xl max-sm:text-4xl font-bold">Nossos Produtos</h1>
      </header>

      <div className="ml-4 flex flex-col gap-y-6">
        <h2 className="text-4xl max-sm:text-2xl">
          Limpadores de Quadro Branco e <br className="sm:hidden" />
          Quadro de Vidro
        </h2>

        <ul className="flex items-center flex-wrap justify-evenly">
          {LIMPADORES.map((product) => {
            const productName = `${product.type} ${product.quantity}${
              product.unit
            }${product.color ? ` - ${product.color}` : ""}`;

            return (
              <li
                key={product.serialNumber}
                className="flex flex-col items-center max-w-[240px] p-4"
              >
                <Image
                  src={product.image.url}
                  alt={productName}
                  width={531}
                  height={378}
                  className="max-h-[148px] w-auto"
                />

                <h2 className="text-center">{productName}</h2>
              </li>
            );
          })}
        </ul>

        <h2 className="text-4xl max-sm:text-2xl">
          Tintas para Marcador de <br className="sm:hidden" />
          Quadro Branco
        </h2>

        <ul className="flex items-center flex-wrap justify-evenly">
          {TINTAS.map((product) => {
            const productName = `${product.type} ${product.quantity}${
              product.unit
            }${product.color ? ` - ${product.color}` : ""}`;

            return (
              <li key={product.serialNumber} className="max-w-[240px] p-4">
                <Image
                  src={`/assets/products/${product.serialNumber}.jpg`}
                  alt={productName}
                  width={531}
                  height={378}
                />

                <h2 className="text-center">{productName}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
