import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import CardTech from '../Components/CardTech'
import Form from '../Components/Form'
import Flip from 'react-reveal/Flip';
import { motion } from "framer-motion";
import { projects } from '../datas/dataList'
import CardProject from '../Components/CardProject'
import CardPottery from '../Components/CardPottery'
import CardWood from '../Components/CardWood'
import CardDeco from '../Components/CardDeco'
import CardBakery from '../Components/CardBakery'
import Typewriter from 'typewriter-effect';



export default function Home() {

    const bounceTransition = {
        y: {
          duration: 0.7,
          yoyo: Infinity,
          ease: "easeOut",
        },
      }

  return (
    <div>
    <Head>
        <title>Anne D. Développeur Web</title>
        <meta name="description" content="Portfolio Anne Denicourt développeur web" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
    <div className="container bg-white">
        <div className="row mx-0 mb-5">
            <div className="col d-flex justify-content-center">
                <div className={`${styles.menu}`}><Banner /></div>
            </div>
        </div>
        {/* Section ACCUEIL */}
        <div className="row m-0 d-flex align-items-center" id="accueil">
            <div className="col-9 mx-auto pt-5 text-center">
                <div className="w-100 pt-5 mt-5 mx-auto">
                    <Image className={`${styles.image}`}
                        src="/images/laptop.png"
                        alt="illustration ordinateur"
                        width={500}
                        height={230} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
                <Flip left>
                <h1 className="mt-5 fw-bold">Anne DENICOURT</h1>
                </Flip>
                <Flip right>
                    <h3 className="">Développeur Web</h3>
                </Flip>
                <Link href="#presentation">
                    <motion.button
                        className="button-scroll"
                        transition={bounceTransition}
                        animate={{
                        y: ["100%","80%"],
                        }}
                    >
                    <i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i>
                    </motion.button>
                </Link>
            </div>
        </div>
        {/* Section QUI SUIS-JE */}
        <div className="row mt-5 mx-2 mx-lg-5" id="presentation">
            <div className="col col-md-10 mx-auto mt-5 text-center">
                <h2 className="mt-5 fs-1 fw-bold">FAISONS CONNAISSANCE...</h2>
                <div className="w-50 mx-auto pt-5 pb-5">
                    <Image className={`${styles.image}`}
                        src="/images/girl2.png"
                        alt="illustration jeune fille"
                        width={500}
                        height={325} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
                <div className="fs-5">
                Développeuse web au parcours atypique, je me suis engagée dans cette voie professionnelle avant tout par passion. 
                Quoi de plus grisant et de plus stimulant que de créer un site, de le faire fonctionner 
                et de chercher des solutions lorsqu’un problème apparaît ? <br />
                Une vraie révélation pour moi avec l’envie chaque jour d’en apprendre toujours davantage...
                </div>
                <div className=""><Link href="/mon-cv"><button className={`${styles.bouton} btn btn-lg btn-secondary mt-5`}>Découvrir mon parcours</button></Link></div>           

            </div>
            <div className="col col-md-10 mx-auto text-center">
                <h2 className="mt-5">Côté TECHNOS/COMPÉTENCES</h2>
                <div className="w-25 mx-auto pt-3 pb-5">
                    <i className={`${styles.image} bi bi-gear fs-1`}></i>
                </div>
            </div>
            <CardTech />
            <div className="col mx-auto text-center">
                <h2 className="mt-5">Côté HOBBIES/PASSIONS</h2>
                <div className="w-25 mx-auto">
                    <Image className={`${styles.image}`}
                        src="/images/heart2.png"
                        alt="illustration passions"
                        width={500}
                        height={501} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
                <CardPottery />
                <CardWood />
                <CardDeco />
                <CardBakery />
            </div>
        </div>
        {/* Section PROJETS */}
        <div className="row mx-0 mt-5 d-flex flex-column flex-md-row justify-content-center" id="projets">
            <h2 className="mt-5 pt-5 fs-1 fw-bold text-center">MES PROJETS</h2>
            <div className="w-25 mx-auto pt-5 pb-5">
                    <Image className={`${styles.image}`}
                        src="/images/idea.png"
                        alt="illustration ampoule"
                        width={500}
                        height={249} 
                        layout="responsive"
                        priority='true'
                    />
            </div>
            <div className="mb-5 text-center fs-5">
                Quelques projets réalisés lors de ma formation... <br />en attendant avec impatience ceux à venir !
            </div>
   
            {projects.map(project => (
                <div className="col col-md-5 mb-5 text-center" key={project.id}>
                    <CardProject 
                    id={project.id}
                    name={project.name}
                    title={project.title}
                    description={project.description}
                    techno={project.techno}
                    image={project.image}
                    link={project.link}
                    github={project.github}
                    />
                </div>
            ))}
                <Link href="#contact">
                    <motion.button
                        className="button-scroll"
                        transition={bounceTransition}
                        animate={{
                        y: ["100%","80%"],
                        }}
                    >
                    <i className="bi bi-arrow-down-circle-fill fs-1 p-2"></i>
                    </motion.button>
                </Link>
        </div>
        {/* Section CONTACT */}
        <div className="row m-0 d-flex flex-column flex-md-row" id="contact">
            <h2 className="mt-5 fs-1 fw-bold text-center">
                <Typewriter
                    options={{
                        strings: ['PARLONS-NOUS', 'ET COLLABORONS ENSEMBLE !'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            
            
            <div className="col col-lg-8 mx-auto p-2 mt-5 mb-5">
                <div className="w-25 mx-auto mb-4">
                    <Image className={`${styles.image}`}
                        src="/images/phone.png"
                        alt=""
                        width={500}
                        height={213} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
                <div className="d-flex justify-content-center">
                </div>
                <div className="mb-5 text-center fs-4">06 29 71 78 72</div>
                <Form />
            </div>
        </div>
    </div>
    </main>
    </div>
  )
}
