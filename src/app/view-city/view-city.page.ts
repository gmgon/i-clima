import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, City } from '../services/data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Weather} from '../Model/Weather';

@Component({
  selector: 'app-view-city',
  templateUrl: './view-city.page.html',
  styleUrls: ['./view-city.page.scss'],
})

export class ViewCityPage implements OnInit {
  public city: City;
  public weather: Weather = new Weather();
  public isReady: boolean = false;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  private APIAnswer;

  ngOnInit() {
    this.isReady = false;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.city = this.data.getCityById(parseInt(id, 10));
    this.data.getAPIByCityId(parseInt(id, 10)).subscribe(
      res => 
      { 
        console.log(res);
        this.APIAnswer = res; 
        this.weather.id = this.APIAnswer.id;
        this.weather.temp = Math.round(this.APIAnswer.main.temp - 273.15);
        this.weather.description = this.APIAnswer.weather[0].description;
        this.weather.pressure = this.APIAnswer.main.pressure;
        this.weather.temp_min = Math.round(this.APIAnswer.main.temp_min - 273.15);
        this.weather.temp_max = Math.round(this.APIAnswer.main.temp_max - 273.15);
        this.weather.humidity = this.APIAnswer.main.humidity;
        this.isReady = true;
      },
      err => 
      {
        console.log(err);
        this.isReady = false;
      }
    );

    this.isReady = true;
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

}
