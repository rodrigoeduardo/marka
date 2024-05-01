export const Navbar = () => {
  return (
    <nav className="flex justify-between w-full px-8 py-6">
      <h1 className="font-bold text-lg">MARKA</h1>

      <ul className="flex gap-x-4">
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
