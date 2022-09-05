import React, {FC} from 'react';
import CardTitle from "../CardTitle/CardTitle";
import IUser from "../../models/IUser";
import s from './Card.module.scss'

interface ICardProps {
    userData: IUser[]

}

const Card: FC<ICardProps> = ({ userData}) => {
    return (
        <div className={s.cardWrapper} data-test="app-card">
            {userData.map(user => (<CardTitle key={user.id} id={user.id} title={user.title}/>))}
        </div>
    );
};

export default Card;