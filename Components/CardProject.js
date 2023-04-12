import Link from "next/link";
import styles from "../styles/Home.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CardProject(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card fs-5 shadow">
        <div className="card-title mt-2">{props.name}</div>
        <img src={props.image} alt={props.name} />
        <div className="card-body">
          <Button
            className={`${styles.bouton} border rounded-pill me-3`}
            onClick={handleShow}
          >
            <i className="bi bi-plus me-1"></i>d'infos
          </Button>
          {props.github !== "" && (
            <Button
              className={`${styles.bouton} border rounded-pill me-3`}
              href={props.github}
              target="_blank"
            >
              <i className="bi bi-github me-2"></i>Code
            </Button>
          )}
          <Button
            className={`${styles.bouton} border rounded-pill`}
            href={props.link}
            target="_blank"
          >
            <i className="bi bi-link me-2"></i>Voir
          </Button>
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.image} alt={props.name} />
          <h4 className="mt-3 fw-bold">Objectif :</h4>
          <div className="">{props.description}</div>
          <h4 className="mt-3 fw-bold">Technos utilisées :</h4>
          <div className="">{props.techno}</div>
          {props.github !== "" && (
            <div>
              <h4 className="mt-3 fw-bold">Contraintes techniques :</h4>
              <Link href={props.github}>
                <a target="_blank" title="Voir le code">
                  <div className="text-dark">Voir le repository GITHUB</div>
                </a>
              </Link>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
