// export interface CurrentWeatherData {
// 	city?: string;
// 	sunrise?: string;
// 	sunset?: string;
// 	description?: string;
// 	pressure?: number;
// 	humidity?: number;
// 	windSpeed?: number;
// 	visibility?: number;
// 	tempreture?: number;
// 	perceivedTempreture: number;
// 	icon?: string;
// }

export interface CurrentWeatherData {
	data: any;
	city: string;
	sunrise: string;
	sunset: string;
	description: string;
	pressure: number;
	humidity: number;
	windSpeed: number;
	tempreture: number;
	perceivedTempreture: number;
	icon: string;
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	visibility: number; // Add the 'visibility' property here
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	name: string;
}
