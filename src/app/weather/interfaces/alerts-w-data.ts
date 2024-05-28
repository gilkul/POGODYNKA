export interface WeatherAlertsData {
	data: any;
	lat: number;
	lon: number;
	timezone: string;
	city_name: string;
	state_code: number;
	country_code: number;
	alerts: [
		title: string,
		description: string,
		severity: string,
		effective_utc: string,
		effective_local: string,
		expires_utc: string,
		expires_local: string,
		onset_utc: string,
		onset_local: string,
		ends_utc: string,
		ends_local: string,
		uri: string,
		regions: string,
	]
	description: string;
}

export interface WeatherAlertsDataAPI {
	lat: number;
	lon: number;
	timezone: string;
	city_name: string;
	state_code: number;
	country_code: number;
	alerts: WeatherAlertsData[];
	description: string;
}
