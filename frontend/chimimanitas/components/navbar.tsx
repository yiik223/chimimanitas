"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between bg-[#39334F] px-6 py-4 text-white">
        <Link
          href="/"
          className="text-xl font-bold hover:opacity-80"
        >
          Chimi manitas
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="hover:opacity-80">
            Inicio
          </Link>

          <Link href="/catalogo" className="hover:opacity-80">
            Catálogo
          </Link>

          <Link href="/donaciones" className="hover:opacity-80">
            Donaciones
          </Link>

          <Link href="/contacto" className="hover:opacity-80">
            Contacto
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 bg-[#39334F] px-6 py-4 text-white md:hidden">
          <Link href="/" className="hover:opacity-80">
            Inicio
          </Link>

          <Link href="/catalogo" className="hover:opacity-80">
            Catálogo
          </Link>

          <Link href="/donaciones" className="hover:opacity-80">
            Donaciones
          </Link>

          <Link href="/contacto" className="hover:opacity-80">
            Contacto
          </Link>
        </div>
      )}
    </>
  );
}