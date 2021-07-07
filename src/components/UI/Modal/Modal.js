import React from 'react';
import css from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop=()=>{
    return <div className={css.backdrop}/>

}
const ModalOverlay=props=>{
return <div className={css.modal}>
    <>
    {props.children}
        <button onClick={props.onClick}>Close</button>
    </>
</div>
}

const Modal = (props) => {
    const overlayNode = document.getElementById('overlay')
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>,overlayNode)}
            {ReactDOM.createPortal(<ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,overlayNode)}

        </>
    );
};

export default Modal;