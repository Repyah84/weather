import { CityLocalNames } from './city-local-names';

export interface CityGeocoding {
  readonly country: string;
  readonly lat: number;
  readonly lon: number;
  readonly name: string;
  readonly state: string;
  readonly local_names: CityLocalNames;
}
