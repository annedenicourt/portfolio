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

    return (  
        <div className="row col-9 mx-auto d-flex justify-content-center text-center bg-white">
            <div className="col col-lg-5 mb-5">
                <div className={`${styles.bg_card} rounded fs-5 shadow`}>
                    <div className="p-4">
                        <i className="bi bi-laptop fs-1"></i>
                        <h4 className="mt-4 mb-5">FRONTEND</h4>                            
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>HTML/CSS</p>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>JAVASCRIPT</p>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>REACT/NEXT</p>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>BOOTSTRAP/TAILWIND</p>
                    </div>
                </div>
            </div>
            <div className="col col-lg-5">
                <div className={`${styles.bg_card} rounded fs-5 shadow`}>
                    <div className="p-4">
                        <i className="bi bi-server fs-1"></i>
                        <h4 className="mt-4 mb-5">BACKEND</h4>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>NODE</p>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>EXPRESS</p>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>API REST</p>
                        <p className=""><i className="bi bi-plus-circle-dotted me-3"></i>MYSQL/MONGODB</p>
                    </div>
                </div>
            </div>
            <div className="col col-lg-5">
                <div className={`${styles.bg_card} rounded fs-5 shadow`}>
                    <div className="p-4">
                    <AnimateSharedLayout>
                        <i className="bi bi-laptop fs-1"></i>
                        <h4 className="text-white mt-3 mb-3">FRONTEND</h4>
                        <motion.div layout initial={{ borderRadius: 25 }}>
                            <motion.div layout onClick={toggleOpen1} initial={{ borderRadius: 10 }}>
                                <motion.div className="mb-3" layout>{isOpen1 ? <i className="bi bi-x-circle "></i>: <i className="bi bi-search"></i>}</motion.div>
                                <AnimatePresence>{isOpen1 && <Content />}</AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </AnimateSharedLayout>
                    </div>
                </div>
            </div>
            <div className="col col-lg-5">
                <div className={`${styles.bg_card} rounded fs-5 shadow`}>
                    <div className="p-4">
                    <AnimateSharedLayout>
                        <i className="bi bi-server fs-1"></i>
                        <h4 className="text-white mt-3 mb-3">BACKEND</h4>
                        <motion.div layout initial={{ borderRadius: 25 }}>
                            <motion.div layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                                <motion.div className="mb-3" layout>{isOpen ? <i className="bi bi-x-circle "></i>: <i className="bi bi-search"></i>}</motion.div>
                                <AnimatePresence>{isOpen && <Content2 />}</AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </AnimateSharedLayout>
                    </div>
                </div>
            </div>
            <div className=""><Link href="/mon-cv"><button className={`${styles.bouton} btn btn-lg btn-secondary mt-14`}>En savoir plus</button></Link></div>
            <div><Link href="#section3"><button className="animate-bounce button-scroll mt-5 text-center"><i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i></button></Link></div>
        </div>
    )
}