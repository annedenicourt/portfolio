import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Carousel() {

    return (  
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide carousel-fade col-10 p-0 shadow " data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="/images/reservia.png" className="d-block w-75 mx-auto" alt="..."/>
                        <div className="carousel-caption d-none d-md-block fs-5">
                            INTÉGRATION MAQUETTE EN HTML/CSS
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/ohmyfood.png" className="d-block w-75 mx-auto" alt="..."/>
                        <div className="carousel-caption d-none d-md-block fs-5">
                            INTÉGRATION MAQUETTE ET ANIMATIONS CSS
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/orinoco.png" className="d-block w-75 mx-auto" alt="..."/>
                        <div className="carousel-caption d-none d-md-block fs-5">
                            CRÉATION D'UN SITE E-COMMERCE AVEC JS
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/mystore.png" className="d-block w-75 mx-auto" alt="..."/>
                        <div className="carousel-caption d-none d-md-block fs-5">
                        CRÉATION D'UN SITE E-COMMERCE AVEC REACT/REDUX
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}
