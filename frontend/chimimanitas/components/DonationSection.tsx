import Link from "next/link";

export default function Donaciones() {
  return (
    <main className="flex-1 px-6 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">
          Apoya a Chimimanitas ❤️
        </h1>

        <p className="mt-6 text-lg">
          Cada apoyo nos permite continuar creando tejidos únicos
          y seguir desarrollando nuevas ideas.
        </p>

        <div className="mt-10 rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">
            Haz una donación
          </h2>

          <p className="mt-4">
            Próximamente podrás apoyarnos directamente desde aquí.
          </p>

          <Link href="/donaciones" className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white"> Apoyar a Chimimanitas</Link>
        </div>
      </section>
    </main>
  );
}