import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 py-20 text-center">
      <h1 className="text-4xl font-bold">
        Tejidos hechos a mano 🧶
      </h1>

      <p className="mt-4 max-w-xl text-lg">
        Diseños únicos tejidos 100% a mano para darle calidez a tu día.
      </p>

      <Link
        href="/catalogo"
        className="mt-8 rounded-lg bg-black px-6 py-3 text-white"
      >
        Ver catálogo
      </Link>
    </section>
  );
}