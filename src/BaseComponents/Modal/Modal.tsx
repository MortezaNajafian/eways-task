import React, {FC, ReactNode, useContext} from 'react';
import s from './Modal.module.scss'
import ReactDOM from "react-dom";
import ModalContext from "../../contexts/ModalContext";

interface IModalProps {
    children?: ReactNode
    dataTest?: string
}

const Modal: FC<IModalProps> = ({children,dataTest}) => {


    const {visible, setVisible} = useContext(ModalContext);

    const closeModal = (event: any) => {
        event.stopPropagation()
        setVisible?.(false)
    }


    const ModalElement = <div className={`${s.modalWrapper} ${!visible ? s.hide : s.show}`}
                              onClick={closeModal} data-test={dataTest}>

        <div className={s.body} onClick={(event) => {
            event.stopPropagation()
        }
        }>
            <div className={s.header}>
                <button className={s.closeButton}  onClick={closeModal} data-test="modal-close-button"/>
            </div>
            <div>{children}</div>
        </div>
    </div>

    return ReactDOM.createPortal(ModalElement, document.getElementById('modal') as Element)
};

export default Modal;