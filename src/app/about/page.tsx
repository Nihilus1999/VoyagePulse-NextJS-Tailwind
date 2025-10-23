export default function AboutPage() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-br from-white to-emerald-50 px-6 py-12">
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-emerald-700 mb-4">
          Sobre VoyagePulse 2025
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>VoyagePulse 2025</strong> es una iniciativa dedicada a medir y
          analizar la satisfacción de los turistas que visitan distintos
          destinos del país. Nuestro objetivo es ofrecer una visión integral
          sobre la experiencia turística, identificando oportunidades de mejora
          y promoviendo un desarrollo sostenible del sector.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          A través de encuestas digitales rápidas, accesibles y confidenciales,
          recopilamos opiniones, valoraciones y sugerencias que contribuyen al
          fortalecimiento de la calidad de los servicios turísticos y a la toma
          de decisiones informadas por parte de los organismos y empresas del
          sector.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-6">
          <li>
            <strong className="text-emerald-700">Misión:</strong> Fomentar la
            mejora continua del turismo mediante el análisis de la experiencia y
            satisfacción de los visitantes.
          </li>
          <li>
            <strong className="text-emerald-700">Visión:</strong> Convertirnos
            en una referencia nacional en estudios sobre satisfacción turística
            y desarrollo sostenible del turismo.
          </li>
          <li>
            <strong className="text-emerald-700">Valores:</strong>{" "}
            Transparencia, Innovación, Responsabilidad y Compromiso con la
            calidad.
          </li>
        </ul>
      </section>
    </main>
  );
}
