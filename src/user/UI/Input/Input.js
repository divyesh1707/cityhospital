import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import {primaryInput} from './Input.style'

function Input({children,type}) {
    const customInput = () => {
        switch (type) {
            case 'primary':
                return primaryInput;
            default:
                return primaryInput;
        }
    }
    const CustomInputCall = customInput();
    return (
        <CustomInputCall>
            {children}
        </CustomInputCall>
    );
}

export default Input;