import "./styles/globals.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import InfoModal from "./components/InfoModal.jsx";

export default function App() {
  const [infoOpen, setInfoOpen] = useState(false);
  return (
    <>
      <Header onInfoClick={() => setInfoOpen(true)} />

      {infoOpen && <InfoModal onClose={() => setInfoOpen(false)} />}
    </>
  );
}
