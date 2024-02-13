import styles from "../styles/Home.module.css";
import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BsGear, BsLaptop } from "react-icons/bs";
import { prestationsDetails } from "../datas/dataList";
import { FaWordpressSimple } from "react-icons/fa6";
import Link from "next/link";

export default function CardPresta() {
  return (
    <>
      <div className="w-full md:w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row flex-wrap justify-center text-center ">
        {prestationsDetails.map((prestation, index) => {
          return (
            <div
              key={`prestation-${index}`}
              className="w-full md:w-1/2 lg:w-1/3 mb-5 font_bis"
            >
              <div
                className={`${styles.bg_card} ${styles.card_presta} mx-auto py-8 px-4 rounded-md shadow-lg`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center text-yellow-500">
                      {prestation.type === "website" ||
                      prestation.type === "commerce" ? (
                        <BsLaptop size={40} />
                      ) : prestation.type === "webmastering" ? (
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
                    <div className={`w-4/5 mx-auto mb-5 h-px bg-white`}></div>
                  </div>
                  <div>
                    <div className="text-base">
                      <p className="">{prestation.content}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    {(prestation.type === "commerce" ||
                      prestation.type === "webmastering") && (
                      <span className="mr-1">à partir de</span>
                    )}
                    <span className="font-bold text-xl underline underline-offset-4">
                      {prestation.price}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <Link href="/prestations#tarifs">
                      <button
                        className={`mt-5 px-4 py-2 flex items-center text-sm font-bold text-yellow-500 rounded-md`}
                      >
                        <FiSearch className="mr-2" />
                        DÉTAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
