import React, {FC} from 'react';

interface IInputProps {
    onChange?: (value: string) => void
    className?: string
}

const Input: FC<IInputProps> = ({onChange, className}) => {

    const onChangeInput = (event: any) => {
        onChange?.(event.target.value)
    }

    return (
        <input type="text" onChange={onChangeInput} className={className}/>
    );
};

export default Input;