export interface IButton {
    type: "ADD" | "REMOVE";
    disabled: boolean;
    onPress: Function;
}