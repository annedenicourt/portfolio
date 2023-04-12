import styles from "../styles/Home.module.css";
import { useState, useRef } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function CardTech() {
  const [isOpen, setIsOpen] = useState([]);

  const contentFront = [
    "HTML/CSS",
    "JAVASCRIPT",
    "REACT/NEXT",
    "BOOTSTRAP/TAILWIND",
  ];
  const contentBack = ["NEST/NODE", "EXPRESS", "API REST", "MYSQL/MONGOBD"];
  const contentDesign = [
    "RÉDACTION SEO",
    "INDESIGN",
    "ILLUSTRATOR",
    "PHOTOSHOP",
  ];

  const handletoggle = (type) => {
    if (isOpen.includes(type)) {
      const arrayFiltered = isOpen.filter((item) => item !== type);
      setIsOpen(arrayFiltered);
    } else {
      setIsOpen([...isOpen, type]);
    }
  };

  return (
    <>
      <div className="row m-0 text-center d-flex flex-column flex-md-row justify-content-center">
        <div className="col-10 col-md-6 col-lg-4 mx-auto mb-5">
          <div className={`${styles.bg_card} rounded fs-5 p-4 shadow`}>
            <AnimateSharedLayout>
              <i className="bi bi-code-slash fs-1"></i>
              <h4 className="text-white mt-3 mb-3">Du FRONT...</h4>
              <motion.div layout initial={{ borderRadius: 25 }}>
                <motion.div
                  layout
                  onClick={() => handletoggle("front")}
                  initial={{ borderRadius: 10 }}
                >
                  <motion.div className={`${styles.button_card} mb-3`} layout>
                    {isOpen.includes("front") ? (
                      <i className="infos bi bi-x-circle "></i>
                    ) : (
                      <i className="infos bi bi-chevron-double-down fs-2"></i>
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {isOpen.includes("front") && (
                      <motion.div
                        className=""
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {contentFront.map((content) => {
                          return (
                            <p className="">
                              <i className="bi bi-plus-circle-dotted me-3"></i>
                              {content}
                            </p>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </AnimateSharedLayout>
          </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4 mx-auto mb-5">
          <div className={`${styles.bg_card} rounded fs-5 p-4 shadow`}>
            <AnimateSharedLayout>
              <i className="bi bi-server fs-1"></i>
              <h4 className="text-white mt-3 mb-3">...et aussi du BACK</h4>
              <motion.div layout initial={{ borderRadius: 25 }}>
                <motion.div
                  layout
                  onClick={() => handletoggle("back")}
                  initial={{ borderRadius: 10 }}
                >
                  <motion.div className={`${styles.button_card} mb-3`} layout>
                    {isOpen.includes("back") ? (
                      <i className="infos bi bi-x-circle "></i>
                    ) : (
                      <i className=" infos bi bi-chevron-double-down fs-2"></i>
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {isOpen.includes("back") && (
                      <motion.div
                        className=""
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {contentBack.map((content) => {
                          return (
                            <p className="">
                              <i className="bi bi-plus-circle-dotted me-3"></i>
                              {content}
                            </p>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </AnimateSharedLayout>
          </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4 mx-auto mb-5">
          <div className={`${styles.bg_card} rounded fs-5 p-4 shadow`}>
            <AnimateSharedLayout>
              <i className="bi bi-laptop fs-1"></i>
              <h4 className="text-white mt-3 mb-3">SEO/DESIGN</h4>
              <motion.div layout initial={{ borderRadius: 25 }}>
                <motion.div
                  layout
                  onClick={() => handletoggle("design")}
                  initial={{ borderRadius: 10 }}
                >
                  <motion.div className={`${styles.button_card} mb-3`} layout>
                    {isOpen.includes("design") ? (
                      <i className="infos bi bi-x-circle "></i>
                    ) : (
                      <i className="infos bi bi-chevron-double-down fs-2"></i>
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {isOpen.includes("design") && (
                      <motion.div
                        className=""
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {contentDesign.map((content) => {
                          return (
                            <p className="">
                              <i className="bi bi-plus-circle-dotted me-3"></i>
                              {content}
                            </p>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </>
  );
}
