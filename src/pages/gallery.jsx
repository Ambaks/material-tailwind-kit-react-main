import { useState } from "react";
import { Typography, Button, Card } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

const images = [
  { src: "/img/gallery/gallery1.jpg", category: "bois" },
  { src: "/img/gallery/gallery2.jpg", category: "métal" },
  { src: "/img/gallery/gallery3.jpg", category: "pierre" },
  { src: "/img/gallery/gallery4.jpg", category: "bois" },
  { src: "/img/gallery/gallery5.jpg", category: "métal" },
  { src: "/img/gallery/gallery6.jpg", category: "pierre" },
  { src: "/img/gallery/gallery7.jpg", category: "bois" },
  { src: "/img/gallery/gallery8.jpg", category: "métal" },
  { src: "/img/gallery/gallery9.jpg", category: "pierre" },
  { src: "/img/gallery/gallery10.jpeg", category: "bois" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("tout");

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const filteredImages =
    selectedCategory === "tout"
      ? images
      : images.filter((img) => img.category === selectedCategory);

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

          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {["tout", "bois", "métal", "pierre"].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "filled" : "outlined"}
                color="blue-gray"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((img, index) => (
              <Card
                key={index}
                shadow={true}
                className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => handleImageClick(img.src)}
              >
                <img
                  src={img.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full"
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-500"
          >
            &times;
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Gallery;
