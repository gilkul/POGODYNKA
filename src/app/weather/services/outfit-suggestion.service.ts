import { Injectable } from '@angular/core';
import { CurrentWeatherAPI, MainData, WindData, CloudsData, SysData } from '../interfaces/current-weather-api';
import { CurrentWeatherData } from '../interfaces/current-weather-data';
import { GetWeatherData } from './get-weather-data.service';

@Injectable({
	providedIn: 'root'
})
export class OutfitSuggestionService {

	currentWeather: CurrentWeatherAPI = {
		description: '',
		data: [],
		temperature: 0,
		humidity: 0,
		windSpeed: 0,
		visibility: 0,
		coord: {
			lon: 0,
			lat: 0
		},
		weather: [],
		base: '',
		timezone: 0,
		name: '',
		main: {} as MainData,
		wind: {} as WindData,
		clouds: {} as CloudsData,
		dt: 0,
		sys: {
			country: '',
			sunrise: 0,
			sunset: 0
		},
		temp: 0,
		id: 0,
		cod: 0,
	};

	generateOutfitSuggestion(day: any): string {
		const temperature = day.temp;
		const wind = day.wind;
		const humidity = day.humidity;
		let outfitSuggestion = '';

		if (temperature < 0) {
			outfitSuggestion = 'Ubierz płaszcz zimowy, czapkę, rękawiczki i ciepłe buty.';
		} else if (temperature < 10) {
			outfitSuggestion = 'Ubierz kurtkę, czapkę i rękawiczki.';
		} else if (temperature < 20) {
			if (wind > 15) {
				outfitSuggestion = 'Ubierz kurtkę chroniącą przed wiatrem i długie spodnie.';
			} else {
				outfitSuggestion = 'Ubierz kurtkę i długie spodnie.';
			}
		} else {
			if (humidity > 50) {
				outfitSuggestion = 'Ubierz lekkie ubrania z przewiewnego materiału.';
			} else {
				outfitSuggestion = 'Ubierz letnie ubrania, takie jak szorty i podkoszulek.';
			}
		}
		if (wind > 25) {
			outfitSuggestion += ` Ubierz kurtkę chroniącą przed wiatrem lub szalik by ochronić się przed wiatrem.`;
		}

		if (humidity > 70) {
			outfitSuggestion += ` Ubierz ubrania szybkoschnące i przewiewne.`;
		}

		if (temperature > 25) {
			outfitSuggestion += ` Ubierz czapkę i okulary przeciwsłoneczne by uchronić się przed słońcem.`;
		}



		return outfitSuggestion;
	}
}
