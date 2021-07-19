import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Banner() {
    const router = useRouter();

    return (  
        <div className="bg-white"  >
            <nav className="navbar navbar-expand-lg navbar-light mb-2 ">
                <div className="container-fluid justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center mb-2 fs-5" id="navbarNav">
                        <ul className="navbar-nav text-center fs-4">
                            <li className="nav-item me-4">
                                <Link href="/"><a className= {router.pathname == "/" ? `nav-link ${styles.active}` : "nav-link"}>Accueil</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/qui-suis-je"><a className= {router.pathname == "/qui-suis-je" ? `nav-link ${styles.active}` : "nav-link"}>Qui suis-je ?</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/mon-cv"><a className= {router.pathname == "/mon-cv" ? `nav-link ${styles.active}` : "nav-link"}>Mon CV</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/portfolio"><a className= {router.pathname == "/portfolio" ? `nav-link ${styles.active}` : "nav-link"}>Mes projets</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact"><a className= {router.pathname == "/contact" ? `nav-link ${styles.active}` : "nav-link"}>Contact</a></Link>
                            </li>                       
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
