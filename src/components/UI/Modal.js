import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

function Backdrop() {
  return <div className={classes.backdrop} />;
}

function ModalOverlay({ children }) {
  return <div className={classes.modal}>{children}</div>;
}

const portalEl = document.getElementById("overlays");

function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </>
  );
}

export default Modal;
