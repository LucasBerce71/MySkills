import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { ISkillCard } from "../../models/ISkillCard";

import { styles } from "./styles";

export const SkillCard: React.FC<ISkillCard> = ({ skill, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            onPress={() => onPress()}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    );
}