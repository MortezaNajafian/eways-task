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
            <h2>{selectedData?.title}</h2>
            <div>
                {selectedData?.body}
            </div>
        </div>
    );
};

export default ModalContent;