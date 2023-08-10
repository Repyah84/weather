import { CITY_LOCAL_NAME_LIST } from '@const';

export type CityLocalNames = {
  [K in (typeof CITY_LOCAL_NAME_LIST)[number]]?: string;
};
