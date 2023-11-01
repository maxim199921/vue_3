import {Cities} from "~/models/city";
import {isNumber} from "lodash";
import {FinishingTypes, finishingTypesKey} from "~/models/finishingTypes";
import {Types, typesKey} from "~/models/estateTypes";

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
        this.squareF = (filters?.squareF && isNumber(+filters.squareF)) ? +filters.squareF : null;
        this.squareT = (filters?.squareT && isNumber(+filters.squareT)) ? +filters.squareT : null;
        this.priceF = (filters?.priceF && isNumber(+filters.priceF)) ? +filters.priceF : null;
        this.priceT = (filters?.priceT && isNumber(+filters.priceT)) ? +filters.priceT : null;
        this.floorF = (filters?.floorF && isNumber(+filters.floorF)) ? +filters.floorF : null;
        this.floorT = (filters?.floorT && isNumber(+filters.floorT)) ? +filters.floorT : null;
        this.cities = filters?.cities ?? [];
        this.bedroomF = (filters?.bedroomF && isNumber(+filters.bedroomF)) ? +filters.bedroomF : null;
        this.bedroomT = (filters?.bedroomT && isNumber(+filters.bedroomT)) ? +filters.bedroomT : null;
        this.bathroomF = (filters?.bathroomF && isNumber(+filters.bathroomF)) ? +filters.bathroomF : null;
        this.bathroomT = (filters?.bathroomT && isNumber(+filters.bathroomT)) ? +filters.bathroomT : null;
        this.finishingTypes = filters?.finishingTypes ?? [];
        this.types = filters?.types ?? [];
    }

    createSerializableObject(): Record<string, unknown> {
        return {};
    }
}
