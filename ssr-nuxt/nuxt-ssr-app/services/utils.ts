import i18n from "~/plugins/i18n";

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

export const getTypesItemsLocale = (items: any[], $t: typeof i18n): any[] => {
    return items.map((items) => {
        return {...items, value: $t(items.value)};
    })
}
