import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import CardTech from '../Components/CardTech'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

export default function Home() {

  return (
    <div>
    <Head>
        <title>Anne D. Développeur Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <div className="row col-9 mx-auto justify-content-center text-center bg-white">
            <Banner />
            <div className="w-75 mx-auto pt-5 pb-5">
                <Image className={`${styles.image}`}
                    src="/images/laptop.png"
                    alt=""
                    width={500}
                    height={230} 
                    layout="responsive"
                    priority='true'
                />
            </div>
            <Flip left>
                <h1 className="text-center mt-5 fw-bold">Anne DENICOURT</h1>
            </Flip>
            <Flip right>
                <h2 className="text-center fs-3">Développeur Web</h2>
            </Flip>
            <Link href="#section1"><button className="animate-bounce button-scroll mt-5 text-center"><i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i></button></Link>
        </div>

        <div className="row col-9 mx-auto d-flex flex-column justify-content-center align-items-center text-center bg-white" id="section1">
            <h2 className="mt-20">Faisons connaissance...</h2>
            <div className="w-25 mx-auto pt-5 pb-5">
                <Image className={`${styles.image}`}
                    src="/images/girl2.png"
                    alt=""
                    width={500}
                    height={325} 
                    layout="responsive"
                    priority='true'
                />
            </div>
            <Flip left>
                <div className="p-4 col-8 mx-auto fs-5">
                    Développeuse web avec une appétence toute particulière pour le framework React.js, 
                    je me suis engagée dans cette voie professionnelle avant tout par passion. 
                    Quoi de plus grisant et de plus stimulant que de créer un site, de le faire fonctionner 
                    et de chercher des solutions lorsqu’un problème apparaît ? <br />
                    Une vraie révélation pour moi avec l’envie chaque jour d’en apprendre toujours davantage.<br />
                </div>
            </Flip>
            <div className=""><Link href="/qui-suis-je"><button className={`${styles.bouton} btn btn-lg btn-secondary mt-20`}>En savoir plus</button></Link></div>
            <div><Link href="#section2"><button className="animate-bounce button-scroll mt-5 text-center"><i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i></button></Link></div>
        </div>

        <div className="row col-9 mx-auto d-flex justify-content-center text-center bg-white" id="section2">
            <h2 className="">Côté TECHNOS</h2>
            <div className="w-25 mx-auto pt-5 pb-5">
                <Image className={`${styles.image}`}
                    src="/images/fauteuil.png"
                    alt=""
                    width={4000}
                    height={4000} 
                    layout="responsive"
                    priority='true'
                />
            </div>
        </div>
        <CardTech />
        
        <div className="row col-9 mx-auto justify-content-center text-center bg-white" id="section3">
            <h2 className="">Côté PROJETS</h2>
            <div className="w-25 mx-auto pt-5 pb-5">
                <Image className={`${styles.image}`}
                    src="/images/idea.png"
                    alt=""
                    width={500}
                    height={249} 
                    layout="responsive"
                    priority='true'
                />
            </div>
        </div>
        
        <div className="row col-9 mx-auto d-flex justify-content-center text-center bg-white">
            <div class="col col-lg-5 mb-5">
                <div class="card fs-5 shadow">
                    <div class="card-body">
                        <i class="bi bi-search fs-1"></i>
                        <h4 class="card-title mt-4 mb-5">PROJET 1</h4>                            
                        
                    </div>
                </div>
            </div>
            <div class="col col-lg-5 mb-5">
                <div class="card fs-5 shadow">
                    <div class="card-body">
                        <i className="bi bi-search fs-1"></i>
                        <h4 class="card-tittle mt-4 mb-5">PROJET 2</h4>
                        
                    </div>
                </div>
            </div>
            <div class="col col-lg-5 mb-5">
                <div class="card fs-5 shadow">
                    <div class="card-body">
                        <i className="bi bi-search fs-1"></i>
                        <h4 class="card-tittle mt-4 mb-5">PROJET 3</h4>
                        
                    </div>
                </div>
            </div>
            <div class="col col-lg-5">
                <div class="card fs-5 shadow">
                    <div class="card-body">
                        <i className="bi bi-search fs-1"></i>
                        <h4 class="card-tittle mt-4 mb-5">PROJET 4</h4>
                        
                    </div>
                </div>
            </div>
            <div className=""><Link href="/portfolio"><button className={`${styles.bouton} btn btn-lg btn-secondary mt-20`}>En savoir plus</button></Link></div>
            <div><Link href="#section3"><button className="animate-bounce button-scroll mt-5 text-center"><i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i></button></Link></div>
        </div>

        
  );
        
    </main>
    </div>
  )
}