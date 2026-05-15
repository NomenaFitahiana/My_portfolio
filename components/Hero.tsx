// components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      <h1 className="text-5xl font-bold mb-4">RANDRIANIRINA Nomena Fitahiana Fandresena</h1>
      <p className="text-xl text-gray-400 mb-2">
        Développeuse Full Stack · Java · React
      </p>
      <p className="text-lg text-gray-500 mb-8 max-w-xl text-center">
        Stagiaire à la Banque Centrale de Madagascar.
        Je construis des applications financières fiables de bout en bout.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projets"
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-semibold"
        >
          Voir mes projets
        </a>

        <a
          href="https://github.com/NomenaFitahiana"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}