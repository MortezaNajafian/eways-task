import React, {FC, ReactNode, useContext} from 'react';
import s from './CardTitle.module.scss'
import ModalContext from "../../contexts/ModalContext";

export interface ICardTitleProps {
    title?: ReactNode
    id: number
}

const CardTitle: FC<ICardTitleProps> = ({title, id}) => {

    const {setVisible, setSelectedId} = useContext(ModalContext);


    const openModal = (selectedId: number) => {
        setSelectedId?.(selectedId)
        setVisible?.(true)
    }


    return (
        <div className={s.cardTitleWrapper} onClick={openModal.bind(this, id)} data-test="card-title">
            {title}
        </div>
    );
};

export default CardTitle;