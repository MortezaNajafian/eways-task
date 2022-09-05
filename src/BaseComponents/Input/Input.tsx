import React, {FC} from 'react';

interface IInputProps {
    onChange?: (value: string) => void
    className?: string
    dataTest?: string
}

const Input: FC<IInputProps> = ({onChange, className,dataTest}) => {

    const onChangeInput = (event: any) => {
        onChange?.(event.target.value)
    }

    return (
        <input data-test={dataTest} type="text" onChange={onChangeInput} className={className}/>
    );
};

export default Input;