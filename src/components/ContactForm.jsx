import { useState } from "react";
import emailjs from "emailjs-com"; // ✅ add EmailJS
import { Input, Textarea, Checkbox, Typography, Button } from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.accepted) {
      alert("⚠️ Vous devez accepter les conditions générales.");
      return;
    }

    emailjs
      .send(
        "service_32rwy47",     // Replace with EmailJS service ID
        "template_m35sgir",    // Replace with EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "GyqvaI81Jv2UAJrDG"      // Replace with EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            accepted: false,
          });
        },
        (error) => {
          console.error(error);
          alert("❌ Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="container mx-auto">
      <PageTitle heading="Besoin d'un devis gratuit?">
        Complétez le formulaire ci-dessous et nous vous contacterons dans les 24 heures.
        Nous sommes impatients de travailler avec vous!
      </PageTitle>

      <form className="mx-auto w-full mt-12 lg:w-6/12" onSubmit={handleSubmit}>
        <div className="mb-8 flex flex-col gap-6 md:flex-row">
          <Input
            variant="outlined"
            size="lg"
            label="Nom et prénom"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            variant="outlined"
            size="lg"
            label="Adresse e-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            variant="outlined"
            size="lg"
            label="Téléphone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <Textarea
          variant="outlined"
          size="lg"
          label="Message"
          rows={8}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Checkbox
          name="accepted"
          checked={formData.accepted}
          onChange={handleChange}
          required
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

        <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth>
          Send Message
        </Button>
      </form>
    </div>
  );
}
