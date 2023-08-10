export interface CityWeatherData {
  //Weather condition id
  readonly id: string;
  //Group of weather parameters (Rain, Snow, Clouds etc.)
  readonly main: string;
  //Weather condition within the group. Please find
  readonly description: string;
  //Weather icon id
  readonly icon: string;
}
