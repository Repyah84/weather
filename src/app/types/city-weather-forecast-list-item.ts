import { CityWeather } from './city-weather';
import { CityWeatherForecastMain } from './city-weather-forecast-main';

type ForecastListItemCityWeather = Pick<
  CityWeather,
  'dt' | 'weather' | 'clouds' | 'wind' | 'visibility' | 'rain' | 'snow' | 'sys'
>;

export interface CityWeatherForecastListItem
  extends ForecastListItemCityWeather {
  /**
   * Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
   */
  readonly pop: number;
  /**
   * Time of data forecasted, ISO, UTC
   */
  readonly dt_txt: string;

  readonly main: CityWeatherForecastMain;
}
