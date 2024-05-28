interface WeatherDescription {
	icon?: string;
	code?: number;
	description?: string;
}

export interface ForecastData {
	datetime: string;
	temp: number;
	maxTemp: number;
	minTemp: number;
	feelsLike: number;
	dewpt: number;
	humidity: number;
	pressure: number;
	windSpeed: number;
	windDir: number;
	windGust: number;
	cloudCover: number;
	precipitation: number;
	uvIndex: number;
	visibility: number;
	weather: WeatherDescription;
	sunrise: number;
	sunset: number;
	moonPhase: number;
	ozone: number;
}

export interface ForecastWeatherAPI {
	temp: number;
	description: any;
	data: ForecastData[];
}
