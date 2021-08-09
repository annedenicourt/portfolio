import styles from '../styles/Home.module.css'
import { useState, useRef } from "react";
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

export default function CardLang() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const target = useRef(null);
    const target2 = useRef(null);

    return (  <>
        <div className="row m-0 text-center justify-content-center ">
            <div className="col-8 col-md-3 col-lg-3 mx-auto d-flex">
                <Button variant="" ref={target} onClick={() => setShow(!show)}>
                <img src="/images/anglais.png" alt="drapeau anglais"></img>
                <span className="d-block d-md-none">Technique</span>
                </Button>
                <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Technique
                    </Tooltip>
                    )}
                </Overlay>
                <Button variant="" ref={target2} onClick={() => setShow2(!show2)}>
                    <img src="/images/espagnol.png" alt="drapeau espagnol"></img>
                    <span className="d-block d-md-none">Bilingue</span>
                </Button>
                <Overlay target={target2.current} show={show2} placement="bottom">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Bilingue
                    </Tooltip>
                    )}
                </Overlay>
            </div>
        </div>
    </>
    )
}