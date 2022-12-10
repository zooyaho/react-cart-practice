import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

function Backdrop({ onClose }) {
  return <div className={classes.backdrop} onClick={onClose} />;
}

function ModalOverlay({ children }) {
  return <div className={classes.modal}>{children}</div>;
}

const portalEl = document.getElementById("overlays");

function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </>
  );
}

export default Modal;
