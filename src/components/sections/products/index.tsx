import { PRODUCTS } from "@/domain/products";
import Image from "next/image";

export const Products = () => {
  return (
    <section id="produtos">
      <h1>Nossos Produtos</h1>

      <ul className="flex flex-col items-center">
        {PRODUCTS.map((product) => {
          const productName = `${product.type} ${product.quantity}${product.unit}`;

          return (
            <li key={product.serialNumber}>
              <Image
                src={`/assets/products/${product.serialNumber}.jpg`}
                alt={productName}
                width={531}
                height={378}
              />

              <h2>{productName}</h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
