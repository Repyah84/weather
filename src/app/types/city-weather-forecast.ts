import { CityWeather } from './city-weather';
import { CityWeatherForecastData } from './city-weather-forecast-data';
import { CityWeatherForecastListItem } from './city-weather-forecast-list-item';

export interface CityWeatherForecast extends Pick<CityWeather, 'cod'> {
  //Internal parameter
  readonly message: number;
  //A number of timestamps returned in the API response
  readonly cnt: number;
  readonly list: CityWeatherForecastListItem[];
  readonly city: CityWeatherForecastData;
}
