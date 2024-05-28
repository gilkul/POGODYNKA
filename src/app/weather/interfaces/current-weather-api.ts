export interface WeatherDescription {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface MainData {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

export interface WindData {
	speed: number;
	deg: number;
}

export interface CloudsData {
	all: number;
}

export interface SysData {
	country: string;
	sunrise: number;
	sunset: number;
}

export interface CurrentWeatherAPI {
	description: any;
	temp: number;
	temperature: number;
	humidity: number;
	windSpeed: number;
	data: any;
	visibility: number;
	coord: {
		lon: number;
		lat: number;
	};
	weather: WeatherDescription[];
	base: string;
	main: MainData;
	wind: WindData;
	clouds: CloudsData;
	dt: number;
	sys: SysData;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

