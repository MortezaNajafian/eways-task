import React, {FC, useContext} from 'react';
import s from './ModalContent.module.scss'
import IUser from "../../models/IUser";
import ModalContext from "../../contexts/ModalContext";

interface IModalContentProps {
    shapedData: IUser[]
}

const ModalContent: FC<IModalContentProps> = ({shapedData}) => {

    const {selectedId} = useContext(ModalContext);
    const selectedData = shapedData?.find(data => data.id === selectedId)

    return (
        <div className={s.modalContentWrapper}>
            <h2 data-test="modal-content-title">{selectedData?.title}</h2>
            <div data-test="modal-content-body">
                {selectedData?.body}
            </div>
        </div>
    );
};

export default ModalContent;