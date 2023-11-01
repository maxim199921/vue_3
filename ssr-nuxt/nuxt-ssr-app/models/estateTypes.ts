export enum Types {
    TOWNHOUSE = 'Townhouse',
    HOUSES = 'Houses',
    APARTMENTS = 'Apartments',
}

export const typesKey = {
    [Types.TOWNHOUSE]: 'TOWNHOUSE',
    [Types.HOUSES]: 'HOUSES',
    [Types.APARTMENTS]: 'APARTMENTS',
};

export const typesItemsArray = [
    {
        key: typesKey[Types.TOWNHOUSE],
        value: Types.TOWNHOUSE
    },
    {
        key: typesKey[Types.HOUSES],
        value: Types.HOUSES
    },
    {
        key: typesKey[Types.APARTMENTS],
        value: Types.APARTMENTS
    },
];
