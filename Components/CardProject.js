import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

export default function CardProject(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (  
        <>
            <div className="card fs-5 shadow">
                <div className="card-title mt-2">{props.name}</div>
                <img src={props.image} alt="" />
                <div className="card-body">
                    <span className="infos border rounded-pill px-2 py-1 me-4" onClick={handleShow}><i className="bi bi-plus" ></i>d'infos</span>
                    <Link href={props.github}><a className="border rounded-pill px-2 py-1 text-dark me-4" target="_blank" title="Voir le code"><i className="bi bi-github me-2 text-dark"></i>Code</a></Link>                      
                    <Link href={props.link}><a className="border rounded-pill px-2 py-1 text-dark me-4" target="_blank" title="Voir le site"><i className="bi bi-link me-2 text-dark"></i>Voir</a></Link>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.image} alt="" />
                    <h4 className="mt-3 fw-bold">Objectif :</h4>
                    <div className="">{props.description}</div>
                    <h4 className="mt-3 fw-bold">Technos utilisées :</h4>
                    <div className="">{props.techno}</div>
                    <h4 className="mt-3 fw-bold">Contraintes techniques :</h4>
                    <Link href={props.github}><a target="_blank" title="Voir le code"><div className="text-dark">Voir le repository GITHUB</div></a></Link>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}