import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from "react";
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
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>BOOTSTRAP</p>
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
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>NODE</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>EXPRESS</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>API REST</p>
        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>MYSQL/MONGODB</p>
      </motion.div>
    );
}

export default function CardTech() {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen1 = () => setIsOpen1(!isOpen1);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (  <>
        <div className="row m-0 d-flex flex-column flex-md-row justify-content-center">
            <div className="col-10 col-md-5 mx-auto mb-5">
                <div className={`${styles.bg_card} rounded fs-5 p-4 shadow`}>
                    <AnimateSharedLayout>
                        <i className="bi bi-laptop fs-1"></i>
                        <h4 className="text-white mt-3 mb-3">Du FRONT...</h4>
                        <motion.div layout initial={{ borderRadius: 25 }}>
                            <motion.div layout onClick={toggleOpen1} initial={{ borderRadius: 10 }}>
                                <motion.div className="mb-3" layout>{isOpen1 ? <i className="bi bi-x-circle "></i>: <i className="bi bi-chevron-double-down fs-2"></i>}</motion.div>
                                <AnimatePresence>{isOpen1 && <Content />}</AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </AnimateSharedLayout>
                </div> 
            </div>
            <div className="col-10 col-md-5 mx-auto mb-5">
                <div className={`${styles.bg_card} rounded fs-5 p-4 shadow`}>
                    <AnimateSharedLayout>
                        <i className="bi bi-server fs-1"></i>
                        <h4 className="text-white mt-3 mb-3">...et aussi du BACK !</h4>
                        <motion.div layout initial={{ borderRadius: 25 }}>
                            <motion.div layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                                <motion.div className="mb-3" layout>{isOpen ? <i className="bi bi-x-circle "></i>: <i className="bi bi-chevron-double-down fs-2"></i>}</motion.div>
                                <AnimatePresence>{isOpen && <Content2 />}</AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </AnimateSharedLayout>
                </div> 
            </div>
            <div className="">
                <div className=""><Link href="/mon-cv/#technos"><button className={`${styles.bouton} btn btn-lg btn-secondary mt-14`}>En savoir plus</button></Link></div>
                <div><Link href="#section3"><button className="animate-bounce button-scroll mt-5 text-center"><i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i></button></Link></div>
            </div>
        </div>

        

        </>
    )
}