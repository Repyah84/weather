import { CityWeatherClouds } from './city-weather-clouds';
import { CityWeatherCoord } from './city-weather-coord';
import { CityWeatherData } from './city-weather-data';
import { CityWeatherMain } from './city-weather-main';
import { CityWeatherSys } from './city-weather-sys';
import { CityWeatherVolume } from './city-weather-volume';
import { CityWeatherWind } from './city-weather-wind';

export interface CityWeather {
  /**
   * City ID. Please note that built-in geocoder functionality has been deprecated. Learn more
   */
  readonly id: number;
  /**
   * City name. Please note that built-in geocoder functionality has been deprecated. Learn more
   */
  readonly name: string;
  /**
   * Internal parameter
   */
  readonly cod: number;

  readonly coord: CityWeatherCoord;

  readonly weather: CityWeatherData[];
  /**
   * Internal parameter
   */
  readonly base: string;

  readonly main: CityWeatherMain;
  /**
   * Visibility, meter. The maximum value of the visibility is 10 km
   */
  readonly visibility: number;

  readonly wind: CityWeatherWind;

  readonly rain: CityWeatherVolume;

  readonly snow: CityWeatherVolume;

  readonly clouds: CityWeatherClouds;
  /**
   * Time of data calculation, unix, UTC
   */
  readonly dt: number;

  readonly sys: CityWeatherSys;
  /**
   * Shift in seconds from UTC
   */
  readonly timezone: number;
}
