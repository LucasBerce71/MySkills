import React from 'react';
import SnackBar from 'react-native-snackbar-component';

import { ISnackBar } from '../../models/ISnackbar';

const SnackBarComponent: React.FC<ISnackBar> = ({ 
    visible,
    textMessage,
    actionHandler,
    actionText 
}) => {
    return (
        <SnackBar 
            visible={visible}
            textMessage={textMessage}
            actionHandler={() => actionHandler()}
            actionText={actionText}
            
        />
    )
}