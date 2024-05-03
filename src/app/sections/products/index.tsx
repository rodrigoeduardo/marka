import { PRODUCTS } from "@/domain/products";
import Image from "next/image";

export const Products = () => {
  return (
    <section id="produtos" className="max-w-[1280px] w-full">
      <header className="mb-8 ml-4">
        <h1 className="text-6xl max-sm:text-4xl font-bold">Nossos Produtos</h1>
      </header>

      <ul className="flex items-center flex-wrap justify-evenly">
        {PRODUCTS.map((product) => {
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
    </section>
  );
};
