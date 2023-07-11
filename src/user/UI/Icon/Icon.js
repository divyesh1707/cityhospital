import React from 'react';
import { Icons } from './Icon.style';


function Icon({...rest}) {
    return (
        <div>
            <Icons {...rest}/>
            
        </div>
    );
}

export default Icon;