import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { useFeaturesData, teamData, contactData } from "@/data";

export function Home() {
  const featuresData = useFeaturesData();
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Expert en Aérogommage - Qualité et Précision
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Conscient de l'importance du renouvelable et du respect de l'environnement, l'aérogommage s'inscrit dans une action durable
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description, onCardClick, onMouseEnter }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                onMouseEnter={onMouseEnter}
                onClick={onCardClick}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                L'aérogommage, c'est quoi?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              C’est un procédé de traitement de surface dérivé de la technique du sablage.
              Cela consiste en la projection d’un <a
                href="/abrasifs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                abrasif
              </a>
              {' '} à l’aide d’air comprimé à basse pression (entre 1,5 et 6 bars)
              en vue du décapage ou du nettoyage de surface.
              Cette technique est mieux adaptée que le sablage aux travaux de précision et à
              l’emploi dans des endroits difficilement accessibles. Grâce à l’emploi de basse
              pression et à un choix d’une large gamme d’abrasifs, elle est efficace sur tout
              support.
              L’utilisation d’abrasifs de très faible granulométrie permet le respect total de
              nombreux supports. Par exemple il est possible de décaper un vernis ou une
              peinture le long d’une vitrerie sans qu’il y ait le moindre impact sur le verre lorsque
              l’abrasif est adapté.

              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border pb-4 shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
              </Card>
            </div>

            <div className="mt-16 flex flex-wrap items-center">
              {/* Image on the left */}
              <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border pb-4 shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/gallery/gallery10.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
              </Card>
            </div>

              {/* Text on the right */}
              <div className="mx-auto mt-8 w-full px-4 md:order-2 md:w-6/12">
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  C’est une technique efficace pour nettoyer tous les types de surface (bois, pierre,
                  métal). Il s’agit d’une technique de nettoyage sec sans apport d’eau, qui permet une
                  remise en état d’un support qui a subi le temps ou qui a été recouvert par une
                  matière (peinture, vernis, enduit…). C’est aussi un bon moyen de préparer une
                  surface métallique avant peinture car ça donne une bonne accroche indispensable à
                  la peinture.
                </Typography>
                <Button variant="filled">Nous Contacter</Button>
              </div>
            </div>


          </div>
        </div>
      </section>
      
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Besoin d'un devis gratuit?">
            Complétez le formulaire ci-dessous et nous vous contacterons dans les 24 heures.
            Nous sommes impatients de travailler avec vous!
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-6/12">
            <div className="mb-8 flex gap-4">
              <Input variant="outlined" size="lg" label="Nom et prénom" />
              <Input variant="outlined" size="lg" label="Adresse e-mail" />
              <Input variant="outlined" size="lg" label="Téléphone" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  J'accepte
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;les conditions générales.
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
