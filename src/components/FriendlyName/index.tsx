import React from 'react';
import { Text } from 'react-native';

import { IFriendlyName } from '../../models/IFriendlyName';
import { verifyWhiteSpaces } from '../../utils/verifyWhiteSpaces';
import { styles } from './styles';

export const FriendlyName: React.FC<IFriendlyName> = ({ friendlyNameValue }) => {
    return (
        <Text style={styles.FriendlyName}>
            {friendlyNameValue && verifyWhiteSpaces(friendlyNameValue)
                ?  `Próxima skill: ${friendlyNameValue}`
                : 'Digite algo...' 
            }
        </Text>
    );
}