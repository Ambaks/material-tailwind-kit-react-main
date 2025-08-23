import { useLocation, useNavigate } from "react-router-dom";

function ReturnButton() {
  const location = useLocation();
  const navigate = useNavigate();

  // Show button on all pages except home ("/")
  if (location.pathname === "/home" || location.pathname === "/services" || location.pathname === "/abrasifs") return null;

  return (
    <button 
      onClick={() => navigate(-1)} 
      className="absolute top-4 left-4 p-2 rounded-lg bg-white hover:bg-gray-300"
    >
      ⬅ Retour
    </button>
  );
}
export default ReturnButton;