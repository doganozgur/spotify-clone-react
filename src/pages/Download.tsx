import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../assets/spotify.png";
import DownloadModal from "../components/DownloadModal";
import useScreenWidth from "../hooks/useScreenWidth";
import { Icon } from "../utils/Icons";

export default function Download() {
  let [isOpen, setIsOpen] = useState(false);

  const screenWidth = useScreenWidth();

  let navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="max-w-2xl mx-auto text-center mb-4">
      {screenWidth < 768 && (
        <button className="block mb-6" onClick={() => navigate(-1)}>
          <Icon name="arrowLeft" size={24} />
        </button>
      )}

      <img className="w-full" src={Hero} alt="Spotify App View" />
      <h2 className="text-center sm:text-3xl text-xl font-semibold pb-6 leading-relaxed">
        Sevdiğin müzikleri aralıksız dinle. Bilgisayarına Spotify uygulamasını
        indir.
      </h2>
      <button className="button-primary" onClick={openModal}>
        Ücretsiz uygulamamızı edin
      </button>

      {isOpen && <DownloadModal handleClose={closeModal} open={isOpen} />}
    </section>
  );
}
