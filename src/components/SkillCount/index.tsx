import React from 'react';
import { Text } from 'react-native';
import { ISkillCount } from '../../models/ISkillCount';
import { skillCount } from '../../utils/skillCount';
import { styles } from './styles';

export const SkillCount: React.FC<ISkillCount> = ({ groupSkills }) => {
    return (
        <Text style={styles.MySkillsText}>
            My Skills {`(${skillCount(groupSkills)})`}
        </Text>
    );
}