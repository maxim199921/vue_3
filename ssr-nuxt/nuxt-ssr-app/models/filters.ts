import {Cities} from "~/models/city";
import {FinishingTypes} from "~/models/finishingTypes";
import {Types} from "~/models/estateTypes";

export interface IFiltersEstate {
    squareF: number | null,
    squareT: number | null,
    priceF: number | null,
    priceT: number | null,
    floorF: number | null,
    floorT: number | null,
    cities: Cities[]
    bedroomF: number | null,
    bedroomT: number | null,
    bathroomF: number | null,
    bathroomT: number | null,
    finishingTypes: FinishingTypes[],
    types: Types[],
}

export class FiltersEstate {
    squareF: number | null;
    squareT: number | null;
    priceF: number | null;
    priceT: number | null;
    floorF: number | null;
    floorT: number | null;
    cities: Cities[];
    bedroomF: number | null;
    bedroomT: number | null;
    bathroomF: number | null;
    bathroomT: number | null;
    finishingTypes: FinishingTypes[];
    types: Types[];

    constructor(filters?: IFiltersEstate) {
        this.squareF = (filters?.squareF && typeof +filters.squareF === 'number') ? +filters.squareF : null;
        this.squareT = (filters?.squareT && typeof +filters.squareT === 'number') ? +filters.squareT : null;
        this.priceF = (filters?.priceF && typeof +filters.priceF === 'number') ? +filters.priceF : null;
        this.priceT = (filters?.priceT && typeof +filters.priceT === 'number') ? +filters.priceT : null;
        this.floorF = (filters?.floorF && typeof +filters.floorF === 'number') ? +filters.floorF : null;
        this.floorT = (filters?.floorT && typeof +filters.floorT === 'number') ? +filters.floorT : null;
        this.cities = filters?.cities ?? [];
        this.bedroomF = (filters?.bedroomF && typeof +filters.bedroomF === 'number') ? +filters.bedroomF : null;
        this.bedroomT = (filters?.bedroomT && typeof +filters.bedroomT === 'number') ? +filters.bedroomT : null;
        this.bathroomF = (filters?.bathroomF && typeof +filters.bathroomF === 'number') ? +filters.bathroomF : null;
        this.bathroomT = (filters?.bathroomT && typeof +filters.bathroomT === 'number') ? +filters.bathroomT : null;
        this.finishingTypes = filters?.finishingTypes ?? [];
        this.types = filters?.types ?? [];
    }

    createSerializableObject(): Record<string, unknown> {
        return {};
    }
}
