import { CityWeatherMain } from './city-weather-main';

export interface CityWeatherForecastMain extends CityWeatherMain {
  readonly temp_kf: number;
}
