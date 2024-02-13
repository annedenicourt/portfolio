import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function ARTCILECONTENT() {
  return (
    <div className="text-justify lg:text-left">
      <div className="mx-auto mt-24 mb-16 flex items-center justify-center text-center">
        <div
          className={`${styles.separator} w-16 md:w-44 h-0.5 ml-1 md:ml-6`}
        ></div>
        <h2 className="mx-1 md:mx-4 text-lg md:text-2xl lg:text-4xl font-bold uppercase">
          Combien coûte un site internet ?
        </h2>
        <div
          className={`${styles.separator} w-16 md:w-44 h-0.5 mr-1 md:mr-6`}
        ></div>
      </div>
      <div className="font_bis">
        <div className="text-base md:text-lg font_bis font-semibold">
          Vous avez un projet ou une entreprise et vous souhaitez le rendre
          visible sur internet ? Créer votre site est donc la première chose à
          faire. Mais pas toujours facile de savoir combien cela coûte et de le
          faire entrer dans votre budget. Avant toute chose, sachez que le coût
          d'un site internet peut varier considérablement en fonction de
          plusieurs facteurs, notamment la complexité du projet, les
          fonctionnalités requises, le niveau de personnalisation et le
          prestataire de services choisi. Voici un aperçu des éléments à prendre
          en compte pour estimer le coût de votre site internet.
        </div>
        <div className="mt-6 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-7/12">
            <div className="mb-2 text-xl text-center md:text-left font-bold uppercase">
              Hébergement et nom de domaine
            </div>
            <div className="text-lg font_bis">
              Ces frais sont récurrents et dépendent du type d'hébergement
              choisi ainsi que du nom de domaine que vous souhaitez utiliser.
              Comptez environ 50 euros par an pour l'hébergement de votre site
              vitrine (hébergement chez OVH) et entre 9 et 15 euros par an pour
              la réservation du nom de domaine.
            </div>
            <div className="mt-6 mb-2 text-xl text-center md:text-left font-bold uppercase">
              Type de site
            </div>
            <div className=" text-lg font_bis">
              Le coût variera en fonction du type de site que vous souhaitez
              créer. Un site vitrine simple coûtera généralement moins cher
              qu'un site e-commerce complexe avec des fonctionnalités avancées
              et un système de paiement en ligne.
            </div>
          </div>
          <div className="w-full lg:w-5/12 mb-5 lg:mb-0 ml-0 lg:ml-4 flex justify-center items-center">
            <img
              src="/images/mockup-OVH.png"
              alt=""
              className="md:w-1/2 lg:w-full"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-5/12 mb-5 lg:mb-0 mr-0 lg:mr-4 pr-0 lg:pr-4 flex justify-center items-center">
            <img
              src="/images/maquette-site-internet.jpg"
              alt=""
              className="md:w-1/2 lg:w-full"
            />
          </div>
          <div className="w-full lg:w-7/12">
            <div className="mb-2 text-xl text-center md:text-left font-bold uppercase">
              Conception et développement
            </div>
            <div className="text-lg font_bis">
              La conception et le développement du site impliquent la création
              de maquettes, de graphiques, d'intégration et de fonctionnalités.
              Plus le site est complexe et plus le temps nécessaire à la
              création de votre site internet ainsi que son coût seront élevés.
            </div>
            <div className="mt-6 mb-2 text-xl text-center md:text-left font-bold uppercase">
              Personnalisation
            </div>
            <div className="text-lg font_bis">
              Si vous avez besoin d'une design personnalisé ou de
              fonctionnalités spécifiques qui ne sont pas disponibles dans des
              modèles prédéfinis (ce qu'on appelle "template" la plupart du
              temps), cela peut augmenter les coûts.
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-7/12">
            <div className="mb-2 text-xl text-center md:text-left font-bold uppercase">
              Maintenance et mises à jour
            </div>
            <div className="text-lg font_bis">
              Une fois le site lancé, il nécessitera une maintenance régulière,
              des mises à jour de sécurité et éventuellement des mises à jour de
              contenu. Je vous propose des contrats de maintenance pour ces
              services.
            </div>
            <div className="mt-6 mb-2 text-xl text-center md:text-left font-bold uppercase">
              Services supplémentaires
            </div>
            <div className="text-lg font_bis">
              Des services tels que l'optimisation pour les moteurs de recherche
              (SEO), la création de contenu, l'intégration de systèmes de
              paiement en ligne, etc., peuvent également influencer le coût
              total.
            </div>
          </div>
          <div className="w-full lg:w-5/12 ml-0 lg:ml-4 mb-5 lg:mb-0 pl-0 lg:pl-4 flex justify-center items-center">
            <img
              src="/images/webmaster-maintenance.jpg"
              alt=""
              className="md:w-1/2 lg:w-full"
            />
          </div>
        </div>

        <div className="my-12 text-lg font_bis">
          Assurez-vous de prendre en compte le retour sur investissement
          potentiel, car un site internet bien conçu peut contribuer à la
          croissance de votre entreprise en attirant de nouveaux clients et en
          améliorant votre présence en ligne.
        </div>
      </div>
    </div>
  );
}
