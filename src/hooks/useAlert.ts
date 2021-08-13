import { Alert } from "react-native";
import { IUserAlert } from "../models/hooks/IUseAlert";

export function useAlert({ 
    title, 
    message, 
    leftButtonText,
    leftButtonOnPress, 
    rightButtonText ,
    rightButtonOnPress
}: IUserAlert) {
    return Alert.alert(
        title, 
        message,
        [
            { 
                text: leftButtonText || "Cancelar", 
                onPress: () => leftButtonOnPress || console.log("leftButton onPressed!") 
            },
            { 
                text: rightButtonText || "Entendi",
                onPress: () => rightButtonOnPress || console.log("rightButton onPressed!") 
            },
        ]
    );
}