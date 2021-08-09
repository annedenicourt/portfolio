import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {

    return (  <>
        <div className="row mx-0 mt-5 mb-5 text-center d-flex flex-column flex-md-row justify-content-center">
            <div className="col col-md-8 col-lg-5  mx-auto mb-2">
                <div className="w-50 mx-auto">
                    <Image className={`${styles.image}`}
                        src="/images/groupe.png"
                        alt="illustration groupe travail"
                        width={1200}
                        height={681} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
                <div className="">Site réalisé avec REACT et NEXT.JS</div>
            </div>
        </div>
    </>
    )
}