import { CityWeather } from './city-weather';
import { CityWeatherSys } from './city-weather-sys';

type ForecastDataCityWeather = Pick<
  CityWeather,
  'id' | 'name' | 'coord' | 'timezone'
>;

type ForecastDataCityWeatherSys = Pick<CityWeatherSys, 'sunrise' | 'sunset'>;

export interface CityWeatherForecastData
  extends ForecastDataCityWeather,
    ForecastDataCityWeatherSys {
  /**
   * Country code (GB, JP etc.). Please note that built-in geocoder functionality has been deprecated
   */
  readonly country: string;
  /**
   * City population
   */
  readonly population: number;
}
