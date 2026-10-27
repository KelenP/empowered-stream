import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main
      className="main min-h-screen bg-black p-8 pt-32 md:p-12 md:pt-32"
      data-test="main-container"
    >
      <div className="max-w-7xl mx-auto">
        {/* Seção de Artistas Regra: Igar ao do curso */}
        <section className="main__section mb-12" data-test="artists-section">
          <div className="main__header-container flex items-end justify-between mb-8">
            <h2 className="main__title_1 text-3xl font-bold text-white tracking-tight">
              Top Artists
            </h2>

            <Link
              href="/artists"
              className="main__link text-sm font-bold text-gray-400 hover:text-white transition-colors"
              data-test="view-all-button"
            >
              Show All
            </Link>
          </div>

          {/* Grid de Cards - Responsividade igual ao print */}
          <div
            className="main__grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
            data-test="artists-grid"
          >
            {/* Exemplo de Card de Artista */}
            {/* O pulo do gato: classe 'group' no link pai */}
            <Link
              href="/artist/1"
              className="main__artist-card-link group"
              data-test="artist-item-1"
            >
              <div className="main__artist-card p-4 flex flex-col items-center">
                <div className="main__artist-image-container relative aspect-square w-full mb-4">
                  {/* Imagem Circular */}
                  <div className="w-full h-full bg-[#333333] rounded-full overflow-hidden flex items-center justify-center text-cyan-500 font-bold text-4xl shadow-2xl">
                    ES
                  </div>

                  {/* O ÍCONE DE PLAY - Ajustado para aparecer */}
                  <div
                    className="absolute bottom-2 right-2 flex items-center justify-center 
                   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                   transition-all duration-400 ease-out z-10"
                    data-test="play-icon"
                  >
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="text-cyan-500 text-5xl rounded-full"
                    />
                  </div>
                </div>

                <div className="w-full text-center">
                  <p
                    className="main__artist-name text-white font-bold truncate text-base"
                    data-test="artist-name"
                  >
                    Artist Name
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Artist</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
