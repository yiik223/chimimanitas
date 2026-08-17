export default function Contacto() {
  return (
    <main className="flex-1 px-6 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">
          Contacta con nosotros
        </h1>

        <p className="mt-6 text-lg">
          ¿Tienes alguna pregunta sobre nuestros tejidos?
          Estamos aquí para ayudarte.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
              Instagram(proximanente)
            </h2>

            <p className="mt-3">
              Síguenos y descubre nuestros nuevos diseños.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
              Correo
            </h2>
                    /* .."Crear luego correo de institucion". */ 
            <p className="mt-3">
              contacto@chimimanitas.cl
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}