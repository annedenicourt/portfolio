import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Banner from "../Components/Banner";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import CardPresta from "../Components/CardPresta";
import { optionsList } from "../datas/dataList";
import Footer from "../Components/Footer";
import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import ARTCILECONTENT from "../Components/Article";
import Partner from "../Components/partner";

export default function PRESTA() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anne D. Création sites internet & développeur Web</title>
        <meta
          name="description"
          content="Vous recherchez un professionnel pour la création de votre site
                internet dans le Tarn-et-Garonne, à Montauban ou en Occitanie ?
                 En tant que webmaster et développeur
                web expérimenté, je propose des services de création de sites
                internet sur mesure, adaptés à votre image et à vos besoins
                spécifiques."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <div className="mx-8 lg:w-11/12 lg:max-w-7xl lg:mx-auto text-gray-800 bg-white">
          <div className="mx-0 mb-5">
            <div className="flex justify-center">
              <div className={`${styles.menu}`}>
                <Banner />
              </div>
            </div>
          </div>
          <section className="" id="services">
            <div className="mx-auto mt-24 flex items-center justify-center text-center">
              <div className={`${styles.separator} w-44 h-0.5 ml-6`}></div>
              <h2 className="mx-4 text-xl md:text-2xl lg:text-4xl font-bold uppercase">
                Mes prestations
              </h2>
              <div className={`${styles.separator} w-44 h-0.5 mr-6`}></div>
            </div>
            <div className="w-3/4 mx-auto mt-6 my-20 text-base md:text-xl text-center">
              Pour la création de votre site internet, je propose une gamme de
              forfaits personnalisés, parfaitement ajustés à vos exigences et à
              votre budget. Si vous souhaitez créer un site vitrine, une
              plateforme e-commerce ou si vous recherchez des services de suivi
              et de maintenance, je suis là pour vous accompagner. Pour
              accroître votre autonomie, je propose aussi des formations pour
              apprendre les fondamentaux de Wordpress, vous permettant ainsi de
              créer vous-même votre propre site web.
            </div>
            <Fade triggerOnce={true} delay={1000}>
              <CardPresta />
            </Fade>
          </section>
          <section>
            <div className="w-10/12 mx-auto mt-24 flex items-center justify-center text-center">
              <ARTCILECONTENT />
            </div>
          </section>
          <section className="mb-24" id="tarifs">
            <div className="mx-auto my-24 flex items-center justify-center text-center">
              <div className={`${styles.separator} w-44 h-0.5 ml-6`}></div>
              <h2 className="mx-4 text-xl md:text-2xl lg:text-4xl font-bold uppercase">
                Tarifs
              </h2>
              <div className={`${styles.separator} w-44 h-0.5 mr-6`}></div>
            </div>

            <div
              className={`relative w-10/12 mx-auto font_bis overflow-x-auto shadow-md rounded-lg`}
            >
              <table className="w-full text-center text-gray-500">
                <thead
                  className={`text-xs md:text-sm lg:text-base uppercase ${styles.bg_card}`}
                >
                  <tr className="">
                    <th scope="col" className="w-1/5 px-6 py-3"></th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      one-page
                    </th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      standard
                    </th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      sur-mesure
                    </th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      e-commerce
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm lg:text-base">
                  {optionsList?.map((item, index) => {
                    return (
                      <tr
                        key={`option-${index}`}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {item.type}
                        </th>
                        <td className="px-6 py-4">{item.one}</td>
                        <td className="px-6 py-4">{item.standard}</td>
                        <td className="px-6 py-4">{item.custom}</td>
                        <td className="px-6 py-4">{item.shop}</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Statistiques
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaTimes color={"red"} size={25} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Évolutif
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <FaCheck color={"green"} size={30} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`text-xs md:text-sm lg:text-base uppercase ${styles.bg_card}`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      Tarifs
                    </th>
                    <td className="px-6 py-4 text-xs md:text-sm lg:text-xl font-bold text-yellow-500">
                      450 €*
                    </td>
                    <td className="px-6 py-4 text-xs md:text-sm lg:text-xl font-bold text-yellow-500">
                      650 €*
                    </td>
                    <td className="px-6 py-4 text-xs md:text-sm lg:text-xl font-bold text-yellow-500">
                      850 €*
                    </td>
                    <td className="px-6 py-4 text-xs md:text-sm lg:text-xl font-bold text-yellow-500">
                      <span className="text-xs mr-1 lowercase">
                        à partir de
                      </span>
                      <span className="text-xs md:text-sm lg:text-xl font-bold text-yellow-500">
                        1100 €*
                      </span>
                    </td>
                  </tr>
                  <tr className={`text-xs md:text-sm lg:text-base border-b`}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      Maintenance
                    </th>
                    <td className="px-6 py-4 font-bold">15 €/mois**</td>
                    <td className="px-6 py-4 font-bold">25 €/mois**</td>
                    <td className="px-6 py-4 font-bold">25 €/mois**</td>
                    <td className="px-6 py-4 font-bold">
                      <span className="text-xs mr-1 lowercase">
                        à partir de
                      </span>
                      <span>35 €/mois**</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              * Pour toute demande de fonctionnalités spécifiques ou d'ajout de
              pages, un supplément sera ajouté au prix affiché
            </div>
            <div className="mt-4 text-center">
              ** Le prix de la maintenance n'est pas inclus dans le prix de
              création du site
            </div>
          </section>
          <div className="mb-16 text-center">
            <Link href="/#contact">
              <button
                className={`${styles.bouton} mt-5 px-4 py-2 text-xl rounded-md`}
              >
                Me contacter
              </button>
            </Link>
          </div>
          <div className="flex md:hidden justify-center bg-white cursor-pointer">
            <Partner />
          </div>
          <Footer />
        </div>
        <div className="hidden md:flex fixed bottom-20 right-0 bg-white border cursor-pointer">
          <Partner />
        </div>
      </main>
    </div>
  );
}
