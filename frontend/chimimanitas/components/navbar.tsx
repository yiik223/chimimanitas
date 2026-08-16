import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
        <Link href="/" className="text-xl font-bold">
            Chimimanitas 
        </Link>

      <div className="flex gap-6">
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/donaciones">Donaciones</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}