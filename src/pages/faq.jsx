import { Typography, Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "@/widgets/layout";
import { useState } from "react";

const faqs = [
  {
    question: "Qu'est-ce que l'aérogommage ?",
    answer:
      "L’aérogommage est une technique de nettoyage douce et écologique utilisant un mélange d’air et d’abrasif naturel pour décaper sans abîmer les surfaces.",
  },
  {
    question: "Quels types de surfaces pouvez-vous traiter ?",
    answer:
      "Nous traitons le bois, le métal, la pierre, le béton, et d'autres surfaces délicates, intérieures comme extérieures.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer:
      "Oui, nous proposons des devis gratuits et personnalisés après évaluation de votre projet.",
  },
  {
    question: "L’aérogommage est-il respectueux de l’environnement ?",
    answer:
      "Absolument. Nous utilisons des abrasifs naturels et non toxiques, sans produits chimiques.",
  },
  {
    question: "Où intervenez-vous ?",
    answer:
      "Nous intervenons dans toute la région Occitanie, notamment autour de Toulouse, Montauban et Albi.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
            Questions Fréquentes
          </Typography>
          <Typography variant="lead" className="text-blue-gray-500 mb-12">
            Voici les réponses aux questions les plus posées sur nos services d’aérogommage.
          </Typography>

          <div className="text-left space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} open={openIndex === index}>
                <AccordionHeader onClick={() => handleOpen(index)}>
                  {faq.question}
                </AccordionHeader>
                <AccordionBody className="text-blue-gray-600">
                  {faq.answer}
                </AccordionBody>
              </Accordion>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Typography variant="h5" className="mb-4">
              Vous avez encore des questions ?
            </Typography>
            <Button as={Link} to="/contact" color="black" size="lg">
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FAQ;
