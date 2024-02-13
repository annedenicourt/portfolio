import styles from "../styles/Home.module.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { prestations } from "../datas/dataList";
import { FaWordpressSimple } from "react-icons/fa6";
import Link from "next/link";

export default function CardTech() {
  const [isOpen, setIsOpen] = useState([0, 1, 2]);

  const handletoggle = (index) => {
    if (isOpen.includes(index)) {
      const arrayFiltered = isOpen.filter((item) => item !== index);
      setIsOpen(arrayFiltered);
    } else {
      setIsOpen([...isOpen, index]);
    }
  };

  return (
    <>
      <div className="m-0 flex flex-col lg:flex-row justify-center text-center ">
        {prestations.map((prestation, index) => {
          return (
            <div
              key={`prestation-${index}`}
              className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto mb-5 lg:px-5 font_bis"
            >
              <div
                id="box"
                className={`${styles.bg_card} rounded py-8 shadow-lg`}
              >
                <div>
                  <div className="flex justify-center">
                    {index === 0 ? (
                      <IoCodeSlashOutline size={40} />
                    ) : index === 1 ? (
                      <BsGear size={40} />
                    ) : (
                      <FaWordpressSimple size={40} />
                    )}
                  </div>
                  <div className="mx-2 md:mx-10 mt-3 mb-3 text-white uppercase text-base md:text-xl">
                    <div className="my-5">
                      <div>{prestation?.title}</div>
                      <div>{prestation?.titleBis}</div>
                    </div>
                  </div>
                  <div>
                    <motion.div
                      layout
                      onClick={() => handletoggle(index)}
                      initial={{ borderRadius: 10 }}
                    >
                      <div
                        className={`${styles.button_card} mb-3 flex justify-center`}
                      >
                        {isOpen.includes(index) ? (
                          <FiChevronsUp size={40} />
                        ) : (
                          <FiChevronsDown size={40} />
                        )}
                      </div>
                      <div>
                        {isOpen.includes(index) && (
                          <div className="text-base md:text-lg leading-10">
                            {prestation?.content.map((content, indexWeb) => {
                              return (
                                <p
                                  key={`contentFront-${indexWeb}`}
                                  className=""
                                >
                                  {content}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="text-center">
          <Link href="/prestations">
            <button className={`${styles.bouton} mt-5 p-2 text-xl rounded-md `}>
              Voir les tarifs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
