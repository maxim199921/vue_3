export const validateFileArray = (items: File[], size: number) => {
    return (items || []).reduce((acc, file) => {
        if (file.size <= size) {
            return true;
        }
        return acc
    }, false)
};

export const serializeNonPOJOs = (value: object | null) => {
    return JSON.parse(JSON.stringify(value));
};
