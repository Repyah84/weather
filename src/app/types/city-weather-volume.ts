export interface CityWeatherVolume {
  //Weather(Rain, Snow) volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter
  readonly '1h'?: number;
  //Weather(Rain, Snow) volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter
  readonly '3h'?: number;
}
