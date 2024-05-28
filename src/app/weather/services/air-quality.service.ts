import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY_W } from '../API_KEY.const';
import { AirQualityDataAPI } from '../interfaces/air-quality-data';
import { Location } from '../interfaces/location';


@Injectable({
	providedIn: 'root'
})
export class AirQualityService {
	apiKey: string = API_KEY_W;
	apiUrl: string = 'https://api.weatherbit.io/v2.0/';
	urlParams!: HttpParams;
	lang: string = 'pl';
	target!: string;


	setAirQualityParams(location: any, target?: string): void {
		this.urlParams = new HttpParams();
		if (target === 'inputBtn' || target === 'enter') {
			this.urlParams = this.urlParams.append('city', location.city);
		} else {
			this.urlParams = this.urlParams.append('lat', location.latitude);
			this.urlParams = this.urlParams.append('lon', location.longitude);
		}
		this.urlParams = this.urlParams.append('key', this.apiKey);
		this.urlParams = this.urlParams.append('lang', this.lang);
	}

	constructor(private http: HttpClient) { }

	getAirQualityData(location: Location, target?: string) {
		this.setAirQualityParams(location, target);
		return this.http.get<AirQualityDataAPI>(`${this.apiUrl}current/airquality?`, {
			params: this.urlParams,
		});
	}
}
