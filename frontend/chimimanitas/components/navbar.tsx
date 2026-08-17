import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#39334F] px-6 py-4 text-white">
        <Link href="/" className="text-xl font-bold">
            Chimi manitas 
        </Link>

      <div className="flex gap-6">
        <Link href="/" className="hover:opacity-80">Inicio</Link>
        <Link href="/catalogo" className="hover:opacity-80">Catálogo</Link>
        <Link href="/donaciones" className="hover:opacity-80">Donaciones</Link>
        <Link href="/contacto" className="hover:opacity-80">Contacto</Link>
      </div>  
    </nav>
  );
}