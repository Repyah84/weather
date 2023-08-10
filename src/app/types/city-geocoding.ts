import { CityLocalNames } from './city-local-names';
import { CityWeatherCoord } from './city-weather-coord';

export interface CityGeocoding extends CityWeatherCoord {
  //Country of the found location
  readonly country: string;
  //Name of the found location
  readonly name: string;
  //State of the found location
  readonly state?: string;
  readonly local_names?: CityLocalNames;
}
