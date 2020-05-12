import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpClient } from '@angular/common/http';



export interface City {
  name: string;
  country: string;
  clong: number;
  clat: number;
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //HARDCODE
  public cities: City[] = [ 
    {
      name: 'Buenos Aires',
      country: 'AR',
      clong: -58.450001, 
      clat: -34.599998,
      id: 3433955,
    },
    {
      name: 'Rio de Janeiro',
      country: 'BR',
      clong: -43.2075,
      clat: -22.902781,
      id: 3451190,
    },
    {
      name: 'Nueva York',
      country: 'US',
      clong: -74.005966,
      clat: 40.714272,
      id: 5128581,
    },
    {
      name: 'Londres',
      country: 'GB',
      clong: -0.12574,
      clat: 51.50853,
      id: 2643743,
    },
    {
      name: 'París',
      country: 'FR',
      clong: 2.3486,
      clat: 48.853401,
      id: 2968815,
    },
    {
      name: 'Tokio',
      country: 'JP',
      clong: 139.691711,
      clat: 35.689499,
      id: 1850147,
    },
    {
      name: 'Moscú',
      country: 'RU',
      clong: 37.615555,
      clat: 55.75222,
      id: 524901,
    },
  ];

  // HARDCODE
  private APIUrlPart1 : string  = 'http://api.openweathermap.org/data/2.5/weather?id='
  private APIUrlPart2 : string  = '&appid=';
  private key : string = '0a8facfe384f88b0435ac18179554840'; 


  constructor(
    private http: HttpClient) { }

  public getCities(): City[] {
    return this.cities;
  }

  public getCityById(id: number): City {
    return this.cities.filter(city => city.id === id)[0];
  }

  public getAPIByCityId(id: number)
  {
    return this.http.get(this.APIUrlPart1 + id + this.APIUrlPart2 + this.key);
  }

  

}
