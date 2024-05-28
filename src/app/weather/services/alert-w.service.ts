import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY_W } from '../API_KEY.const';
import { Location } from '../interfaces/location';
import { WeatherAlertsDataAPI } from '../interfaces/alerts-w-data';

@Injectable({
	providedIn: 'root'
})
export class WeatherAlertsService {
	apiKey: string = API_KEY_W;
	apiUrl: string = 'https://api.weatherbit.io/v2.0/';
	urlParams!: HttpParams;
	lang: string = 'pl';
	target!: string;

	setWeatherAlertsParams(location: any, target?: string): void {
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

	getWeatherAlertsData(location: Location, target?: string) {
		this.setWeatherAlertsParams(location, target);
		return this.http.get<WeatherAlertsDataAPI>(`${this.apiUrl}alerts?`, {
			params: this.urlParams,
		});
	}
}
