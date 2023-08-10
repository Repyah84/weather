import { CITY_LOCAL_NAME_LIST } from '@const';

export type CityLocalNames = {
  //Name of the found location in different languages. The list of names can be different for different locations
  [K in (typeof CITY_LOCAL_NAME_LIST)[number]]?: string;
};
