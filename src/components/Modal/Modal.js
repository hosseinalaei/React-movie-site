import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} close={props.close} />
            <div className="modal">
                <button onClick={props.close}>×</button>
                {props.children}
            </div>
        </>
    )
}
export default Modal