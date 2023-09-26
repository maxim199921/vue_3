export const maxFileSize = 2048000;
export const maxFileSizeError = 'Max allowed size is 2MB. Some images more then 2MB remove or convert please';
export const passwordMinText = 'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special';
export const requiredError = (fieldName: string): string => `${fieldName} is required field`;
export const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};
