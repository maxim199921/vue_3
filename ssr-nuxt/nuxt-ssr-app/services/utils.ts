export const validateFileArray = (items: File[], size: number) => {
    return (items || []).reduce((acc, file) => {
        if (file.size <= size) {
            return true;
        }
        return acc
    }, false)
};
