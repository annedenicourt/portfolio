import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function Banner() {
    const router = useRouter();

    return (  
        <div className="bg-white"  >
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center fs-5" id="navbarNav">
                        <ul className="navbar-nav text-center fs-4">
                            <li className="nav-item me-4">
                                <Link href="/#accueil"><a className= {router.asPath == "/#accueil" ? `nav-link ${styles.active}` : "nav-link"}>Accueil</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/#presentation"><a className= {router.asPath == "/#presentation" ? `nav-link ${styles.active}` : "nav-link"}>Qui suis-je ?</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/#projets"><a className= {router.asPath == "/#projets" ? `nav-link ${styles.active}` : "nav-link"}>Mes projets</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/mon-cv"><a className= {router.asPath == "/mon-cv" ? `nav-link ${styles.active}` : "nav-link"}>Mon CV</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#contact"><a className= {router.asPath == "/#contact" ? `nav-link ${styles.active}` : "nav-link"}>Contact</a></Link>
                            </li>                       
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
