import Link from "next/link";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaEye, FaTimes } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

export default function CardProject(props) {
  const [show, setShow] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <div
        className={`${styles.card_container} flex flex-col items-center justify-between border rounded-lg shadow-lg`}
      >
        <div className="my-4 text-xl md:text-lg lg:text-xl">{props.name}</div>
        <div className="relative h-72 w-full flex flex-col justify-center">
          <img src={props.image} alt={props.name} className="" />
          {props.imageMobile && (
            <img
              src={props.imageMobile}
              alt={props.name}
              className="absolute bottom-0 md:bottom-6 md:-bottom-10 right-5 w-20 md:w-16 lg:w-24"
            />
          )}
        </div>
        <div className="my-6 flex flex-row flex-wrap items-center justify-center text-lg">
          <button
            className={`${styles.bouton} mr-3 mb-2 px-2 flex justify-center items-center border rounded-full`}
            onClick={() => setShow(true)}
          >
            <FiPlus className={"mr-2"} />
            d'infos
          </button>
          {props.github !== "" && (
            <button
              className={`${styles.bouton} mr-3 mb-2  px-2 flex justify-center items-center border rounded-full`}
              href={props.github}
              target="_blank"
            >
              <IoCodeSlashOutline className={"mr-2"} />
              Code
            </button>
          )}
          <button
            className={`${styles.bouton} px-2 mb-2  flex justify-center items-center border rounded-full`}
            href={props.link}
            target="_blank"
          >
            <BsEye className={"mr-2"} />
            Voir
          </button>
        </div>
      </div>
      <div>
        <Modal
          isOpen={show}
          onRequestClose={() => setShow(false)}
          //style={customStyles}
          className={`${styles.modal_project}`}
        >
          <div className="flex justify-end">
            <button onClick={() => setShow(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="my-6 text-center text-lg md:text-3xl">
            {props.title}
          </div>
          <div>
            <div className="w-full flex justify-center">
              <img src={props.image} alt={props.name} className="" />
            </div>
            <div className="mt-3 text-xl md:text-2xl font-bold">Objectif :</div>
            <div className="my-3 text-base md:text-lg">{props.description}</div>
            <h4 className="mt-3 text-xl md:text-2xl font-bold">
              Technos utilisées :
            </h4>
            <div className="my-3 text-base md:text-lg">{props.techno}</div>
            {props.github !== "" && (
              <div>
                <h4 className="mt-3 text-xl md:text-2xl font-bold">
                  Contraintes techniques :
                </h4>
                <Link href={props.github}>
                  <a target="_blank" title="Voir le code">
                    <div className="my-3 text-base md:text-lg">
                      Voir le repository GITHUB
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className={`${styles.bouton} px-4 py-2 flex justify-center items-center text-xl border rounded-full`}
              onClick={() => setShow(false)}
            >
              Fermer
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}
