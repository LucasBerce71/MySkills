import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ISkillCard } from "../../models/ISkillCard";

import { styles } from "./styles";

export const SkillCard: React.FC<ISkillCard> = ({ skill }) => {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    );
}