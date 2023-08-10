export interface CityWeatherWind {
  //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
  readonly speed: number;
  //Wind direction, degrees (meteorological)
  readonly deg: number;
  //Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
  readonly gust: number;
}
