import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from "react";
import { decos } from '../datas/dataList'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function CardDeco() {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const images = decos.map(function (deco) {return deco.image;});

    return (  <>
        <div className="row mx-0 mb-5 text-center d-flex flex-column flex-md-row justify-content-center">
            <h3 className="mt-3 mb-3">BRICO/DÉCO</h3>
            <div className="col-10 col-md-4 col-lg-4 mx-auto mb-2">
                <div className="">
                    <Image 
                        src="/images/deco1.jpg"
                        alt="illustration bricolage"
                        width={3104}
                        height={4720} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4 mx-auto mb-2">
                <div className="">
                    <Image 
                        src="/images/deco2.jpg"
                        alt="illustration bricolage"
                        width={3104}
                        height={4720} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4 mx-auto mb-2">
                <div className="">
                    <Image 
                        src="/images/deco4.jpg"
                        alt="illustration bricolage"
                        width={3104}
                        height={4720} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
            </div>

            <span className="infos me-4" onClick={handleShow}><i className="bi bi-search fs-4 me-2"></i>Voir plus</span>             
            {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={handleClose}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
            />
            )}
        </div>
    </>
    )  
}