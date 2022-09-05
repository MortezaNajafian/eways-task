import {createContext} from 'react'
import IModal from "../models/IModal";

const ModalContext = createContext<IModal>({visible: false})


export default ModalContext