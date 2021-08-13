import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { IButton } from "../../models/IButton";

import { styles } from "./styles";

export const Button: React.FC<IButton> = ({ onPress, type, disabled }) => {
    return (
        <TouchableOpacity
            style={[
                type === "ADD" ? styles.button : styles.buttonRemove, 
                disabled && styles.buttonDisabled
            ]}
            activeOpacity={.7}
            onPress={() => onPress()}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>
                {type === "ADD" ? "Add" : "Remove All"}
            </Text>
        </TouchableOpacity>
    );
};