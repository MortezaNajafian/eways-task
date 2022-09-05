interface IModal {
    visible: boolean
    setVisible?: (value: boolean) => void
    selectedId?: number
    setSelectedId?: (value: number) => void
}


export default IModal