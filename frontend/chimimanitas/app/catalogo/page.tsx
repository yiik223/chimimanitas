export default function Catalogo() {
  return (
    <main className="flex-1 px-6 py-16">
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold">
          Nuestro catálogo 🧶
        </h1>

        <p className="mt-6 text-lg">
          Descubre nuestros tejidos hechos a mano y encuentra
          una pieza única para ti.
        </p>

        <div className="mt-12 rounded-2xl border p-10">
          <h2 className="text-2xl font-bold">
            Próximamente
          </h2>

          <p className="mt-4">
            Estamos preparando nuestro catálogo para que puedas
            conocer todos nuestros productos.
          </p>
          
        </div>
      </section>
    </main>
  );
}