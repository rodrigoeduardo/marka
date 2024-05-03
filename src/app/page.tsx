import { Contact } from "@/app/sections/contact";
import { Home } from "@/app/sections/home";
import { Products } from "@/app/sections/products";

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full gap-y-24">
      <Home />

      <Products />

      <Contact />
    </main>
  );
}
