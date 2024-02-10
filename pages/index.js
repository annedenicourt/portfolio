import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../Components/Banner";
import CardTech from "../Components/CardTech";
import Form from "../Components/Form";
import { projects } from "../datas/dataList";
import CardProject from "../Components/CardProject";
import Typewriter from "typewriter-effect";
import Steps from "../Components/Steps";
import Footer from "../Components/Footer";
import { FaArrowCircleDown } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const bounceTransition = {
    y: {
      duration: 0.7,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <div>
      <Head>
        <title>Anne D. Développeur Web</title>
        <meta
          name="description"
          content="Portfolio Anne Denicourt développeur web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-8 lg:w-11/12 lg:max-w-7xl lg:mx-auto text-gray-800 bg-white">
          <div className="mx-0 mb-5">
            <div className="flex justify-center">
              <div className={`${styles.menu}`}>
                <Banner />
              </div>
            </div>
          </div>
          {/* Section ACCUEIL */}
          <section className="m-0 md:mt-24" id="accueil">
            <div className="mx-auto pt-5 text-center">
              <div className="w-full md:w-3/4 py-8 my-8 mx-auto">
                <Fade triggerOnce={true} delay={800} down>
                  <Image
                    className={`${styles.image}`}
                    src="/images/laptop.png"
                    alt="illustration ordinateur"
                    width={500}
                    height={230}
                    layout="responsive"
                    priority="true"
                  />
                </Fade>
              </div>
              <div>
                <h2 className="my-5 font-bold text-xl md:text-2xl lg:text-4xl">
                  Anne DENICOURT
                </h2>
              </div>
              <div>
                <h1
                  className={`font_bis ${styles.subtitle} font-light text-xl md:text-2xl lg:text-3xl`}
                >
                  Créatrice de site internet & Développeur Web
                </h1>
              </div>
              <div className="w-3/4 mx-auto mt-6 text-base md:text-xl font-bold">
                Vous recherchez un professionnel pour la création de votre site
                internet dans le Tarn-et-Garonne, à Montauban ou en Occitanie ?
                Vous êtes au bon endroit ! En tant que webmaster et développeur
                web expérimenté, je propose des services de création de sites
                internet sur mesure, adaptés à votre image et à vos besoins
                spécifiques.
              </div>
              <Link href="#services">
                <div className="mt-28 mb-72 flex justify-center animate-bounce">
                  <FaArrowCircleDown size={35} />
                </div>
              </Link>
            </div>
          </section>

          {/* Section PRESTATIONS */}
          <section className="" id="services">
            <div className="mx-auto mt-24 flex items-center justify-center text-center">
              <div className={`${styles.separator} w-44 h-0.5 ml-6`}></div>
              <h2 className="mx-4 text-xl md:text-2xl lg:text-4xl font-bold uppercase">
                Mes prestations
              </h2>
              <div className={`${styles.separator} w-44 h-0.5 mr-6`}></div>
            </div>
            <div className="w-3/4 mx-auto mt-6 my-20 text-base md:text-xl text-center">
              Que vous soyez une entreprise, un entrepreneur ou un particulier,
              je peux vous aider à concrétiser votre projet en ligne. De la
              conception initiale à la mise en ligne, je prends en charge toutes
              les étapes de la création de votre site internet, en veillant à ce
              qu'il soit à la fois esthétique, fonctionnel et optimisé pour les
              moteurs de recherche. En plus de la création de sites internet, je
              propose également des services de maintenance pour assurer le bon
              fonctionnement continu de votre site. Que ce soit pour des mises à
              jour régulières, des correctifs de sécurité ou des modifications
              de contenu, je suis là pour vous accompagner et vous garantir une
              présence en ligne sans faille.
            </div>
            <Fade triggerOnce={true} delay={1000}>
              <CardTech />
            </Fade>
          </section>

          {/* Section ETAPES */}
          <section className="" id="steps">
            <div className="mx-auto mt-24 text-center">
              <div className="mx-auto my-24 flex items-center justify-center text-center">
                <div className={`${styles.separator} w-44 h-0.5 ml-6`}></div>
                <h2 className="mx-4 text-xl md:text-2xl lg:text-4xl font-bold uppercase">
                  Étapes
                </h2>
                <div className={`${styles.separator} w-44 h-0.5 mr-6`}></div>
              </div>
              <div className="w-3/4 mx-auto mt-6 my-20 text-base md:text-xl">
                Votre projet de site web passera par plusieurs étapes, de la
                présentation du projet initial à la mise en ligne finale. Pour
                chacune d'entre elles, je vous propose un travail sur mesure,
                pour créer un site qui vous ressemble vraiment. Ensemble, nous
                façonnons votre présence en ligne, prête à séduire votre public.
              </div>
              <Steps />
            </div>
          </section>

          {/* Section REALISATIONS */}
          <section id="projets">
            <div className="mx-auto mt-24">
              <div className="mx-auto mb-5 flex items-center justify-center text-center">
                <div className={`${styles.separator} w-44 h-0.5 ml-6`}></div>
                <h2 className="mx-4 text-xl md:text-2xl lg:text-4xl font-bold uppercase">
                  Mes dernières réalisations
                </h2>
                <div className={`${styles.separator} w-44 h-0.5 mr-6`}></div>
              </div>
              <div className="w-44 mx-auto my-4 pt-5 pb-5">
                <Image
                  className={`${styles.image}`}
                  src="/images/idea.png"
                  alt="illustration ampoule"
                  width={500}
                  height={249}
                  layout="responsive"
                  priority="true"
                />
              </div>
              <div className="w-11/12 md:w-4/5 mx-auto flex flex-wrap">
                {projects
                  .filter((project) => project.category === "pro")
                  .map((project) => (
                    <div
                      className="w-full md:w-1/2 mb-5 text-center"
                      key={project.id}
                    >
                      <div className="px-0 md:px-4">
                        <Fade
                          triggerOnce={true}
                          delay={800}
                          direction="left"
                          cascade="true"
                        >
                          <CardProject
                            id={project.id}
                            name={project.name}
                            title={project.title}
                            description={project.description}
                            techno={project.techno}
                            image={project.image}
                            imageMobile={project.imageMobile}
                            link={project.link}
                            github={project.github}
                          />
                        </Fade>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Section QUI SUIS-JE */}
          <section className="text-center" id="presentation">
            <div className="mx-auto mt-24 text-center">
              <div className="mx-auto mb-5 flex items-center justify-center text-center">
                <div className={`${styles.separator} w-44 h-0.5 ml-6`}></div>
                <h2 className="mx-4 text-xl md:text-2xl lg:text-4xl font-bold uppercase">
                  Faisons connaissance
                </h2>
                <div className={`${styles.separator} w-44 h-0.5 mr-6`}></div>
              </div>
              <div className="w-1/2 md:w-1/3 mx-auto pt-5 pb-5">
                <Image
                  className={`${styles.image}`}
                  src="/images/girl2.png"
                  alt="illustration jeune fille"
                  width={500}
                  height={325}
                  layout="responsive"
                  priority="true"
                />
              </div>
              <Fade
                triggerOnce={true}
                delay={800}
                direction="right"
                cascade="true"
              >
                <div className="w-3/4 md:w-4/5 lg:w-3/4 mx-auto my-6 text-base md:text-lg">
                  Webmaster et développeuse web au parcours atypique, je me suis
                  engagée dans cette voie professionnelle avant tout par
                  passion. Quoi de plus grisant et de plus stimulant que de
                  participer à la création d'un site internet ou d'une
                  application web, de le faire fonctionner et de chercher des
                  solutions lorsqu’un problème apparaît ? <br />
                  Une vraie révélation pour moi avec l’envie chaque jour d’en
                  apprendre toujours davantage...
                </div>
              </Fade>

              <div className="">
                <Link href="/mon-cv">
                  <button
                    className={`${styles.bouton} mt-5 p-2 text-xl rounded-md `}
                  >
                    Découvrir mon parcours
                  </button>
                </Link>
              </div>
            </div>
            <Link href="#contact">
              <div className="mt-28 mb-64 flex justify-center animate-bounce">
                <FaArrowCircleDown size={35} />
              </div>
            </Link>
          </section>

          {/* Section CONTACT */}
          <div className="m-0 flex flex-col" id="contact">
            <div className="mt-5 font-bold text-4xl text-center">
              <div className="mx-auto mb-5 flex items-center justify-center text-center">
                <div
                  className={`${styles.separator} w-20 md:w-44 h-0.5 ml-6`}
                ></div>
                <div className="w-96 text-xl md:text-2xl lg:text-4xl">
                  <Typewriter
                    options={{
                      strings: ["PARLONS-NOUS", "ET COLLABORONS !"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <div
                  className={`${styles.separator} w-20 md:w-44 h-0.5 mr-6`}
                ></div>
              </div>
              <div className="w-3/4 md:w-4/5 lg:w-3/5 mx-auto my-6 text-base md:text-lg">
                Basée à Montauban, je suis disponible pour des projets dans tout
                le département du Tarn-et-Garonne ainsi que dans la région
                Occitanie. Contactez-moi dès aujourd'hui pour discuter de votre
                projet de création de site internet, de maintenance ou de
                formation WordPress, et commençons à travailler ensemble pour
                faire de votre projet une réalité en ligne !
              </div>
            </div>
            <div className="w-full p-2 mt-5 mb-5">
              <div className="w-1/2 md:w-1/5 mx-auto mb-4">
                <Image
                  className={`${styles.image}`}
                  src="/images/phone.png"
                  alt="illustration téléphone"
                  width={500}
                  height={213}
                  layout="responsive"
                  priority="true"
                />
              </div>
              <div className="mb-5 text-center text-2xl font-bold">
                06 29 71 78 72
              </div>
              <Form />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
