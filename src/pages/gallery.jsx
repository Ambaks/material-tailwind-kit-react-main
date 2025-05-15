import { Typography, Button, Card, CardHeader } from "@material-tailwind/react";
import { Footer, Navbar } from "@/widgets/layout";

const images = [
  "/img/gallery/gallery1.jpg",
  "/img/gallery/gallery2.jpg",
  "/img/gallery/gallery3.jpg",
  "/img/gallery/gallery4.jpg",
  "/img/gallery/gallery5.jpg",
  "/img/gallery/gallery6.jpg",
  "/img/gallery/gallery7.jpg",
  "/img/gallery/gallery8.jpg",
  "/img/gallery/gallery9.jpg",
  "/img/gallery/gallery10.jpeg",
];

export function Gallery() {
  return (
    <>
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
            Galerie Photos
          </Typography>
          <Typography variant="lead" className="text-blue-gray-500 mb-8">
            Découvrez nos projets d'aérogommage – qualité, précision et savoir-faire.
          </Typography>

          {/* Optional filter buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <Button variant="outlined" color="blue-gray">Tout</Button>
            <Button variant="outlined" color="blue-gray">Bois</Button>
            <Button variant="outlined" color="blue-gray">Métal</Button>
            <Button variant="outlined" color="blue-gray">Pierre</Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <Card key={index} shadow={true} className="rounded-lg overflow-hidden pb-2">
                <CardHeader floated={false} className="h-56">
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;
