import styles from '../styles/Home.module.css'
import { useState, useRef } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function Content() {
    return (
      <motion.div
        className=""
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>HTML/CSS</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>JAVASCRIPT</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>REACT/NEXT</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>BOOTSTRAP/TAILWIND</p>
      </motion.div>
    );
}

function Content1() {
    return (
      <motion.div
        className=""
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>NODE</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>EXPRESS</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>API REST</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>MYSQL/MONGODB</p>
      </motion.div>
    );
}

function Content2() {
    return (
      <motion.div
        className=""
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>RÉDACTION SEO</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>INDESIGN</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>ILLUSTRATOR</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>PHOTOSHOP</p>
      </motion.div>
    );
}

export default function CardTech() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const toggleOpen1 = () => setIsOpen1(!isOpen1);
    const toggleOpen2 = () => setIsOpen2(!isOpen2);

    return (  <>
        <div className="row m-0 text-center d-flex flex-column flex-md-row justify-content-center">
            <div className="col-10 col-md-6 col-lg-4 mx-auto mb-5">
                <div className={`${styles.bg_card} rounded fs-5 p-4 shadow`}>
                    <AnimateSharedLayout>
                        <i className="bi bi-code-slash fs-1"></i>
                        <h4 className="text-white mt-3 mb-3">Du FRONT...</h4>
                        <motion.div layout initial={{ borderRadius: 25 }}>
                            <motion.div layout onClick={toggleOpen1} initial={{ borderRadius: 10 }}>
                                <motion.div className={`${styles.button_card} mb-3`} layout>{isOpen1 ? <i className="infos bi bi-x-circle "></i>: <i className="infos bi bi-chevron-double-down fs-2"></i>}</motion.div>
                                <AnimatePresence>{isOpen1 && <Content />}</AnimatePresence>
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
                            <motion.div layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                                <motion.div className={`${styles.button_card} mb-3`} layout>{isOpen ? <i className="infos bi bi-x-circle "></i>: <i className=" infos bi bi-chevron-double-down fs-2"></i>}</motion.div>
                                <AnimatePresence>{isOpen && <Content1 />}</AnimatePresence>
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
                            <motion.div layout onClick={toggleOpen2} initial={{ borderRadius: 10 }}>
                                <motion.div className={`${styles.button_card} mb-3`} layout>{isOpen2 ? <i className="infos bi bi-x-circle "></i>: <i className="infos bi bi-chevron-double-down fs-2"></i>}</motion.div>
                                <AnimatePresence>{isOpen2 && <Content2 />}</AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </AnimateSharedLayout>
                </div> 
            </div>
        </div>  
    </>
    )
}