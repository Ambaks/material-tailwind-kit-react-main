import {
  ChatBubbleBottomCenterTextIcon,
  Battery100Icon,
  UserPlusIcon
} from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

// Define a function that returns the features data, allowing `navigate` to be scoped properly
export const useFeaturesData = () => {
  const navigate = useNavigate();

  return [
    {
      color: "gray",
      title: "Remise à neuf",
      icon: Battery100Icon,
      description:
        "Redonnez une seconde vie à vos objets préférés (bois, métal, pierre...).",
    },
    {
      color: "gray",
      title: "Devis gratuit",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Nous vous proposons un devis gratuit et sans engagement.",
    },
    {
      color: "gray",
      title: "Autres services proposés",
      icon: UserPlusIcon,
      description:
        "Nos services ne se limitent pas seulement au décapage.",
      onCardClick: () => navigate('/services'),
      onMouseEnter: (e) => {
        e.currentTarget.style.cursor = 'pointer';
      }
    },
  ];
};

export default useFeaturesData;
