import React, { Children } from 'react';
import {outlinedButton, primaryButton, secondaryButton, CustomButtonCall} from './Button.style';

function Button({ children, type }) {
    console.log(type);
    const customButton = () => {
        switch (type) {
            case 'primary':
                return primaryButton;
            case 'secondary':
                return secondaryButton;
            case 'outlined':
                return outlinedButton;
            default:
                return primaryButton;
        }
    }

    const CustomButtonCall = customButton();
    return (
        <CustomButtonCall>
            {children}
        </CustomButtonCall>
    );
}

export default Button;