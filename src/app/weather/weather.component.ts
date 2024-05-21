import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit , ElementRef } from '@angular/core';
import { CurrentWeatherData } from './interfaces/current-weather-data';
import { GetWeatherData } from './services/get-weather-data.service';
import { Location } from './interfaces/location';
import { ShowErrorsService } from './services/show-errors.service';
import { ViewportScroller } from '@angular/common';
import { forkJoin, Subscription } from 'rxjs';
import { PreloaderService } from '../components/preloader/services/preloader.service';
import { OutfitSuggestionService } from './services/outfit-suggestion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { API_KEY_G } from './API_KEY.const';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})


export class WeatherComponent implements OnInit {
[x: string]: any;
	outfitSuggestions: string[] = [];
	location: Location = {};
	target!: string;
	currentWeather: CurrentWeatherData = {
		city: '',
		sunrise: '',
		sunset: '',
		description: '',
		pressure: 0,
		humidity: 0,
		windSpeed: 0,
		visibility: 0,
		tempreture: 0,
		perceivedTempreture: 0,
		icon: '',
		coord: {
			lon: 0,
			lat: 0
		},
		weather: [],
		base: '',
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0
		},
		wind: {
			speed: 0,
			deg: 0
		},
		clouds: {
			all: 0
		},
		dt: 0,
		sys: {
			type: 0,
			id: 0,
			country: '',
			sunrise: 0,
			sunset: 0
		},
		timezone: 0,
		name: '',
		data: []
	};
	forecastWeather: any = {};
	iconsURL = 'assets/images/icons/';
	sectionWithDataClass: string = 'section section--weather section--hidden';
	errorShowClass!: string;
	error!: string;
	dataSubscription: Subscription = new Subscription();
	lat: number = 0;
	lng: number = 0;
	zoom: any;


	constructor(
		private data: GetWeatherData,
		private errors: ShowErrorsService,
		private scroll: ViewportScroller,
		private ref: ChangeDetectorRef,
		public preloaderService: PreloaderService,
		private outfitSuggestionService: OutfitSuggestionService,
		private elRef: ElementRef,
		private sanitizer: DomSanitizer
	) { }
	ngOnInit(): void {

	}


	generateOutfitSuggestion(day: any): void {
		let suggestion = this.outfitSuggestionService.generateOutfitSuggestion(day);
	}

	showErrorMsgBox(): void {
		if (this.location.city === '') {
			this.errorShowClass = 'form__message';
			this.error = this.errors.showError('emptyInput');
		} else {
			this.errorShowClass = 'form__message';
			this.error = this.errors.showError('serverErr');
		}
	}

	scrollToTop(): void {
		this.scroll.scrollToPosition([0, 0]);
	}

	getLocation(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					if (position) {
						console.log("Latitude: " + position.coords.latitude +
							"Longitude: " + position.coords.longitude);
						this.lat = position.coords.latitude;
						this.lng = position.coords.longitude;
						console.log(this.lat);
						console.log(this.lng);
						this.getCityName();
					}
				},

					(error: GeolocationPositionError) => console.log(error)
			);
		}
		console.log('getLocation called');
	}

	getCityName(): void {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${API_KEY_G}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 'OK') {
					const result = data.results[0];
					const city = result.address_components.find((component: { types: string | string[]; }) => component.types.includes('locality'));
					if (city) {
						this.location.city = city.long_name;
						console.log(this.location.city);
					}
				}
			})
			.catch((error) => console.error(error));
	}


showData(): void {
  this.dataSubscription = forkJoin({
    current: this.data.getCurrentWeatherData(this.location, this.target),
    forecast: this.data.getForecastWeatherData(this.location, this.target),
  }).subscribe({
    next: (response) => {
      console.log(response.forecast);
      if (response) {
        this.errorShowClass = '';
        this.error = '';
        const data = response.current.data[0];
        this.currentWeather.city = data.city_name;
        this.currentWeather.sunrise = data.sunrise;
        this.currentWeather.sunset = data.sunset;
        this.currentWeather.description = data.weather.description;
        this.currentWeather.pressure = data.pres;
        this.currentWeather.humidity = data.rh;
        this.currentWeather.windSpeed = data.wind_spd;
        this.currentWeather.visibility = data.vis;
        this.currentWeather.tempreture = data.temp;
        this.currentWeather.perceivedTempreture = data.app_temp;
        this.currentWeather.icon = `${this.iconsURL}${data.weather.icon}.svg`;
        this.forecastWeather = response.forecast;
        this.currentWeather.data = response.current.data;
        this.outfitSuggestions = this.currentWeather.data.map((day: any) => {
          return this.outfitSuggestionService.generateOutfitSuggestion(day);
        });
        console.log(this.outfitSuggestions);

      } else {
        this.errorShowClass = 'form__message';
        this.error = this.errors.showError('noData');
      }
    },
    error: () => {
      this.preloaderService.isLoading.next(false);
      this.showErrorMsgBox();
    },
    complete: () => {
      if (this.location.city || this.target === 'geolocation') {
        this.preloaderService.isLoading.next(false);
        this.sectionWithDataClass = 'section section--weather';
        this.ref.detectChanges();
        this.scroll.scrollToAnchor('currentWeatherSection');
      }
    },
  });
}

	async startApp(target: string): Promise<void> {
		this.target = target;
		console.log('startApp called with target:', target);
		if (this.target === 'geolocation') {
			console.log('getLocation called from startApp with target: geolocation');
			try {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						(position) => {
							this.location = {
								latitude: position.coords.latitude,
								longitude: position.coords.longitude,
							};
							this.showData();
						},
						() => {
							this.showErrorMsgBox();
						}
					);
				} else {
					this.showErrorMsgBox();
				}
			} catch (error) {
				this.showErrorMsgBox();
			}
		} else if (this.target === 'inputBtn' || this.target === 'enter') {
			console.log('getLocation called from startApp with target: inputBtn or enter');
			if (this.location.city) {
				this.showData();
			} else {
				this.errorShowClass = 'form__message';
				this.error = this.errors.showError('emptyInput');
			}
		}
	}

	getWeatherByGeolocation(): void {
		this.errorShowClass = '';
		this.error = '';
		this.getLocation();
	}



	ngOnDestroy = (): void => {
		this.dataSubscription.unsubscribe();
	};
}


