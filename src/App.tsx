import React, {useCallback, useState} from "react";
import data from "./posts.json";
import Card from "./components/Card/Card";
import s from './App.module.scss'
import {groupBy, debounce} from 'lodash'
import {Input, Modal} from "./BaseComponents";
import IData from "./models/IData";
import ModalContext from "./contexts/ModalContext";
import ModalContent from "./components/ModalContent/ModalContent";
import IUser from "./models/IUser";


function App() {

    const shapedData: IUser[] = data
    const groupedData: IData = groupBy(shapedData, (item) => item.userId)
    const [searchValue, setSearchValue] = useState('')
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<undefined | number>(undefined);


    const filteredUsersByTitle = useCallback(
        () => {
            const data: IData = {}
            Object.keys(groupedData).forEach((userId) => {
                data[userId] = groupedData[userId].filter(user => user.title.includes(searchValue))
            })
            return data
        }
        ,
        [searchValue],
    );


    const onChangeSearchValue = debounce((value: string) => {
        setSearchValue(value)
    }, 100)


    return (
        <ModalContext.Provider
            value={{visible: visibleModal, setVisible: setVisibleModal, selectedId, setSelectedId}}>
            <div className={s.appWrapper}>
                <div className={s.searchSection}>
                    <span>Search Term :</span>
                    <Input dataTest="search-input" onChange={onChangeSearchValue}
                           className="border-black border rounded-lg outline-none focus:border-blue-600 p-2"/>
                </div>
                <div className={s.cards} data-test="app-cards">
                    {Object.keys(filteredUsersByTitle()).map(userId => ((
                        <Card userData={filteredUsersByTitle()[userId]} key={userId}/>)))}
                </div>
                <Modal dataTest="app-modal">
                    <ModalContent shapedData={shapedData}/>
                </Modal>
            </div>
        </ModalContext.Provider>

    );
}

export default App;
