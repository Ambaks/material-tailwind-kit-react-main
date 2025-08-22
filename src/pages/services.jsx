import React, { useState } from 'react';

const characterLimit = 372;

const services = [
  {
    title: 'Le microbillage',
    description:
      "Le microbillage est une technique de nettoyage et de décapage de pièces mécaniques de tout matière, ou, pour réaliser une finition esthétique sur l’inox ou les métaux non-ferreux comme l’aluminium.",
    image: '/img/gallery/microbillage.jpg',
  },
  {
    title: 'Finition',
    description:
      "Nous proposons un service de finition de vos supports. Nous travaillons avec des fabricants réputés de vernis et lasures pour vous offrir des produits qui protègent et embellissent vos supports. Ces finitions sont idéales pour préserver la beauté naturelle de vos matériaux tout en les protégeant contre les éléments.",
    image: '/img/gallery/finitions.jpg',
  },
  {
    title: 'Le plomb',
    description: "Ces peintures ne peuvent pas être décapées par aérogommage. En effet, le plomb est un métal toxique qui présente de graves dangers pour la santé. Lorsqu’il est inhalé (sous forme de poussières ou de vapeur), il peut entraîner des maladies graves, comme le saturnisme, affecter le système nerveux et provoquer des troubles neurologiques. Pour protéger les opérateurs, l’environnement de travail et le public, il est essentiel de respecter des procédures adaptées. La méthode alternative à l’aérogommage que nous proposons est le trempage par bain.\n\nTrempage par bain : cette méthode consiste à plonger la pièce à décaper dans un bain spécifique qui liquéfie la peinture au plomb (minium, céruse, etc.). Une fois le temps nécessaire écoulé, la pièce est rincée. Cette opération, lorsqu’elle est bien menée, limite les risques car elle se déroule dans un cadre contrôlé, éloignant l’opérateur des émissions directes.\n\nPour en savoir plus sur le plomb, vous pouvez consulter le site de la Carsat ou de la Cramif, qui proposent des dossiers et des fiches pratiques pour la prévention des risques liés au plomb.\n\nLe traitement des surfaces au plomb n’est pas anodin. C’est un enjeu de santé publique et de protection de l’environnement. En optant pour des méthodes adaptées, vous préservez :\n- La santé des opérateurs\n- La qualité de l’environnement\n- La pérennité de votre chantier\n\nEnsemble, agissons pour un décapage plus sûr et plus responsable.",
    image: '/img/gallery/plomb.jpg',
  },
  {
    title: 'Dépolissage du verre',
    description:
      "Nous vous proposons le dépolissage du verre avec pochoirs afin de personnaliser vos miroirs ou tous types de verres.",
    image: '/img/gallery/depolissage.jpg',
  },
];

const Services = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleDescription = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Image with Overlay Text */}
      <div
        className="relative h-[100vh] w-full bg-cover bg-center shadow-lg flex items-center justify-center"
        style={{ backgroundImage: "url('/img/gallery/gallery8.jpg')" }}
      >
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          Nos Services Proposés
        </h1>
      </div>

      {/* Services Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {services.map((service, index) => {
          const isLong = service.description.length > characterLimit;
          const isExpanded = expandedIndexes.includes(index);
          const displayText = isExpanded || !isLong
            ? service.description
            : service.description.slice(0, characterLimit) + '...';

          return (
            <div
              key={service.title}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              {/* Text Section */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-primary mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg whitespace-pre-line">
                  {displayText}
                  {isLong && (
                    <span
                      onClick={() => toggleDescription(index)}
                      className="text-blue-600 ml-2 cursor-pointer hover:underline"
                    >
                      {isExpanded ? 'voir moins' : 'voir plus'}
                    </span>
                  )}
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
      <p className="text-center text-gray-500 pb-12">
        Questions ? Contactez-nous à{' '}
        <a
          href="mailto:support@example.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          support@example.com
        </a>
      </p>
    </div>
  );
};

export default Services;
