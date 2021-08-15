export const verifyWhiteSpaces = (value: string) => {
    if (value.indexOf(" ") === 0) return true;
    
    return false;
}