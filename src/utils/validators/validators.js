export const required = value => {
    if (value) return undefined;
    return "Fill in the field!";
}
export const maxlengthCreator = (maxlength) => (value) => {
    if (value.length > maxlength) return `Max length is ${maxlength} sybols!`;
    return undefined;
}
