export enum Cities {
    BATUMI = 'Batumi',
    TBILICY = 'Tbilicy',
}

export const cityKey = {
    [Cities.BATUMI]: 'BATUMI',
    [Cities.TBILICY]: 'TBILICY',
};

export const cityItemsArray = [
    {
        key: cityKey[Cities.BATUMI],
        value: Cities.BATUMI
    },
    {
        key: cityKey[Cities.TBILICY],
        value: Cities.TBILICY
    },
];
