export interface CityWeatherMain {
  /**
   * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
   */
  readonly temp: number;
  /**
   * Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
   */
  readonly feels_like: number;
  /**
   * Minimum temperature at the moment. This is minimal currently observed temperature
   */
  readonly temp_min: number;
  /**
   * Maximum temperature at the moment. This is maximal currently observed temperature
   */
  readonly temp_max: number;
  /**
   * Atmospheric pressure on the sea level, hPa
   */
  readonly pressure: number;
  /**
   * Humidity, %
   */
  readonly humidity: number;
  /**
   * Atmospheric pressure on the sea level, hPa
   */
  readonly sea_level: number;
  /**
   * Atmospheric pressure on the ground level, hPa
   */
  readonly grnd_level: number;
}
