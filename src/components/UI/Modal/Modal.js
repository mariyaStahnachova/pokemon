import React from 'react';
import css from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop=props=>{
    return <div className={css.backdrop}></div>

}
const ModalOverlay=props=>{
return <div className={css.modal}>{props.children}</div>
}

const Modal = (props) => {
    const overlayNode = document.getElementById('overlay')
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>,overlayNode)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlayNode)}

        </>
    );
};

export default Modal;