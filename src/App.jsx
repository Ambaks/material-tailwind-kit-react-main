import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Services from "./pages/services";
import Abrasifs from "./pages/abrasifs";
import ReturnButton from "./components/ReturnButton";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
          <ReturnButton /> {/* ⬅ show back button (auto-hides on /home and /services) */}
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/abrasifs" element={<Abrasifs />} />

      </Routes>
    </>
  );
}

export default App;
