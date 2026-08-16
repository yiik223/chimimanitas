export default function DonationSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border p-8 text-center">
        <h2 className="text-3xl font-bold">
          ¿Te gusta nuestro trabajo? ❤️
        </h2>

        <p className="mt-4 text-lg">
          Puedes apoyarnos para que podamos seguir creando nuevos
          tejidos hechos a mano.
        </p>

        <button
          type="button"
          className="mt-8 rounded-lg bg-black px-6 py-3 text-white"
        >
          Apoyar a Chimimanitas
        </button>
      </div>
    </section>
  );
}