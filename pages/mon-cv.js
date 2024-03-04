import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Banner from "../Components/Banner";
import Modal from "react-modal";
import { useState } from "react";
import Footer from "../Components/Footer";
import { diplomes, jobs, pro } from "../datas/dataList";
import { FaSquare } from "react-icons/fa";
import { BsSearch, BsDownload } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import Partner from "../Components/partner";

export default function CV() {
  const [showInfo, setShowInfo] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "60%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const zoom = (type) => {
    if (type === "infography") {
      window.open("/images/Recruter Anne Denicourt.jpg", "_blank");
    } else {
      window.open("/images/CV.jpg", "_blank");
    }
  };

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
          <div className="">
            <div className="flex justify-center">
              <div className={`${styles.menu}`}>
                <Banner />
              </div>
            </div>
          </div>
          <section className="mx-0 mt-0 md:mt-16 flex flex-col justify-center">
            <h2 className="mt-5 pt-3 text-xl md:text-3xl text-center">
              FAISONS CONNAISSANCE
            </h2>
            <div className="">
              <div className="w-11/12 mx-auto mt-4 text-base md:text-lg lg:text-xl text-center">
                Formée par OpenClassRooms et également autodidacte, je fais
                preuve d’une grande capacité d’autonomie et de beaucoup de
                ténacité, qualités non négligeables dans le métier de
                développeur web. Je suis sensible à l’UX, mais aussi à l’UI et
                tout ce qui touche à l’aspect esthétique d’un site internet. Un
                site fonctionnel c’est parfait mais s’il est agréable à utiliser
                et à regarder, c’est encore mieux !
              </div>
            </div>
          </section>

          <section className="mx-0 md:mx-4 mt-6 flex flex-col lg:flex-row">
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-12 py-8 text-center">
              <Fade
                triggerOnce={true}
                delay={800}
                direction="left"
                cascade="true"
              >
                <div className="mx-auto shadow">
                  <Image
                    className="border rounded"
                    onClick={() => zoom("infography")}
                    src="/images/Recruter Anne Denicourt.jpg"
                    alt="recruter Anne Denicourt développeur web"
                    width={1240}
                    height={3248}
                    //layout="responsive"
                    priority="true"
                  />
                </div>
              </Fade>

              <Modal
                isOpen={showInfo}
                onRequestClose={() => setShowInfo(false)}
                style={customStyles}
              >
                <div className="flex justify-end">
                  <img
                    src="/images/Recruter Anne Denicourt.jpg"
                    alt=""
                    width="1000"
                  />
                </div>
              </Modal>
            </div>
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 lg:px-12 pt-5 text-start">
              <h3 className="mb-5 text-center md:text-left lg:text-center text-lg md:text-2xl font-bold underline">
                PARCOURS PROFESSIONNEL
              </h3>
              <div className="pb-3">
                {jobs.map((job) => {
                  return (
                    <div key={`job-${job.id}`} className="mb-4">
                      <div className="flex items-center text-lg md:text-xl font-bold uppercase">
                        <FaSquare className="mr-2 text-yellow-500" size={13} />
                        {job.job}
                      </div>
                      <div className="my-2">Entreprise : {job.society}</div>
                      {job.link && (
                        <a
                          className="my-2 text-blue-500"
                          href={`https://${job.link}`}
                          target="_blank"
                        >
                          {job.link}
                        </a>
                      )}
                      <div className="my-2">Période : {job.period}</div>
                    </div>
                  );
                })}
              </div>
              <div
                className={`${styles.bg_card} mb-5 p-3 text-lg font-bold text-center border rounded shadow`}
              >
                Comme dans tout ce que j’entreprends, je crée un site internet
                avec le cœur en faisant appel à ma part créative, mon sens du
                graphisme et mon goût pour le travail bien fait de façon à
                satisfaire les attentes du client et ceux de l’utilisateur. Et
                j’adore ça !
              </div>
            </div>
          </section>
          <section className=" mx-0 pb-5 ">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0 py-8 text-end">
                <h3 className="mb-5 text-lg md:text-2xl font-bold text-end underline">
                  DIPLÔMES
                </h3>
                <div>
                  {diplomes.map((diplome) => {
                    return (
                      <div key={`diplome-${diplome.id}`} className="mb-4">
                        <div className="flex items-start md:items-center justify-end text-base md:text-xl font-bold uppercase">
                          <FaSquare
                            className="hidden md:block mr-2 text-yellow-500"
                            size={13}
                          />
                          {diplome.name}
                          <FaSquare
                            className="block md:hidden mt-2 mx-2 text-yellow-500"
                            size={13}
                          />
                        </div>
                        {diplome.infos && (
                          <div className="italic">{diplome.infos}</div>
                        )}
                        <div className="ms-4">{diplome.period}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-12 py-8 text-center">
                <h3 className="mb-4 text-lg md:text-2xl font-bold text-center underline">
                  MON CV
                </h3>
                <Fade
                  triggerOnce={true}
                  delay={800}
                  direction="right"
                  cascade="true"
                >
                  <div className="w-50 mx-auto shadow mb-3">
                    <Image
                      className="rounded"
                      onClick={() => zoom("cv")}
                      src="/images/CV.jpg"
                      alt="CV Anne Denicourt développeur web"
                      width={1240}
                      height={1754}
                      //layout="responsive"
                      priority="true"
                    />
                  </div>
                </Fade>
                <div className="flex items-center justify-center">
                  <div
                    className="mt-3 mx-4 hidden lg:flex items-center justify-center cursor-pointer"
                    onClick={() => setShowCV(true)}
                  >
                    <BsSearch className="mr-2" size={25} />
                    Zoom
                  </div>
                  <a
                    href="/images/CV.jpg"
                    download
                    className="mt-3 mx-4 flex items-center justify-center cursor-pointer"
                    onClick={() => setShowInfo(true)}
                  >
                    <BsDownload className="mr-2" size={25} />
                    Télécharger
                  </a>
                </div>
                <Modal
                  isOpen={showCV}
                  onRequestClose={() => setShowCV(false)}
                  style={customStyles}
                >
                  <div className="flex justify-end">
                    <img
                      src="/images/CV.jpg"
                      alt="CV Anne Denicourt développeur web"
                    />
                  </div>
                </Modal>
              </div>
            </div>
            <div className="text-center">
              <Link href="/#contact">
                <button
                  className={`${styles.bouton} mt-5 px-4 py-2 text-xl rounded-md`}
                >
                  Me contacter
                </button>
              </Link>
            </div>
          </section>
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
