import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from "react";
import { bakerys } from '../datas/dataList'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function CardDeco() {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const images = bakerys.map(function (bakery) {return bakery.image;});

    return (  <>
        <div className="row mx-0 mb-5 text-center d-flex flex-column flex-md-row justify-content-center">
            <h3 className="mt-3 mb-3">PÂTISSERIE/CANDY BAR</h3>
            <div className="col-10 col-md-4 col-lg-4 mx-auto mb-2">
                <div className="">
                    <Image 
                        src="/images/bakery6.jpg"
                        alt="illustration passions"
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
                        src="/images/bakery2.jpg"
                        alt="illustration passions"
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
                        src="/images/bakery3.jpg"
                        alt="illustration passions"
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