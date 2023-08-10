export interface CityWeatherSys {
  /**
   * Internal parameter
   */
  readonly type: number;
  /**
   * Internal parameter
   */
  readonly id: number;
  /**
   * Internal parameter
   */
  readonly message: string;
  /**
   * Country code (GB, JP etc.)
   */
  readonly country: string;
  /**
   * Sunrise time, unix, UTC
   */
  readonly sunrise: string;
  /**
   * Sunset time, unix, UTC
   */
  readonly sunset: string;
}
