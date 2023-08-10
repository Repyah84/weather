import { CityWeatherMain } from './city-weather-main';

export interface CityWeatherForecastMain extends CityWeatherMain {
  /**
   * Internal parameter
   */
  readonly temp_kf: number;
}
