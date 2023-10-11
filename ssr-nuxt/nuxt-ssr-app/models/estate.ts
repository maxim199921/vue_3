export interface IEstate {
    id: string;
    name: string
    description: string;
    square: number;
    price: number;
    floor: number;
    bedroom: number;
    bathroom: number;
    city: string;
    address: string;
    latitude: string;
    longitude: string;
    type: string;
    finishingTypes: string[];
}

export class Estate {
    id: string
    name: string
    description: string;
    square: number;
    price: number;
    floor: number;
    bedroom: number;
    bathroom: number;
    city: string;
    address: string;
    latitude: string;
    longitude: string;
    type: string;
    finishingTypes: string[];

    constructor(estate: IEstate) {
        this.id = estate.id ?? '';
        this.name = estate.name ?? '';
        this.description = estate.description ?? '';
        this.square = +estate.square ?? 0;
        this.price = +estate.price ?? 0;
        this.floor = +estate.floor ?? 0;
        this.bedroom = +estate.bedroom ?? 0;
        this.bathroom = +estate.bathroom ?? 0;
        this.city = estate.city ?? '';
        this.address = estate.address ?? '';
        this.latitude = (+estate.latitude as number).toFixed(2).toString() ?? '';
        this.longitude = (+estate.longitude as number).toFixed(2).toString() ?? '';
        this.type = estate.type ?? '';
        this.finishingTypes = estate.finishingTypes ?? [];
    }

    createSerializableObject(): Record<string, unknown> {
        return {};
    }
}
