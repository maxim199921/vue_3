export enum FinishingTypes {
    WHITE_FRAME = 'White frame',
    BLACK_FRAME = 'Black frame',
    GREEN_FRAME = 'Green frame',
    TURNKEY_FINISHING = 'Turnkey finishing',
}

export const finishingTypesKey = {
    [FinishingTypes.WHITE_FRAME]: 'WHITE_FRAME',
    [FinishingTypes.BLACK_FRAME]: 'BLACK_FRAME',
    [FinishingTypes.GREEN_FRAME]: 'GREEN_FRAME',
    [FinishingTypes.TURNKEY_FINISHING]: 'TURNKEY_FINISHING',
};

export const finishingTypesItemsArray = [
    {
        key: finishingTypesKey[FinishingTypes.WHITE_FRAME],
        value: FinishingTypes.WHITE_FRAME
    },
    {
        key: finishingTypesKey[FinishingTypes.BLACK_FRAME],
        value: FinishingTypes.BLACK_FRAME
    },
    {
        key: finishingTypesKey[FinishingTypes.GREEN_FRAME],
        value: FinishingTypes.GREEN_FRAME
    },
    {
        key: finishingTypesKey[FinishingTypes.TURNKEY_FINISHING],
        value: FinishingTypes.TURNKEY_FINISHING
    },
];
